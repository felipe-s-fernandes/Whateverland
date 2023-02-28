import { connectDb } from "../src/repositories/database/connection.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

for (let i = 1; i <= 10; i++) {
    try {
        await cadastroManual("user" + i);
    } catch (error) {
        console.log(error);
        i = 11;
    }
}

// await cadastroManual("teste");

async function cadastroManual(username, plainTextPassword = "123") {
    const passwordHash = await bcrypt.hash(plainTextPassword, 10);

    try {
        await connectDb(
            `
        INSERT INTO admins (username, password_hash, registered_at)
        VALUES ($1, $2, NOW());
    `,
            [username, passwordHash]
        );
        console.log(`Usuário ${username} cadastrado com sucesso!`);
    } catch (error) {
        throw error;
    }
}
