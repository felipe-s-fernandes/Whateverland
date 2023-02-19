// Author: {Anderson Lima}

async function connectDb(query, arrayElements) { 
    try {
        await client.query("BEGIN");

        const result = await client.query(query, arrayElements);
        console.table(result.rows);

        await client.query("COMMIT");
        
        return result.rows;
    } catch (error) {
        // Tem que tratar o erro aqui
        console.log(error);
        await client.query("ROLLBACK");
    }
}

connectDb();