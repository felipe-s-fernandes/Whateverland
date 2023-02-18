// Author: {Anderson Lima}

async function connectDb() { 
    try {
        // await client.connect();

        await client.query("BEGIN");

        const table = await client.query("query");
        console.table(table.rows);

        await client.query("COMMIT");

    } catch (error) {
        console.log(error);
        await client.query("ROLLBACK")
        // await client.release();
    }
}

connectDb();