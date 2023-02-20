// Autor: { Anderson Lima }
// Co-author: {Jônatas Gomes}

const getCivilizations = `
    SELECT * FROM civilizations WHERE region_id = $1;
`;

const getAllCivilizations = `
    SELECT * FROM civilizations;
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
    SELECT * FROM history_events WHERE civilization_id = $1;
`;

const postCivilization = `
    INSERT INTO civilizations (region_id, civilization_name)
    VALUES ($1, $2)
    RETURNING civilization_id;
`;
// Jonatas coloca tudo dentro de um objeto

const postRegion = `
    INSERT INTO regions(region_name, region_path)
    VALUES ($1, $2) 
    RETURNING region_id;
`;

const patchStart_page = `
    UPDATE start_pages
    SET official_name = $2, localization = $3, capital = $4, religion = $5, government = $6, title = $7, paragraph = $8
    WHERE civilization_id = $1;
`

const query = {
    getCivilizations: getCivilizations,
    getCivilizationById: getCivilizationById,
    getAllCivilizations: getAllCivilizations,
    getGallery: getGallery,
    getRegions: getRegions,
    getRegionById: getRegionById,
    getHistory: getHistory,
    getStart: getStart,
    postCivilization: postCivilization,
    postRegion: postRegion,
    patchStart_page: patchStart_page,
};

export default query;
