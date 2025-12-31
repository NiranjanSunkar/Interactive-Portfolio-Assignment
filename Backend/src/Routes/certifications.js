const express = require("express");
const router = express.Router();
const certifications = require("../data/certifications.json");

router.get("/", (req, res) => {
  res.status(200).json(certifications);
});

module.exports = router;
