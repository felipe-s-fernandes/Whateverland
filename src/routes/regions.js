import express from "express";
const regionsRouter = express.Router();
import regionsController from "../controllers/regions.js";

regionsRouter.get("/", regionsController.getRegions);
regionsRouter.get("/:regionid", regionsController.getRegionById);

export default regionsRouter;
