import database from "./database.js";
import { connectDb } from "./database/connection.js";
import query from "./database/queries.js";

const TAG = "Civilizations Repository: ";

const getCivilizations = async (regionId) => {
    try {
        const response = {
            civilizations: null,
        };

        //Mock getCivilizations;
        // const civilizationsResponse = database.civilizations.filter(
        //     (civilization) => civilization.region_id === regionId
        // );
        // response.civilizations = civilizationsResponse;

        // Banco de dados real
        const database = await connectDb(query.getCivilizations, [regionId]);

        // const civilizationsResponse = database.filter(
        //     (civilization) => civilization.region_id === regionId
        // );
        // Esse console não aparece Felipe, porque?
        console.log("console3", database);

        response.civilizations = database;

        if (response.civilizations.length > 0) return response;
        throw new Error("Civilizations not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const getCivilizationById = (civilizationId) => {
    try {
        const response = {
            civilization: null,
        };

        //Mock getCivilizationById;

        const civilizationResponse = database.civilizations.filter(
            (civilization) => civilization.civilization_id === civilizationId
        );

        console.log(civilizationResponse);

        response.civilization = civilizationResponse;

        if (response.civilization.length > 0) return response;
        throw new Error(`Civilization with id ${civilizationId} not found.`);
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const postCivilization = async (regionId, civilizationName) => {
    try {
        const response = {
            civilizations: null,
        };

        const database = await connectDb(query.postCivilization, [
            regionId,
            civilizationName,
        ]);
        response.civilizations = database;
        return response;
        // if (response.civilizations.length > 0) return response;
        // throw new Error("Civilizations not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const civilizationsRepository = {
    getCivilizations: getCivilizations,
    getCivilizationById: getCivilizationById,
    postCivilization: postCivilization,
};

export default civilizationsRepository;
