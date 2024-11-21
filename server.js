import express from "express";

const posts = [
    {
        id: 1,
        title: "Primeiro Post",
        body: "Este é o corpo do primeiro post"
    }
    ,
    {
        id: 2,
        title: "Segundo Post",
        body: "Este é o corpo do segundo post"
    }
    ,
    {
        id: 3,
        title: "Terceiro Post",
        body: "Este é o corpo do terceiro post"
    }
    ,
    {
        id: 4,
        title: "Quarto Post",
        body: "Este é o corpo do quarto post"
    }
    ,
    {
        id: 5,
        title: "Quinto Post",
        body: "Este é o corpo do quinto post"
    }

];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Rota inicial, bem vindo!");
});

app.get("/api/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/api/posts/:id", (req, res) => {

    const post = posts.find(post => post.id == req.params.id);

    if(!post) {
        return res.status(404).send("Post não encontrado");
    }

    res.status(200).json(post);
});