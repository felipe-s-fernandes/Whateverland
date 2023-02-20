// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import database from "./database.js";
import { connectDb } from "./database/connection.js";
import query from "./database/queries.js";
const TAG = "Gallery Repository: ";

const getGallery = async (civilizationId) => {
    try {
        const response = {
            gallery: null,
        };

        //Mock getGallery;
        /* const galleryResponse = database.gallery.filter(
            (image) => image.civilization_id === civilizationId
        ); */
        const galleryResponse = await connectDb(query.getGallery, [
            civilizationId,
        ]);

        console.log(galleryResponse);

        response.gallery = galleryResponse;
        return response;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const galleryRepository = {
    getGallery: getGallery,
};

export default galleryRepository;
