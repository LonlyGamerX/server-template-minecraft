const { db } = require("../db/db-tables");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await db.all(`
      SELECT
        products.ID,
        products.name,
        products.price,
        products.description,
        categories.name AS category_name
      FROM products
      JOIN categories ON products.category_id = categories.ID
    `);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category_name } = req.body;

    // Check if the category with the given name exists
    const category = await db.get(
      "SELECT ID FROM categories WHERE name = ?",
      category_name
    );

    if (!category) {
      return res.status(400).json({ message: "Category not found." });
    }

    const category_id = category.ID;

    const newProduct = await db.run(
      "INSERT INTO products (name, category_id, price, description) VALUES (?, ?, ?, ?)",
      name,
      category_id,
      price,
      description
    );

    res.status(201).json({
      id: newProduct.lastID,
      name,
      category_name, // Use category_name instead of category_id
      price,
      description,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category_name } = req.body;

    // Check if the category with the given name exists
    const category = await db.get(
      "SELECT ID FROM categories WHERE name = ?",
      category_name
    );

    if (!category) {
      return res.status(400).json({ message: "Category not found." });
    }

    const category_id = category.ID;

    const result = await db.run(
      "UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE ID = ?",
      name,
      description,
      price,
      category_id,
      id
    );

    if (result.changes === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json({ id: +id, name, description, price, category_name }); // Use category_name instead of category_id
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.run("DELETE FROM products WHERE ID = ?", id);

    if (result.changes === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json({ message: "Product deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
