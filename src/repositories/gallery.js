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

        const galleryResponse = await connectDb(query.getGallery, [
            civilizationId,
        ]);

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

const deleteGallery = async (imageId) => {
    try {
        const response = {
            status: null,
        };

        const galleryResponse = await connectDb(query.deleteGalleryImage, [
            imageId,
        ]);

        response.status = galleryResponse;
        return response;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const galleryRepository = {
    getGallery: getGallery,
    postGallery: postGallery,
    deleteGallery: deleteGallery,
};

export default galleryRepository;
