// Author: { Anderson Lima }
// Coauthor: { Felipe Fernandes }

import { pool } from "./pool.js";

export async function connectDb(query, arrayColumns) {
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const result = await client.query(query, arrayColumns);

        await client.query("COMMIT");
        client.release();
        return result.rows;
    } catch (error) {
        // Tem que tratar o erro aqui
        //console.log(error);
        await client.query("ROLLBACK");
        client.release();
        throw error;
    }
}
