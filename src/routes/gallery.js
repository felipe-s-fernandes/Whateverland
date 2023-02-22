// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import express from "express";
import upload from "./multer.js";
const galleryRouter = express.Router();
import galleryController from "../controllers/gallery.js";

galleryRouter.get("/:civilizationid", galleryController.getGallery);

galleryRouter.post("/", upload.single("file"), galleryController.postGallery);

galleryRouter.delete("/:imageid", galleryController.deleteGallery);

export default galleryRouter;
