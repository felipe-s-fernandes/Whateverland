import database from "./database.js";
const TAG = "Civilizations Repository: ";

const getCivilizations = (regionId) => {
    try {
        const response = {
            civilizations: null,
        };

        //Mock getCivilizations;
        const civilizationsResponse = database.civilizations.filter(
            (civilization) => civilization.region_id === regionId
        );

        response.civilizations = civilizationsResponse;

        if (response.civilizations.length > 0) return response;
        throw new Error("Civilizations not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const civilizationsRepository = {
    getCivilizations: getCivilizations,
};

export default civilizationsRepository;
