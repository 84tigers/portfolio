"use strict";

const express = require("express");
const app = express();

app.use(express.static("./public"));

const port = 8484;

app.listen(port, _ => console.log(`server is running on port: ${port}`));