import RenderMainPage from "./main-page.js";
import RenderCivilizationsPage from "./civilizations/civilizations.js";
import RenderStartPage from "./start/start.js";
import RenderHistoryPage from "./history/history.js";
import RenderGalleryPage from "./gallery/gallery.js";

export default function getPagesRouter() {
    const pagesRouter = {
        "/": RenderMainPage,
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
