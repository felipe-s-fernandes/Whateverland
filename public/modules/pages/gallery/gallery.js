//@author {Anderson Lima}

// import { createElement } from "../../modules.js";
// import { createEventsBar, createEventCard } from "./modules/galleryModules.js";
import { renderPage } from "./modules/galleryModules.js";

// export function createElement(htmlElement, className) {
//     const element = document.createElement(htmlElement);
//     element.classList.add(className);
//     return element;
// }

// export const imagens = [
//     {
//         nameImage: "Civilização Maia",
//         fileName: "maias.js"
//     }
// ]

const imagens = {
    name: "Erebonia",
    files:
    [
        {
            nameImage: "Civilização Maia",
            fileName: "maias.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "asteca.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "asteca.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "asteca.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "maias.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "maias.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "maias.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "maias.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "maias.jpg"
        },
        {
            nameImage: "Civilização Asteca",
            fileName: "maias.jpg"
        }
    ]
}

renderPage(imagens);