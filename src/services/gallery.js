// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}


import galleryRepository from "../repositories/gallery.js";
const TAG = "Gallery Service: ";

const getGallery = (civilizationId) => {
    // Padronizar a resposta

    try {
        const repoResponse = galleryRepository.getGallery(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
} 

const galleryServices = {
    getGallery: getGallery,
};

export default galleryServices;
