// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import database from "./database.js";
const TAG = "Gallery Repository: ";

const getGallery = (civilizationId) => {
    try {
        const response = {
            gallery: null,
        };

        //Mock getGallery;
        const galleryResponse = database.gallery.filter(
            (image) => image.civilization_id === civilizationId
        );

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