import RenderInitPage from "./init/initPage.js";
import RenderMap from "./map/map.js";
import RenderCivilizationsPage from "./civilizations/civilizations.js";
import RenderStartPage from "./start/start.js";
import RenderHistoryPage from "./history/history.js";
import RenderGalleryPage from "./gallery/gallery.js";

export default function getPagesRouter() {
    const pagesRouter = {
        "/": RenderInitPage,
        "/map": RenderMap,
        "/civilizations": RenderCivilizationsPage,
        "/start": RenderStartPage,
        "/history": RenderHistoryPage,
        "/gallery": RenderGalleryPage,
        getPage: function (url) {
            return this[url]();
        },
    };
    return pagesRouter;
}
