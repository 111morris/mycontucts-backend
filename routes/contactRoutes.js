const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
 res.status(200).json({ message: "hello morris how have you been of late" });
});



module.exports = router;