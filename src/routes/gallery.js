// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import express from "express";
const galleryRouter = express.Router();
import galleryController from "../controllers/gallery.js";

galleryRouter.get("/:civilizationid", galleryController.getGallery);

galleryRouter.post("/", galleryController.postGallery);

export default galleryRouter;
