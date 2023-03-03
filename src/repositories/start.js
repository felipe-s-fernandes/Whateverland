// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import { connectDb } from "./database/connection.js";
import query from "./database/queries.js";
const TAG = "Start Repository: ";

const getStart = async (civilizationId) => {
    try {
        const response = {
            start_page: null,
        };

        const civilizationResponse = await connectDb(query.getStart, [
            civilizationId,
        ]);

        response.start_page = civilizationResponse;

        if (response.start_page.length > 0) return response;
        throw new Error(
            `Start page for civilization with id ${civilizationId} not found.`
        );
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const patchStart = async (startObject) => {
    try {
        const response = {
            start_page_id: null,
        };

        await connectDb(query.getCivilizationById, [
            startObject.civilizationId,
        ]);

        // Looks for an instance of a start page for the required civilization in the database
        const getStartResponse = await connectDb(query.getStart, [
            startObject.civilization_id,
        ]);
        console.log(getStartResponse);
        response.start_page_id = getStartResponse.start_page_id;

        // If there's no start page, a new one is created
        if (getStartResponse.length < 1) {
            await connectDb(query.postStartPage, [startObject.civilization_id]);
        }

        const patchStartResponse = await connectDb(query.patchStartPage, [
            startObject.civilization_id,
            startObject.official_name,
            startObject.localization,
            startObject.capital,
            startObject.religion,
            startObject.government,
            startObject.title,
            startObject.paragraph,
        ]);

        return patchStartResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const searchStart = async (string) => {
    try {
        const response = {
            search_results: null,
        };

        const searchResults = await connectDb(query.searchCivilization, [
            string,
        ]);

        response.search_results = searchResults;

        return response;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const startRepository = {
    getStart: getStart,
    patchStart: patchStart,
    searchStart: searchStart,
};

export default startRepository;
