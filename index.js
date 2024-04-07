const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
	return res.json({ message: "Docker test" });
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
