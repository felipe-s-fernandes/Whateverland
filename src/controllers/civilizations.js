import civilzationsServices from "../services/civilizations.js";

const TAG = "Civilizations Controller: ";

export const getCivilizations = async (req, res) => {
    console.log(TAG, "getCivilizations() from " + req.connection.remoteAddress);
    console.time("getCivilizations()");
    // Precisa tratar algum input? Sim
    const regionId = req.params.id;

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    //Verifica se foi informado um ID válido
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
        // Chama o método do Service
        const serviceResponse = civilzationsServices.getCivilizations(regionId);

        response.message = "Success";
        response.data = serviceResponse.data;

        res.status(200).send(response);
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

const civilizationsController = {
    getCivilizations: getCivilizations,
};

export default civilizationsController;
