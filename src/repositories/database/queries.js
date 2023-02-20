// Autor: { Anderson Lima }
const getCivilizations = `
    SELECT * FROM civilizations WHERE region_id = $1;
`;

const getGallery = `
    SELECT * FROM gallery WHERE civilization_id = $1;
`;

const getRegions = `
    SELECT * FROM regions;
`;

const getRegionById = `
    SELECT * FROM regions WHERE region_id = $1;
`;

const getHistory = `
    SELECT * FROM history_events where civilization_id = $1;
`;
// Jonantas coloca tudo dentro de um objeto

const query = {
    getCivilizations: getCivilizations,
    getGallery: getGallery,
    getRegions: getRegions,
    getRegionById: getRegionById,
    getHistory: getHistory,
};

export default query;
