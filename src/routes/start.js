// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import express from "express";
const startRouter = express.Router();
import startController from "../controllers/start.js";

startRouter.get("/search/:string", startController.searchStart);

startRouter.get("/:civilizationid", startController.getStart);

startRouter.patch("/edit", startController.patchStart);

export default startRouter;
