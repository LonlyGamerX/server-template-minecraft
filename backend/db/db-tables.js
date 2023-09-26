const Database = require("better-sqlite3");
const path = require("path");
const dbPath = path.join(__dirname, "../db/store.db");

async function initializeDatabase() {
  try {
    const db = new Database(dbPath); // add this { verbose: console.log } after the quotes + comma to see detailed logs

    // Enable foreign key support
    db.exec("PRAGMA foreign_keys = ON;");

    // Create the categories table
    db.exec(`
        CREATE TABLE IF NOT EXISTS categories (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        );
    `);

    // Create the products table
    db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            price REAL NOT NULL,
            image TEXT NOT NULL,
            FOREIGN KEY (category) REFERENCES categories(name)
        );
    `);

    return db;
  } catch (err) {
    console.error("Error initializing the database:", err.message);
    process.exit(1);
  }
}

module.exports = initializeDatabase();
