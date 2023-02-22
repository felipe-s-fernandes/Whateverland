// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import express from "express";
const historyRouter = express.Router();
import historyController from "../controllers/history.js";

historyRouter.get("/:civilizationid", historyController.getHistory);

historyRouter.post("/", historyController.postHistory);

historyRouter.patch("/edit", historyController.patchHistory);

historyRouter.delete("/:eventid", historyController.deleteHistory);

export default historyRouter;
