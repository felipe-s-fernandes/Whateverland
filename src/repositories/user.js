/**
 * Diagrama: https://excalidraw.com/#json=8glnXlb_9UDhdSSjJ9d6Z,ho_9YizxJ9KmNXPlSvMKAw
 */

const bcrypt = require("bcrypt")
const jwtLib = require("jsonwebtoken")

async function cadastroManual(username, plainTextPassword = "123") {
    const passwordHash = await bcrypt.hash(plainTextPassword, 10)

    pool.query("INSERT INTO users (username, passwordHash) VALUES ($1, $2)", [username, passwordHash]);
}

async function login(username, plainTextPassword) {
    const dbPasswordHash = await pool.query("SELECT passwordHash FROM users WHERE username = $1", [username])

    const result = await bcrypt.compare(plainTextPassword, dbPasswordHash)

    if (result) {
        const jwt = jwtLib.sign({username}, "minha senha aqui") // process.env.JWTSECRET
        res.cookie("session", jwt);
        res.status(200).json({});
    }
    else {
        res.status(403).json({});
    }
}

async function authenticate(req, res, next) { 
    try {
        const decodedJwt = jwtLib.verify(req.cookies.session, "minha senha aqui") // process.env.JWTSECRET
        next()
    }
    catch(err) {
        res.status(403).json({})
    }
}