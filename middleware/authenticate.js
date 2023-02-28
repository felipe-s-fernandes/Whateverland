import jwtLib from "jsonwebtoken";
import { config } from "dotenv";
config();

export default async function authenticate(req, res, next) {
    try {
        const cookieName = req.body.username;
        console.log(req.body);
        const decodedJwt = jwtLib.verify(
            req.cookies[cookieName],
            process.env.JWTSECRET
        );
        next();
    } catch (err) {
        res.status(403).json({
            message: "User is not an admin.",
            data: null,
            error: "403: Forbidden",
        });
    }
}
