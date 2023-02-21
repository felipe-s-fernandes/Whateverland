import express from "express";
const civilizationsRouter = express.Router();
import civilizationsController from "../controllers/civilizations.js";

civilizationsRouter.get(
    "/by_region/:id",
    civilizationsController.getCivilizations
);
civilizationsRouter.get("/all", civilizationsController.getAllCivilizations);
civilizationsRouter.get("/:id", civilizationsController.getCivilizationById);

civilizationsRouter.post("/", civilizationsController.postCivilization);

civilizationsRouter.patch("/edit", civilizationsController.patchCivilization);

civilizationsRouter.delete("/:id", civilizationsController.deleteCivilization);

export default civilizationsRouter;
