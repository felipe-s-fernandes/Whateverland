// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import express from "express";
const historyRouter = express.Router();
import historyController from "../controllers/history.js";

historyRouter.get("/:civilizationid", historyController.getHistory);

export default historyRouter;