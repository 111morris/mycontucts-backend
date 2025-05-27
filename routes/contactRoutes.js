const express = require("express");
const router = express.Router();


router.route("/").get((req, res) => {
 // res.json({ message: "get all contacts" });
 res.status(200).json({ message: "getting all contacts" });
})

module.exports = router;