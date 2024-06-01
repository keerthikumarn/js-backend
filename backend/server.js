import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Backend server is ready");
})

app.get("/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            joke: "I'm really excited to learn Node.js",
            title: "Joke 1 "
        },
        {
            id: 2,
            joke: "I'm really excited to learn Node.js",
            title: "Joke 1 "
        },
        {
            id: 3,
            joke: "I'm really excited to learn Node.js",
            title: "Joke 1 "
        },
        {
            id: 4,
            joke: "I'm really excited to learn Node.js",
            title: "Joke 1 "
        },
        {
            id: 5,
            joke: "I'm really excited to learn Node.js",
            title: "Joke 1 "
        }
    ];
    res.send(jokes);
});

app.listen(PORT, () => {
    console.log(`Serving the request at http://localhos:${PORT}`);
})