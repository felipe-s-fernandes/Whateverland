//@Autor {Felipe Fernandes}
import getPagesRouter from "./pages/router.js";
const root = document.querySelector("#root");
const pagesRoutes = getPagesRouter();

const pageObject = await pagesRoutes.getPage("/");
root.innerHTML = "";
root.appendChild(pageObject.page);
pageObject.addEvents();

window.addEventListener("onstatechange", async (event) => {
    const url = event.detail.url;
    const data = event.detail.data;
    const pageObject = await pagesRoutes.getPage(url, data);
    history.pushState({}, "", url);
    root.innerHTML = "";
    root.appendChild(pageObject.page);
    pageObject.addEvents();
});
