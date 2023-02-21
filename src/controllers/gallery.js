// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import galleryServices from "../services/gallery.js";

const TAG = "Gallery Controller: ";

const getGallery = async (req, res) => {
    console.log(TAG, "getGallery() from " + req.connection.remoteAddress);
    console.time("getGallery()");
    // Precisa tratar algum input? Sim

    //fetch("http://localhost:8080/gallery/:id")
    const civilizationId = req.params.civilizationid;

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    //Verifica se foi informado um ID válido
    if (isNaN(civilizationId)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Civilization id is not valid.";
        response.data = null;
        response.error = "404: Not found";

        res.status(404).json(response);
        console.timeEnd("getGallery()");
        return;
    }

    try {
        // Chama o método do Service
        const serviceResponse = await galleryServices.getGallery(
            civilizationId
        );

        response.message = `Gallery for the civilization with id ${civilizationId} retrieved successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("getGallery()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getGallery()");
    }
};

const postGallery = async (req, res) => {
    console.log(TAG, "postGallery() from " + req.connection.remoteAddress);
    console.time("postGallery()");
    // Precisa tratar algum input? Não sei

    const galleryObject = req.body;
    const civilizationId = galleryObject.civilization_id;

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    //Verifica se foi informado um ID válido
    if (isNaN(civilizationId)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Civilization id is not valid.";
        response.data = null;
        response.error = "404: Not found";

        res.status(404).json(response);
        console.timeEnd("postGallery()");
        return;
    }

    try {
        // Chama o método do Service
        const serviceResponse = await galleryServices.postGallery(
            galleryObject
        );

        response.message = `Gallery entry for civilization with id ${civilizationId} created successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("postGallery()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("postGallery()");
    }
};

const deleteGallery = async (req, res) => {
    console.log(TAG, "deleteGallery() from " + req.connection.remoteAddress);
    console.time("deleteGallery()");
    // Precisa tratar algum input? Não sei

    const imageId = req.params.imageid;

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Chama o método do Service
        const serviceResponse = await galleryServices.deleteGallery(imageId);

        response.message = `Gallery entry with id ${imageId} deleted successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("deleteGallery()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("deleteGallery()");
    }
};

const galleryController = {
    getGallery: getGallery,
    postGallery: postGallery,
    deleteGallery: deleteGallery,
};

export default galleryController;
