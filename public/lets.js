import getPagesRouter from "./pages/router.js";
const root = document.querySelector("#root");
//const objRotas = GeraObjComRotas();
const pagesRoutes = getPagesRouter();

console.log(pagesRoutes);

//inicia
//const page = objRotas.getPage("/");
const pageObject = await pagesRoutes.getPage("/");
console.log(pageObject);
root.innerHTML = "";
root.appendChild(pageObject.page);
pageObject.addEvents();

//ouvir evento de "onstatechange"
window.addEventListener("onstatechange", async (event) => {
    const url = event.detail.url;
    const pageObject = await pagesRoutes.getPage(url);
    history.pushState({}, "", url);
    root.innerHTML = "";
    root.appendChild(pageObject.page);
    pageObject.addEvents();
});
