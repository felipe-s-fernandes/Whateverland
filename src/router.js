import express from "express";
//import pagesRouter from "./routes/pages.js";
import galleryRouter from "./routes/gallery.js"
import civilizationsRouter from "./routes/civilizations.js";
import regionsRouter from "./routes/regions.js";
const router = express.Router();

//router.use("/pages", pagesRouter);
router.use("/gallery", galleryRouter)

router.use("/civilizations", civilizationsRouter);
router.use("/regions", regionsRouter);

export default router;
