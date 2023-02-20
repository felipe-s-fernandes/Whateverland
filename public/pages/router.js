//@Autor {Felipe Fernandes}
import RenderInitPage from "./init/initPage.js";
import RenderMap from "./map/map.js";
import RenderCivilizationsPage from "./civilizations/civilizations.js";
import RenderStartPage from "./start/start.js";
import RenderHistoryPage from "./history/history.js";
import RenderGalleryPage from "./gallery/gallery.js";
import RenderRegisterCivilizations from "./registerCivilizations/registerCivilizations.js";
import RenderEditPage from "./edit/edit.js";

export default function getPagesRouter() {
    const pagesRouter = {
        "/": RenderInitPage,
        "/map": RenderMap,
        "/civilizations": RenderCivilizationsPage,
        "/start": RenderStartPage,
        "/history": RenderHistoryPage,
        "/gallery": RenderGalleryPage,
        "/register": RenderRegisterCivilizations,
        "/edit": RenderEditPage,
        getPage: function (url, data) {
            return this[url](data);
        },
    };
    return pagesRouter;
}
