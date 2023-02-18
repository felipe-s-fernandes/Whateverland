// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import database from "./database.js";
const TAG = "Gallery Repository: ";

const getGallery = (civilizationId) => {
    try {
        const response = {
            civilization: null,
        };

        //Mock getGallery;
        const civilizationResponse = database.gallery.filter(
            (civilization) => civilization.civilization_id === civilizationId
        );

        response.civilization = civilizationResponse;

        if (response.civilization.length > 0) return response;
        throw new Error("Civilizations not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
}

const galleryRepository = {
    getGallery: getGallery,
};

export default galleryRepository;
