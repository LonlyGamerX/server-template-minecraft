const express = require("express");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
  editCategory,
} = require("../controllers/categories.controller");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const category = await createCategory(req.body);
    res.json(category);
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const category = await editCategory(req.params.id, req.body);
    res.json(category);
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteCategory(req.params.id);
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message });
  }
});

module.exports = router;
