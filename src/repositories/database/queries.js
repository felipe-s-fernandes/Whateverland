// Autor: { Anderson Lima }
const getCivilizations = `
    SELECT * FROM civilizations WHERE region_id = $1;
`;

const getGallery = `
    SELECT * FROM gallery WHERE civilization_id = $1;
`;

// Vou mudar aqui ainda
const getCivilizationById = `
    SELECT * FROM civilizations WHERE civilization_id = $1;
`;

const getStart = `
    SELECT * FROM start_pages WHERE civilization_id = $1;
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

const postCivilization = `
    INSERT INTO civilizations (region_id, civilization_name)
    VALUES ($1, $2)
    RETURNING civilization_id;
`;
// Jonantas coloca tudo dentro de um objeto

const query = {
    getCivilizations: getCivilizations,
    getGallery: getGallery,
    getRegions: getRegions,
    getRegionById: getRegionById,
    getHistory: getHistory,
    postCivilization: postCivilization,
    getCivilizationById: getCivilizationById,
    getStart: getStart,
};

export default query;
