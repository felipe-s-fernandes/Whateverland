// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import express from "express";
import upload from "./multer.js";
import authenticate from "../../middleware/authenticate.js";
const galleryRouter = express.Router();
import galleryController from "../controllers/gallery.js";

galleryRouter.get("/:civilizationid", galleryController.getGallery);

galleryRouter.post(
    "/",
    authenticate,
    upload.single("file"),
    galleryController.postGallery
);

galleryRouter.delete(
    "/:imageid",
    authenticate,
    galleryController.deleteGallery
);

export default galleryRouter;
