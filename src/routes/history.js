// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}
import upload from "./multer.js";
import express from "express";
const historyRouter = express.Router();
import historyController from "../controllers/history.js";
import authenticate from "../middleware/authenticate.js";

historyRouter.get("/:civilizationid", historyController.getHistory);

historyRouter.post(
    "/",
    upload.single("file"),
    authenticate,
    historyController.postHistory
);

historyRouter.patch(
    "/edit",
    upload.single("file"),
    authenticate,
    historyController.patchHistory
);

historyRouter.delete(
    "/:eventid",
    authenticate,
    historyController.deleteHistory
);

export default historyRouter;
