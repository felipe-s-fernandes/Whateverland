// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import checkCivilization from "../repositories/database/check-civilization.js";
import checkUser from "../repositories/database/check-user.js";
import historyServices from "../services/history.js";

const TAG = "History Controller: ";

const getHistory = async (req, res) => {
    console.log(TAG, "getHistory() from " + req.connection.remoteAddress);
    console.time("getHistory()");

    //fetch("http://localhost:8080/history/:id")
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
        console.timeEnd("getHistory()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await historyServices.getHistory(
            civilizationId
        );

        response.message = `History events of civilization with id ${civilizationId} retrieved successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("getHistory()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getHistory()");
    }
};

const postHistory = async (req, res) => {
    console.log(TAG, "postHistory() from " + req.connection.remoteAddress);
    console.time("postHistory()");

    const historyObject = req.body;

    const civilizationId = historyObject.civilization_id;

    // Super-user valitation
    const adminId = await checkUser(req.username);
    if (adminId > 3 && civilizationId < 70) {
        res.status(403).send("403: Forbidden");
        console.timeEnd("postHistory()");
        return;
    }

    if (!req.file || req.file.size === 0) {
        historyObject.event_image = "default_event_image.png";
    } else {
        historyObject.event_image = req.file.filename;
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
        console.timeEnd("postHistory()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await historyServices.postHistory(
            historyObject
        );

        response.message = `History event for civilization with id ${civilizationId} created successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("postHistory()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("postHistory()");
    }
};

const patchHistory = async (req, res) => {
    console.log(TAG, "patchHistory() from " + req.connection.remoteAddress);
    console.time("patchHistory()");

    const historyObject = req.body;

    // Super-user valitation
    const adminId = await checkUser(req.username);
    const civilizationId = await checkCivilization(
        historyObject.event,
        "history"
    );

    if (adminId > 3 && civilizationId < 70) {
        res.status(403).send("403: Forbidden");
        console.timeEnd("patchHistory()");
        return;
    }

    if (!req.file || req.file.size === 0) {
        historyObject.event_image = null;
    } else {
        historyObject.event_image = req.file.filename;
    }

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Call to service
        const serviceResponse = await historyServices.patchHistory(
            historyObject
        );

        response.message = `History event with id ${historyObject.event} edited successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("patchHistory()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("patchHistory()");
    }
};

const deleteHistory = async (req, res) => {
    console.log(TAG, "deleteHistory() from " + req.connection.remoteAddress);
    console.time("deleteHistory()");

    //fetch("http://localhost:8080/history/:id")
    const eventId = req.params.eventid;

    // Super-user valitation
    const adminId = await checkUser(req.username);
    const civilizationId = await checkCivilization(eventId, "history");
    console.log(adminId, civilizationId);
    if (adminId > 3 && civilizationId < 70) {
        res.status(403).send("403: Forbidden");
        console.timeEnd("deleteHistory()");
        return;
    }

    // Standardize response
    const response = {
        message: "",
        data: null,
        error: null,
    };

    // Verifies if the input is valid
    if (isNaN(eventId)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Event id is not valid.";
        response.data = null;
        response.error = "404: Not found";

        res.status(404).json(response);
        console.timeEnd("deleteHistory()");
        return;
    }

    try {
        // Call to service
        const serviceResponse = await historyServices.deleteHistory(eventId);

        response.message = `History event with id ${eventId} deleted successfully.`;
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("deleteHistory()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("deleteHistory()");
    }
};

const historyController = {
    getHistory: getHistory,
    postHistory: postHistory,
    patchHistory: patchHistory,
    deleteHistory: deleteHistory,
};

export default historyController;
