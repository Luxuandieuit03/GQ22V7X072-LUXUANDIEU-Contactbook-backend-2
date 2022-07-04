const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Xin chao den ung dung Quan ly danh ba!"});
});

module.exports = app;



