// Author {Felipe Fernandes}

import checkUser from "../repositories/database/check-user.js";
import civilzationsServices from "../services/civilizations.js";

const TAG = "Civilizations Controller: ";

const getAllCivilizations = async (req, res) => {
    console.log(
        TAG,
        "getAllCivilizations() from " + req.connection.remoteAddress
    );
    console.time("getAllCivilizations()");

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Call to service
        const serviceResponse =
            await civilzationsServices.getAllCivilizations();

        response.message = "Success";
        response.data = serviceResponse;

        res.status(200).json(response);
        console.timeEnd("getAllCivilizations()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getAllCivilizations()");
    }
};

const getCivilizations = async (req, res) => {
    console.log(TAG, "getCivilizations() from " + req.connection.remoteAddress);
    console.time("getCivilizations()");

    const regionId = req.params.id;

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    // Verifies if the input is valid
    if (isNaN(regionId)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Informe uma região válida!";
        response.data = null;
        response.error = "Informe uma região válida!";

        res.status(400).json(response);
        console.timeEnd("getCivilizations()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await civilzationsServices.getCivilizations(
            regionId
        );

        response.message = "Success";
        response.data = serviceResponse;

        res.status(200).json(response);
        console.timeEnd("getCivilizations()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getCivilizations()");
    }
};

const getCivilizationById = async (req, res) => {
    console.log(
        TAG,
        "getCivilizationById() from " + req.connection.remoteAddress
    );
    console.time("getCivilizationById()");

    //fetch("http://localhost:8080/civilizations/:id")
    const civilizationId = req.params.id;

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
        console.timeEnd("getCivilizationById()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await civilzationsServices.getCivilizationById(
            civilizationId
        );

        response.message = `Civilization with id ${civilizationId} retrieved successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("getCivilizationById()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getCivilizationById()");
    }
};

const postCivilization = async (req, res) => {
    console.log(TAG, "postCivilization() from " + req.connection.remoteAddress);
    console.time("postCivilization()");

    //fetch("http://localhost:8080/civilizations/:id")
    const regionId = req.body.region_id;
    const civilizationName = req.body.civilization_name;

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    // Verifies if the input is valid
    if (isNaN(regionId)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Region id is not valid.";
        response.data = null;
        response.error = "404: Not found";

        res.status(404).json(response);
        console.timeEnd("postCivilization()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await civilzationsServices.postCivilization(
            regionId,
            civilizationName
        );

        response.message = `Civilization named ${civilizationName} registered successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("postCivilization()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("postCivilization()");
    }
};

const patchCivilization = async (req, res) => {
    console.log(
        TAG,
        "patchCivilization() from " + req.connection.remoteAddress
    );
    console.time("patchCivilization()");

    const civilizationObject = req.body;

    if (!req.file || req.file.size === 0) {
        civilizationObject.civilization_image = null;
    } else {
        civilizationObject.civilization_image = req.file.filename;
    }

    const civilizationId = civilizationObject.civilization_id;

    // Super-user validation;
    const adminId = await checkUser(req.username);

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

    // Verifies if the input is valid
    if (isNaN(civilizationId)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Civilization id is not valid.";
        response.data = null;
        response.error = "404: Not found";

        res.status(404).json(response);
        console.timeEnd("patchCivilization()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await civilzationsServices.patchCivilization(
            civilizationObject
        );

        response.message = `Civilization with id ${civilizationId} edited successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("patchCivilization()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("patchCivilization()");
    }
};

const deleteCivilization = async (req, res) => {
    console.log(
        TAG,
        "deleteCivilization() from " + req.connection.remoteAddress
    );
    console.time("deleteCivilization()");

    const civilizationId = req.params.id;

    // Super-user validation;
    const adminId = await checkUser(req.username);
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

    // Verifies if the input is valid
    if (isNaN(civilizationId)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Civilization id is not valid.";
        response.data = null;
        response.error = "404: Not found";

        res.status(404).json(response);
        console.timeEnd("deleteCivilization()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await civilzationsServices.deleteCivilization(
            civilizationId
        );

        response.message = `Civilization with id ${civilizationId} deleted successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("deleteCivilization()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("deleteCivilization()");
    }
};

const civilizationsController = {
    getAllCivilizations: getAllCivilizations,
    getCivilizations: getCivilizations,
    getCivilizationById: getCivilizationById,
    postCivilization: postCivilization,
    patchCivilization: patchCivilization,
    deleteCivilization: deleteCivilization,
};

export default civilizationsController;
