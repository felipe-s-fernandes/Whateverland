import jwtLib from "jsonwebtoken";
import { config } from "dotenv";
config();

export default async function authenticate(req, res, next) {
    try {
        const username = req.body.username;
        console.log(req.body);
        const decodedJwt = jwtLib.verify(
            req.cookies[username],
            process.env.JWTSECRET
        );
        req.username = decodedJwt.username;
        next();
    } catch (err) {
        res.status(403).json({
            message: "User is not an admin.",
            data: null,
            error: "403: Forbidden",
        });
    }
}
