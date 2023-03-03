//@Autor {Felipe Fernandes}
import { connectDb } from "./connection.js";

export default async function checkUser(userName) {
    try {
        const response = await connectDb(
            `
            SELECT admin_id FROM admins
            WHERE username = $1;
        `,
            [userName]
        );

        const adminId = response[0].admin_id;
        return adminId;
    } catch (error) {
        throw error;
    }
}
