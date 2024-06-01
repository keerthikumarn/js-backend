const express = require('express');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Keerthi Kumar N");
})

app.get("/github", (req, res) => {
    res.send("keerthikumarn")
})

app.get("/youtube", (req, res) => {
    res.send('<h1> chai aur code !!</h1>')
})

app.get("/login", (req, res) => {
    res.send('<h1> Please login at www.keerthikumar.com </h1>');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

console.log("Hello Keerthi Kumar N");