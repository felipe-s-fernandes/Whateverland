// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import galleryRepository from "../repositories/gallery.js";
const TAG = "Gallery Service: ";

const getGallery = async (civilizationId) => {
    try {
        const repoResponse = await galleryRepository.getGallery(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const postGallery = async (galleryObject) => {
    try {
        const repoResponse = await galleryRepository.postGallery(galleryObject);
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const deleteGallery = async (imageId) => {
    try {
        const repoResponse = await galleryRepository.deleteGallery(imageId);
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const galleryServices = {
    getGallery: getGallery,
    postGallery: postGallery,
    deleteGallery: deleteGallery,
};

export default galleryServices;
