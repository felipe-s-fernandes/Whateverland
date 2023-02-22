import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
        if (!file || !file.originalname) {
            cb(null, "nochange");
        } else {
            const extension = path.extname(file.originalname);
            const filename = uuidv4() + extension;
            console.log(filename);
            cb(null, filename);
        }
    },
});

const upload = multer({ storage });

export default upload;
