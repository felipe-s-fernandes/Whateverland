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
    SELECT * FROM start_page WHERE civilization_id = $1;
`

// Jonantas coloca tudo dentro de um objeto

const query = {
    getCivilizations: getCivilizations,
    getGallery: getGallery,
    getCivilizationById: getCivilizationById,
    getStart: getStart,
};

export default query;
