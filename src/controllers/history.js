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

const historyController = {
    getHistory: getHistory,
};

export default historyController;
