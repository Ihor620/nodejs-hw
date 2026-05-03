import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(pinoHttp());

// ── Routes ────────────────────────────────────────────────────────────────────

// GET /notes — return all notes
app.get('/notes', (_req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

// GET /notes/:noteId — return a single note by ID
app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});

// GET /test-error — simulate a server error
app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

// ── 404 Middleware ─────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ── Error Middleware (500) ─────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
});

// ── Start server ───────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
