import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/api/posts", listarPosts);
}

export default routes;
