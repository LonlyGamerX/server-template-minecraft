const express = require("express");
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/products.controller");

const router = express.Router();

// Define a route for getting all products
router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    console.error("Error in GET /products:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.json(product);
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await editProduct(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message });
  }
});

module.exports = router;
