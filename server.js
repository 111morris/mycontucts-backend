const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

app = express();


app.get("/msm", (req, res) => {
 res.json({ message: "get all contacts" })
})

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
})