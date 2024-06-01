const express = require('express');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Keerthi Kumar N");
})

app.get("/github", (req, res) => {
    res.send("keerthikumarn")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

console.log("Hello Keerthi Kumar N");