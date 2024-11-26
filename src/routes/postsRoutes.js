import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, novoPost, uploadImagem, editarPost, editarGeminiPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

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
    app.use(corsOptions);

    app.get("/api/posts", listarPosts);

    app.post("/api/posts", novoPost);
    app.post("/api/upload", upload.single("imgUrl"), uploadImagem);

    app.put("/api/upload/:id", editarPost);
    app.put("/api/gemini/upload/:id", editarGeminiPost);

}

export default routes;
