import express from "express";
import multer from "multer";
import { listarPosts, novoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

const routes = (app) => {
    app.use(express.json());

    app.get("/api/posts", listarPosts);

    app.post("/api/posts", novoPost);
    app.post("/api/upload", upload.single("imagem"), uploadImagem);
}

export default routes;
