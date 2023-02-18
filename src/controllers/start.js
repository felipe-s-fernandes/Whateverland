// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import startServices from "../services/start.js";

const TAG = "Start Controller: ";

const getStart = async (req, res) => {
    console.log(TAG, "getStart() from " + req.connection.remoteAddress);
    console.time("getStart()");
    // Precisa tratar algum input? Sim

    //fetch("http://localhost:8080/start/:id")
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
        console.timeEnd("getStart()");
        return;
    }

    try {
        // Chama o método do Service
        const serviceResponse = startServices.getStart(civilizationId);

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

const startController = {
    getStart: getStart,
};

export default startController;
