// Author: { Anderson Lima }

import { client } from "./pool.js";

export async function connectDb(query, arrayColumns) { 
    try {
        await client.query("BEGIN");

        const result = await client.query(query, arrayColumns);
        console.table(result.rows);

        await client.query("COMMIT");
        
        return result.rows;
    } catch (error) {
        // Tem que tratar o erro aqui
        console.log(error);
        await client.query("ROLLBACK");
    }
}