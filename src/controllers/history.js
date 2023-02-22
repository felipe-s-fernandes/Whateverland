// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import historyServices from "../services/history.js";

const TAG = "History Controller: ";

const getHistory = async (req, res) => {
    console.log(TAG, "getHistory() from " + req.connection.remoteAddress);
    console.time("getHistory()");
    // Precisa tratar algum input? Sim

    //fetch("http://localhost:8080/history/:id")
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
        console.timeEnd("getHistory()");
        return;
    }

    try {
        // Chama o método do Service
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
    // Precisa tratar algum input? Não sei

    const historyObject = req.body;
    const civilizationId = historyObject.civilization_id;

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
        console.timeEnd("postHistory()");
        return;
    }

    try {
        // Chama o método do Service
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
    // Precisa tratar algum input? Não sei

    const historyObject = req.body;

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Chama o método do Service
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
    // Precisa tratar algum input? Sim

    //fetch("http://localhost:8080/history/:id")
    const eventId = req.params.eventid;

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    //Verifica se foi informado um ID válido
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
        // Chama o método do Service
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
