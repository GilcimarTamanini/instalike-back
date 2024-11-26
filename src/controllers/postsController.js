import fs from "fs";
import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import { title } from "process";

export async function  listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function novoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
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
        const imgAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imgAtualizada);

        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.mesage);
        res.status(500).json({ "Erro": "Falha ao criar o post e adcionar a imagem!" });
    }    
}

export async function editarPost(req, res) {
    const idPost = req.params.id;
    const urlImagem = `http://localhost:3000/${idPost}.png`;
    const post = {
        imgUrl: urlImagem,
        title: req.body.title,
        descricao: req.body.descricao    
    }

    try {
        const posAtualizado = await atualizarPost(idPost, post);
        res.status(200).json(posAtualizado);
    } catch (erro) {
        console.error(erro.mesage);
        res.status(500).json({ "Erro": "Falha ao atualizar o post!" });
    }    
}