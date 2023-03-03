import jwtLib from "jsonwebtoken";
import loginServices from "../services/login.js";
import { config } from "dotenv";
config();

const TAG = "Login Controller: ";

const postSession = async (req, res) => {
    console.log(TAG, "postSession() from " + req.connection.remoteAddress);
    console.time("postSession()");

    const username = req.body.username;
    const plainTextPassword = req.body.password;

    // Standardize response
    const response = {
        message: "",
        data: {
            status: false,
            username: null,
        },
        error: null,
    };

    try {
        // Call to service
        const serviceResponse = await loginServices.postSession(
            username,
            plainTextPassword
        );
        response.data.status = serviceResponse;
        response.data.username = username;

        if (serviceResponse) {
            const jwt = jwtLib.sign({ username }, process.env.JWTSECRET);
            res.cookie(username, jwt);
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

const deleteSession = (req, res) => {
    console.log(TAG, "deleteSession() from " + req.connection.remoteAddress);
    console.time("deleteSession()");

    const username = req.body.username;

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        res.clearCookie(username);
        response.message = "Cookie cleared successfully.";
        response.data = true;
        res.status(200).json(response);
        console.timeEnd("deleteSession()");
    } catch (error) {
        response.message = "Internal server error.";
        response.error = "Error";
        res.status(500).json(response);
        console.timeEnd("deleteSession()");
    }
};

const loginController = {
    postSession: postSession,
    deleteSession: deleteSession,
};

export default loginController;
