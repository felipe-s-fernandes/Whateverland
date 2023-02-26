// Author: { Anderson Lima }

import pg from "pg";

export const pool = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

// PGUSER=urqnqcoz
// PGDATABASE=urqnqcoz
// PGHOST=babar.db.elephantsql.com
// PGPASSWORD=MYE_1gHFtLU5W-E79ldjHv-bNk4OzBD6
// PGPORT=5432