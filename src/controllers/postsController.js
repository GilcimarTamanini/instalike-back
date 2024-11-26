import { getTodosPosts, criarPost } from "../models/postsModel.js";

export async function  listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function novoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(novoPost);
    } catch (erro) {
        console.error(erro.mesage);
        res.status(500).json({ "Erro": "Falha ao criar o post!" });
    }    
}

export async function uploadImagem(req, res) {
    const novoPost = req.body;
    novoPost.imagem = req.file.originalname;
    
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(novoPost);
    } catch (erro) {
        console.error(erro.mesage);
        res.status(500).json({ "Erro": "Falha ao adcionar a imagem!" });
    }    
}