// backend/server.js
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import NodeCache from 'node-cache';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5001;

// change this to your sheet script URL
const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbyQZgRpnOZ1-wkfpAC-oMYV9sg1U4ZWQI_OhC4cJPN8U568_XteNk282_b0y4zSU4Wz/exec';

// keep the bootcamp id on backend
const TARGET_BOOTCAMP_ID =
  process.env.TARGET_BOOTCAMP_ID || 'clrluxl5101a8pcei3jgvtxi8';

// cache (5 minutes)
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

// allow origins - for dev allow localhost:5173; in production set env ALLOWED_ORIGINS
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '*').split(',');

app.use(express.json({ limit: '100kb' }));

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // allow non-browser (curl/postman) or same-origin
      if (allowedOrigins.includes('*') || allowedOrigins.includes(origin))
        return cb(null, true);
      cb(new Error('CORS not allowed'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

// basic rate limiter: 100 req / 15min per IP (tunable)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// test route
app.get('/api/test', (req, res) =>
  res.json({ ok: true, now: new Date().toISOString() })
);

// GET /api/user/:phone -> calls TFU API, filter fields, return lightweight json
app.get('/api/user/:phone', async (req, res) => {
  const phone = req.params.phone;
  if (!/^[0-9]{10,15}$/.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone' });
  }

  // return cached if exists
  const cached = cache.get(phone);
  if (cached) {
    return res.json({ cached: true, data: cached });
  }

  try {
    const url = `https://api.thefuture.university/users/${phone}/phone`;
    const response = await fetch(url, { method: 'GET' });

    if (!response.ok) {
      // forward 404 or other status
      return res
        .status(response.status)
        .json({ error: `TFU API returned ${response.status}` });
    }

    const data = await response.json();

    // Filter only what's needed — keep it minimal and stable
    const filtered = {
      id: data?.data?.id || data?.id || null,
      name: data?.data?.name || data?.name || null,
      phone: data?.data?.phone || data?.phone || null,
      email: data?.data?.email || data?.email || null,
      bootcamps: Array.isArray(
        data?.data?.bootcamps ? data.data.bootcamps : data?.bootcamps
      )
        ? (data.data?.bootcamps || data?.bootcamps).map((b) => ({
            id: b.id,
            title: b.title || null,
          }))
        : [],
    };

    // compute enrolled boolean for protected id (do on server)
    const enrolled = filtered.bootcamps.some(
      (b) => b.id === TARGET_BOOTCAMP_ID
    );

    const out = { ...filtered, enrolled };

    cache.set(phone, out); // cache
    return res.json({ cached: false, data: out });
  } catch (err) {
    console.error('TFU API error:', err);
    return res.status(502).json({ error: 'Failed to fetch TFU API' });
  }
});

// POST /api/proxy -> send form data to Google Apps Script (for Google Sheets)
// We forward body JSON directly
app.post('/api/proxy', async (req, res) => {
  try {
    // simple validation
    const { name, phone, email, tradingId, action } = req.body || {};
    if (!name || !phone) {
      return res.status(400).json({ error: 'missing name or phone' });
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        email,
        tradingId,
        action: action || 'Form Submitted',
      }),
    });

    const text = await response.text();
    // respond with what Apps Script returned (or plain ok)
    res
      .status(response.status >= 200 && response.status < 300 ? 200 : 502)
      .send(text);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy failed' });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Backend running at http://localhost:${PORT}`)
);
