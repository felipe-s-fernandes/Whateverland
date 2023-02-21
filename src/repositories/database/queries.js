// Autor: { Anderson Lima }
// Co-author: {Jônatas Gomes}

// Pega todas as regiões e seus dados.
const getRegions = `
SELECT * FROM regions;
`;

// Pega todos os dados de uma região específica.
const getRegionById = `
SELECT * FROM regions WHERE region_id = $1;
`;

// Pega todas as civilizações e seus dados de uma região específica.
const getCivilizations = `
    SELECT * FROM civilizations WHERE region_id = $1
    ORDER BY civilization_id;
`;

// Pega todas as civilizações e seus dados.
const getAllCivilizations = `
    SELECT * FROM civilizations
    ORDER BY civilization_name;
`;

// (Anderson: Vou mudar aqui ainda) Pega todos os dados de uma civilização específica.
const getCivilizationById = `
    SELECT * FROM civilizations WHERE civilization_id = $1;
`;

// Pega todos os dados da start page de uma civilização específica.
const getStart = `
SELECT * FROM start_pages WHERE civilization_id = $1;
`;

// Pega todos os dados da history page de uma civilização específica.
const getHistory = `
SELECT * FROM history_events WHERE civilization_id = $1 ORDER BY event_year;
`;

// Pega todas as imagens e seus dados de uma civilização específica.
const getGallery = `
    SELECT * FROM gallery WHERE civilization_id = $1;
`;

// Insere dados de uma região específica.
const postRegion = `
INSERT INTO regions(region_name, region_path)
VALUES ($1, $2) 
RETURNING region_id;
`;

// Insere dados de uma civilização específica.
const postCivilization = `
INSERT INTO civilizations (region_id, civilization_name)
VALUES ($1, $2)
RETURNING civilization_id;
`;

// Insere dados da start page de uma civilização específica.
const postStartPage = `
    INSERT INTO start_pages (civilization_id)
    VALUES ($1)
    RETURNING start_page_id;
`;

const postHistoryEvents = `
    INSERT INTO history_events (civilization_id, event_year, event_title, event_image, event_image_label, event_paragraph)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING event;
`;

// Insere dados de uma imagem na galeria.
const postGallery = `
    INSERT INTO gallery (civilization_id, gallery_image_title, gallery_image_id)
    VALUES ($1, $2, $3)
    RETURNING image_unique_id;
`;
// Jonatas coloca tudo dentro de um objeto

// Atualiza nome de uma região específica.
const patchRegion = `
    UPDATE regions
    SET region_name
    WHERE region_id = $1
    RETURNING region_id;
`;

// Atualiza nome e imagem de uma civilização específica.
const patchCivilization = `
UPDATE civilizations
SET region_id = $2, civilization_name = $3, civilization_image = $4
WHERE civilization_id = $1
RETURNING civilization_id;
`;

// Atualiza dados da start page de uma civilização específica.
const patchStartPage = `
UPDATE start_pages
SET official_name = $2, localization = $3, capital = $4, religion = $5, government = $6, title = $7, paragraph = $8
WHERE civilization_id = $1
RETURNING start_page_id;
`;

//Atualiza dados da history page de uma civilização específica.
const patchHistoryEvents = `
UPDATE history_events
SET event_year = $2, event_title = $3, event_image = $4, event_image_label = $5, event_paragraph = $6
WHERE event = $1
RETURNING event;
`;

// Atualiza dados de uma imagem na galeria de uma civilização específica.
const patchGallery = `
    UPDATE gallery
    SET gallery_image_title = $3
    WHERE civilization_id = $1 AND image_unique_id = $2
    RETURNING image_unique_id;
`;

// Deleta uma região.
const deleteRegion = `
    DELETE FROM regions
    WHERE region_id = $1;
`;

// Deleta um civilização.
const deleteCivilization = `
    DELETE FROM civilizations
    WHERE civilization_id = $1;
`;

// Deleta um event da history page.
const deleteHistoryEvent = `
    DELETE FROM history_events
    WHERE history_event_unique_id = $1;
`;

// Deleta uma imagem da galeria.
const deleteGalleryImage = `
    DELETE FROM gallery
    WHERE image_unique_id = $1;
`;

// Objeto com todas as constantes.
const query = {
    getCivilizations: getCivilizations,
    getCivilizationById: getCivilizationById,
    getAllCivilizations: getAllCivilizations,
    getGallery: getGallery,
    getRegions: getRegions,
    getRegionById: getRegionById,
    getHistory: getHistory,
    getStart: getStart,
    postRegion: postRegion,
    postCivilization: postCivilization,
    postStartPage: postStartPage,
    postHistoryEvents: postHistoryEvents,
    postGallery: postGallery,
    patchRegion: patchRegion,
    patchCivilization: patchCivilization,
    patchStartPage: patchStartPage,
    patchHistoryEvents: patchHistoryEvents,
    patchGallery: patchGallery,
    deleteRegion: deleteRegion,
    deleteCivilization: deleteCivilization,
    deleteHistoryEvent: deleteHistoryEvent,
    deleteGalleryImage: deleteGalleryImage,
};

export default query;
