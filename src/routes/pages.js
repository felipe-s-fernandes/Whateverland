import express from "express";
const pagesRouter = express.Router();
import pagesController from "../controllers/pages.js";

pagesRouter.get("/:id", pagesController.startPage);
pagesRouter.get("/:id/history", pagesController.historyPage);
pagesRouter.get("/:id/gallery", pagesController.galleryPage);

export default pagesRouter;
