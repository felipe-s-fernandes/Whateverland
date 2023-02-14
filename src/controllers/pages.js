import pagesServices from "../services/pages.js";

const TAG = "Pages Controller: ";

//{ startPage, historyPage, galleryPage }

export const startPage = async (req, res) => {
    console.log(TAG, "startPage() from " + req.connection.remoteAddress);
    console.time("startPage()");
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
        console.timeEnd("startPage()");
        return;
    }

    try {
        // Chama o método do Service
        const serviceResponse = await pagesServices.getStartContent(id);

        response.message = "Success";
        response.data = serviceResponse;

        console.log(response);
        res.status(200).json(response);
        console.timeEnd("startPage()");
    } catch (error) {
        console.log(TAG, error);

        response.message = "Erro interno do servidor";
        response.data = null;
        response.error = "Erro interno do servidor";

        res.status(500).json(response);
        console.timeEnd("startPage()");
    }
};

export const historyPage = async (req, res) => {
    console.log(TAG, "historyPage() from " + req.connection.remoteAddress);
    console.time("historyPage()");
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
        console.timeEnd("historyPage()");
        return;
    }

    try {
        // Chama o método do Service
        const serviceResponse = await pagesServices.getHistoryContent(id);

        response.message = "Success";
        response.data = serviceResponse;

        res.status(200).json(response);
        console.timeEnd("historyPage()");
    } catch (error) {
        console.log(TAG, error);

        response.message = "Erro interno do servidor";
        response.data = null;
        response.error = "Erro interno do servidor";

        res.status(500).json(response);
        console.timeEnd("historyPage()");
    }
};

export const galleryPage = async (req, res) => {
    console.log(TAG, "historyPage() from " + req.connection.remoteAddress);
    console.time("galleryPage()");
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
        console.timeEnd("galleryPage()");
        return;
    }
    try {
        // Chama o método do Service
        const serviceResponse = await pagesServices.getGalleryContent(id);

        response.message = "Success";
        response.data = serviceResponse;

        res.status(200).json(response);
        console.timeEnd("galleryPage()");
    } catch (error) {
        console.log(TAG, error);

        response.message = "Erro interno do servidor";
        response.data = null;
        response.error = "Erro interno do servidor";

        res.status(500).json(response);
        console.timeEnd("galleryPage()");
    }
};

const pagesController = {
    startPage: startPage,
    historyPage: historyPage,
    galleryPage: galleryPage,
};

export default pagesController;
