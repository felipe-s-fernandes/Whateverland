import bcrypt from "bcrypt";
import loginRepository from "../repositories/login.js";
const TAG = "Login Services: ";

const postSession = async (username, plainTextPassword) => {
    try {
        const dbPasswordHash = await loginRepository.postSession(username);
        const result = bcrypt.compare(plainTextPassword, dbPasswordHash);
        return result;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const loginServices = {
    postSession: postSession,
};

export default loginServices;
