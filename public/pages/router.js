import RenderMainPage from "./main-page.js";
import RenderStartPage from "./start-page.js";
//import RenderHistoryPage from "./history-page.js";
import RenderHistoryPage from "./history/history.js";
import RenderGalleryPage from "./gallery-page.js";

export default function getPagesRouter() {
    const pagesRouter = {
        "/": RenderMainPage(),
        "/start": RenderStartPage(),
        "/history": RenderHistoryPage(),
        "/gallery": RenderGalleryPage(),
        getPage: function (url) {
            return this[url];
        },
    };
    return pagesRouter;
}
