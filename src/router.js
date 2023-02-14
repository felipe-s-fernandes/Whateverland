import express from "express";
const router = express.Router();
import pagesRouter from "./routes/pages.js";

router.use("/pages", pagesRouter);

export default router;
