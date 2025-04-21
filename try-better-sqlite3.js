import sqlite from 'better-sqlite3';

const db = sqlite('foobar.db');

await db.exec("CREATE TABLE IF NOT EXISTS _content_blog ('title' VARCHAR)");

await db.exec("INSERT INTO _content_blog VALUES ('foo\nbar')");

console.log(await db.prepare("SELECT * FROM _content_blog").all())
