import sqlite3InitModule from '@sqlite.org/sqlite-wasm';

const log = console.log;
const error = console.error;

const start = async (sqlite3) => {
  log('Running SQLite3 version', sqlite3.version.libVersion);
  const db = new sqlite3.oo1.DB();
  
  await db.exec("CREATE TABLE IF NOT EXISTS _content_blog ('title' VARCHAR)");

  await db.exec("INSERT INTO _content_blog VALUES ('foo\nbar')");

  await db.exec({ sql: "SELECT * FROM _content_blog", callback: row => console.log(row) });
};

const initializeSQLite = async () => {
  try {
    log('Loading and initializing SQLite3 module...');
    const sqlite3 = await sqlite3InitModule({
      print: log,
      printErr: error,
    });
    log('Done initializing. Running demo...');
    await start(sqlite3);
  } catch (err) {
    error('Initialization error:', err.name, err.message);
  }
};

initializeSQLite();
