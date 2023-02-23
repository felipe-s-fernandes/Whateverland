import express from "express";
const loginRouter = express.Router();
import loginController from "../controllers/login.js";

loginRouter.post("/", loginController.postSession);

export default loginRouter;
