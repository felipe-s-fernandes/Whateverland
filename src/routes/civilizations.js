import express from "express";
const civilizationsRouter = express.Router();
import civilizationsController from "../controllers/civilizations.js";

civilizationsRouter.get(
    "/by_region/:id",
    civilizationsController.getCivilizations
);
civilizationsRouter.get("/:id", civilizationsController.getCivilizationById);
// civilizationsRouter.get("/all", civilizationsController.getAllCivilizations);

civilizationsRouter.post("/", civilizationsController.postCivilization);

export default civilizationsRouter;
