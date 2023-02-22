import express from "express";
const civilizationsRouter = express.Router();
import upload from "./multer.js";
import civilizationsController from "../controllers/civilizations.js";

civilizationsRouter.get(
    "/by_region/:id",
    civilizationsController.getCivilizations
);
civilizationsRouter.get("/all", civilizationsController.getAllCivilizations);
civilizationsRouter.get("/:id", civilizationsController.getCivilizationById);

civilizationsRouter.post("/", civilizationsController.postCivilization);

civilizationsRouter.patch(
    "/edit",
    upload.single("file"),
    civilizationsController.patchCivilization
);

civilizationsRouter.delete("/:id", civilizationsController.deleteCivilization);

export default civilizationsRouter;
