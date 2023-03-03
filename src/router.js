//@Autor {Felipe Fernandes}
import express from "express";
import startRouter from "./routes/start.js";
import historyRouter from "./routes/history.js";
import galleryRouter from "./routes/gallery.js";
import civilizationsRouter from "./routes/civilizations.js";
import regionsRouter from "./routes/regions.js";
import loginRouter from "./routes/login.js";

const router = express.Router();

router.use("/start", startRouter);
router.use("/history", historyRouter);
router.use("/gallery", galleryRouter);
router.use("/civilizations", civilizationsRouter);
router.use("/regions", regionsRouter);
router.use("/login", loginRouter);

export default router;
