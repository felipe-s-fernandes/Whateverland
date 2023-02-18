// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import express from "express";
const startRouter = express.Router();
import startController from "../controllers/start.js";

startRouter.get("/:civilizationid", startController.getStart);

export default startRouter;