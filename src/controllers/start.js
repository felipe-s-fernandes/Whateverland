// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import checkUser from "../repositories/database/check-user.js";
import startServices from "../services/start.js";

const TAG = "Start Controller: ";

const getStart = async (req, res) => {
    console.log(TAG, "getStart() from " + req.connection.remoteAddress);
    console.time("getStart()");

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
        console.timeEnd("getStart()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await startServices.getStart(civilizationId);

        response.message = `Start page for civilization with id ${civilizationId} retrieved successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("getStart()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getStart()");
    }
};

const patchStart = async (req, res) => {
    console.log(TAG, "patchStart() from " + req.connection.remoteAddress);
    console.time("patchStart()");

    const civilizationId = req.body.civilization_id;
    const startObject = req.body;

    //Super-user verification
    const adminId = await checkUser(req.username);
    if (adminId > 3 && civilizationId < 70) {
        res.status(403).send("403: Forbidden");
        console.timeEnd("patchCivilization()");
        return;
    }

    //fetch("http://localhost:8080/start/:id")

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
        console.timeEnd("patchStart()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await startServices.patchStart(startObject);

        response.message = `Start page for civilization with id ${civilizationId} edited successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("patchStart()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("patchStart()");
    }
};

const searchStart = async (req, res) => {
    console.log(TAG, "searchStart() from " + req.connection.remoteAddress);
    console.time("searchStart()");

    //fetch("http://localhost:8080/start/search/:string")
    const string = req.params.string;

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Call to service
        const serviceResponse = await startServices.searchStart(string);

        response.message = `Search results for '${string}' retrieved successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("searchStart()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("searchStart()");
    }
};

const startController = {
    getStart: getStart,
    patchStart: patchStart,
    searchStart: searchStart,
};

export default startController;
