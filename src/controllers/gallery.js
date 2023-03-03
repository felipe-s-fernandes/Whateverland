// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import checkCivilization from "../repositories/database/check-civilization.js";
import checkUser from "../repositories/database/check-user.js";
import galleryServices from "../services/gallery.js";

const TAG = "Gallery Controller: ";

const getGallery = async (req, res) => {
    console.log(TAG, "getGallery() from " + req.connection.remoteAddress);
    console.time("getGallery()");

    //fetch("http://localhost:8080/gallery/:id")
    const civilizationId = req.params.civilizationid;

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    // Verifies if the input is valid
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
        // Call to service
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

    const galleryObject = req.body;

    const civilizationId = galleryObject.civilization_id;
    //Super-user verification
    const adminId = await checkUser(req.username);
    if (adminId > 3 && civilizationId < 70) {
        res.status(403).send("403: Forbidden");
        console.timeEnd("patchCivilization()");
        return;
    }

    if (!req.file || req.file.size === 0) {
        res.status(400).send("Please upload a file");
    } else {
        galleryObject.gallery_image_id = req.file.filename;
    }

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    // Verifies if the input is valid
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
        // Call to service
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

    const imageId = req.params.imageid;

    //Super-user verification
    const adminId = await checkUser(req.username);
    const civilizationId = await checkCivilization(imageId, "gallery");
    if (adminId > 3 && civilizationId < 70) {
        res.status(403).send("403: Forbidden");
        console.timeEnd("patchCivilization()");
        return;
    }

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Call to service
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
