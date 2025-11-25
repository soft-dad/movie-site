require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const Database = require('better-sqlite3');

const app = express();
app.use(cors());
const db = new Database('movie.db');

// 健康检查
app.get('/api/ping', (_, res) => res.send('pong'));

// 搜索接口
app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) return res.json([]);
  const stmt = db.prepare(`
    SELECT id,title,category,region,year,score,poster
    FROM movie
    WHERE title LIKE '%' || ? || '%'
    LIMIT 20
  `);
  const rows = stmt.all(q);
  res.json(rows);
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`API 已监听 ${PORT}`));