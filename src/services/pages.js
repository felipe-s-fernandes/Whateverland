import pagesRepository from "../repositories/pages.js";
const TAG = "Pages Service: ";

const getPageContent = (_id) => {
    // Precisa calcular algo com os inputs?     Não
    // Não precisa fazer nada

    // Precisa pedir algo ao Bando de Dados?    Sim
    try {
        // Precisa filtrar/organizar?               Sim, está procurando um ID específico
        const response = pagesRepository.getArticle(_id);

        // Precisa fazer algo internamente com esses dados?     Não
        //Não precisa fazer nada, só retornar a informação
        return response;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const pagesServices = {
    getPageContent: getPageContent,
};

export default pagesServices;
