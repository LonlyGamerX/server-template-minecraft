const db = require("../db/db-tables"); // Import the db instance from db-tables.js

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await db.all("SELECT * FROM categories");
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await db.run(
      "INSERT INTO categories (name) VALUES (?)",
      name
    );
    res.status(201).json({ id: newCategory.lastID, name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await db.run("UPDATE categories SET name = ? WHERE ID = ?", name, id);
    res.json({ id, name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await db.run("DELETE FROM categories WHERE ID = ?", id);
    res.json({ id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
