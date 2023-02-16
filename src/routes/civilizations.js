import express from "express";
const civilizationsRouter = express.Router();
import civilizationsController from "../controllers/civilizations.js";

civilizationsRouter.get("/:id", civilizationsController.getCivilizations);

export default civilizationsRouter;
