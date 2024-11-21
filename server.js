import express from "express";

const posts = [
    {
        id: 1,
        title: "Primeiro Post",
        body: "Este é o corpo do primeiro post"
    }
];


const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Rota inicial, bem vindo!");
});