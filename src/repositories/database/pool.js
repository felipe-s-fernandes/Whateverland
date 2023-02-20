// Author: { Anderson Lima }

import pg from "pg";

export const pool = new pg.Pool({
    user: "urqnqcoz", //process.env.PGUSER,
    host: "babar.db.elephantsql.com", //process.env.PGHOST,
    database: "urqnqcoz", //process.env.PGDATABASE,
    password: "MYE_1gHFtLU5W-E79ldjHv-bNk4OzBD6", //process.env.PGPASSWORD,
    port: "5432", //process.env.PGPORT,
});

// PGUSER=urqnqcoz
// PGDATABASE=urqnqcoz
// PGHOST=babar.db.elephantsql.com
// PGPASSWORD=MYE_1gHFtLU5W-E79ldjHv-bNk4OzBD6
// PGPORT=5432