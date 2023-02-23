import { connectDb } from "./database/connection.js";
const TAG = "Login Repository: ";

const postSession = async (username) => {
    try {
        const response = await connectDb(
            `
        SELECT password_hash from admins WHERE username = $1;
        `,
            [username]
        );

        return response[0].password_hash;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const loginRepository = {
    postSession: postSession,
};

export default loginRepository;
