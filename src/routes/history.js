// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}
import upload from "./multer.js";
import express from "express";
const historyRouter = express.Router();
import historyController from "../controllers/history.js";

historyRouter.get("/:civilizationid", historyController.getHistory);

historyRouter.post("/", upload.single("file"), historyController.postHistory);

historyRouter.patch(
    "/edit",
    upload.single("file"),
    historyController.patchHistory
);

historyRouter.delete("/:eventid", historyController.deleteHistory);

export default historyRouter;
