import jwtLib from "jsonwebtoken";
import loginServices from "../services/login.js";
import { config } from "dotenv";
config();

const TAG = "Login Controller: ";

const postSession = async (req, res) => {
    console.log(TAG, "postSession() from " + req.connection.remoteAddress);
    console.time("postSession()");
    // Precisa tratar algum input? Não sei

    /* {
        username: "felipe",
        plainTextPassword: "123",
    } */

    const username = req.body.username;
    const plainTextPassword = req.body.password;

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Chama o método do Service
        const serviceResponse = await loginServices.postSession(
            username,
            plainTextPassword
        );
        response.data = serviceResponse;

        if (serviceResponse) {
            const jwt = jwtLib.sign({ username }, process.env.JWTSECRET);
            res.cookie("session", jwt);
            response.message = `User ${username} logged in successfully.`;
            res.status(200).send(response);
        } else {
            response.message = `Username or password invalid.`;
            res.status(403).json(response);
        }

        console.timeEnd("postSession()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("postSession()");
    }
};

const loginController = {
    postSession: postSession,
};

export default loginController;
