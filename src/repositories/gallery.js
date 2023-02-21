// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

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

const postGallery = async (galleryObject) => {
    try {
        const response = {
            event: null,
        };
        await connectDb(query.getCivilizationById, [
            galleryObject.civilization_id,
        ]);

        const galleryResponse = await connectDb(query.postGallery, [
            galleryObject.civilization_id,
            galleryObject.gallery_image_title,
            galleryObject.gallery_image_id,
        ]);

        response.event = galleryResponse;
        return response;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const galleryRepository = {
    getGallery: getGallery,
    postGallery: postGallery,
};

export default galleryRepository;
