import sqlite from 'sqlite3';

const db = new sqlite.Database('foobar.db');

await db.exec("CREATE TABLE IF NOT EXISTS _content_blog ('title' VARCHAR)");

await db.exec("INSERT INTO _content_blog VALUES ('foo\nbar')");

await db.all("SELECT * FROM _content_blog", [], (err, result) => console.log(result));
