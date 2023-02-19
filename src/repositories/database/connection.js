// Author: { Anderson Lima }

import { client } from "./pool.js";

export async function connectDb(query, arrayColumns) {
    try {
        await client.query("BEGIN");

        // const result = await client.query("SELECT * FROM public.civilizations");
        const result = await client.query(query, arrayColumns);

        await client.query("COMMIT");

        return result.rows;
    } catch (error) {
        // Tem que tratar o erro aqui
        //console.log(error);
        await client.query("ROLLBACK");
        throw error;
    }
}