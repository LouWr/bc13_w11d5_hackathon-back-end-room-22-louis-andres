const express = require("express");
const router = express.Router();

// import the models functions
const { getCardById, getAllcards } = require("../models/cardModels");

router.get("/", async function (req, res) {
  const result = await getAllcards();
  res.json({ success: true, payload: result });
});

router.get("/:id", async function (req, res) {
  const result = await getCardById(req.params.id);
  res.json({ success: true, payload: result });
});

module.exports = router;
