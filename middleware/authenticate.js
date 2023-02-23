import jwtLib from "jsonwebtoken";
import { config } from "dotenv";
config();

export default async function authenticate(req, res, next) {
    try {
        const decodedJwt = jwtLib.verify(
            req.cookies.session,
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
