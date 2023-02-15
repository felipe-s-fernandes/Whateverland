import pagesServices from "../services/pages.js";

const TAG = "Pages Controller: ";

//{ getPage, historyPage, galleryPage }

export const getPage = async (req, res) => {
    console.log(TAG, "getPage() from " + req.connection.remoteAddress);
    console.time("getPage()");
    // Precisa tratar algum input? Sim
    const id = req.params.id;

    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    //Verifica se foi informado um ID válido
    if (isNaN(id)) {
        console.log(TAG, "Parameter isNaN");

        response.message = "Informe uma civilização válida!";
        response.data = null;
        response.error = "Informe uma civilização válida!";

        res.status(400).json(response);
        console.timeEnd("getPage()");
        return;
    }

    try {
        // Chama o método do Service
        const serviceResponse = pagesServices.getPageContent(id);

        response.message = "Success";
        response.data = serviceResponse;

        res.status(200).send(response);
        console.timeEnd("getPage()");
    } catch (error) {
        console.log(TAG, "error caught");

        response.message = "Internal server error";
        response.data = null;
        response.error = `${error}`;

        res.status(500).json(response);
        console.timeEnd("getPage()");
    }
};

const pagesController = {
    getPage: getPage,
};

export default pagesController;
