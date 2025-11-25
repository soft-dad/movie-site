const Database = require('better-sqlite3');
const db = new Database('movie.db');
db.exec(`
CREATE TABLE IF NOT EXISTS movie (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  title   TEXT    NOT NULL,
  category TEXT   NOT NULL,
  region  TEXT    NOT NULL,
  year    INTEGER NOT NULL,
  score   REAL    NOT NULL,
  poster  TEXT
);
INSERT INTO movie (title,category,region,year,score,poster) VALUES
('战狼','动作片','大陆',2017,7.1,'img/mov8.jpg'),
('你的名字','爱情片','日本',2016,8.4,'img/mov6.jpg'),
('疯狂动物城','动画片','美国',2016,9.2,'img/mov7.jpg'),
('星际穿越','科幻片','美国',2014,9.3,'img/mov10.jpg'),
('流浪地球','科幻片','大陆',2019,7.9,'img/mov9.jpg'),
('哪吒之魔童降世','动画片','大陆',2019,8.5,'img/mov3.jpg'),
('红海行动','动作片','大陆',2018,8.3,'img/mov11.jpg'),
('唐人街探案2','喜剧片','大陆',2018,6.7,'img/mov1.jpg'),
('复仇者联盟4','科幻片','美国',2019,8.7,'img/mov12.jpg'),
('长津湖','战争片','大陆',2021,7.4,'img/mov2.jpg');
`);
db.close();
console.log('✅ 数据库初始化完成');