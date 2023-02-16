import regionsServices from "../services/regions.js";

const TAG = "Regions Controller: ";

export const getRegions = async (req, res) => {
    console.log(TAG, "getRegions() from " + req.connection.remoteAddress);
    console.time("getRegions()");
    // Precisa tratar algum input? Não

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        // Chama o método do Service
        const serviceResponse = regionsServices.getRegions();

        response.message = "Success";
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("getRegions()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getRegions()");
    }
};

const regionsController = {
    getRegions: getRegions,
};

export default regionsController;
