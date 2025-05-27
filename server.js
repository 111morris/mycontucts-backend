const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

app = express();

app.use("/msm", require("./routes/contactRoutes"));

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
})