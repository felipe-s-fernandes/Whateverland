// Author: { Anderson Lima }

import { pool } from "./pool.js";

export async function connectDb(query, arrayColumns) {
    
    try {
        const client = await pool.connect();
        await client.query("BEGIN");

        
        // const result = await client.query("SELECT * FROM public.civilizations");
        const result = await client.query(query, arrayColumns);
        // console.log("console1", result);
        
        
        // const result2 = await client.query("SELECT * FROM civilizations WHERE region_id=$1;", [0]);
        // console.log("console2", result2.rows);
        
        await client.query("COMMIT");
        
        return result.rows;
    } catch (error) {
        // Tem que tratar o erro aqui
        //console.log(error);
        await client.query("ROLLBACK");
        client.release();
        throw error;
    }
}