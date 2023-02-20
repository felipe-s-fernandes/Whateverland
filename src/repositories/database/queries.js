// Autor: { Anderson Lima }
const getCivilizations = `
    SELECT * FROM civilizations WHERE region_id = $1;
`;

const getGallery = `
    SELECT * FROM gallery WHERE civilization_id = $1;
`;

// Jonantas coloca tudo dentro de um objeto

const query = {
    getCivilizations: getCivilizations,
    getGallery: getGallery,
};

export default query;
