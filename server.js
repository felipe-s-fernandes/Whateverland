import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();

import router from "./src/router.js";

const PORT = process.env.SERVER_PORT;
const HOSTNAME = process.env.SERVER_HOSTNAME;

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser(process.env.JWTSECRET));
app.use(express.static("./public"));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});
