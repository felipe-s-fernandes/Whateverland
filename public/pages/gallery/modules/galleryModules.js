//@author {Anderson Lima}

import { createElement } from "../../../modules/modules.js";

export default function renderPage() {
    // Criação de elementos HTML
    const contentBox = createElement("div", "containerInformation");
    contentBox.id = "contentBox";
    const textTitle = createElement("h1", "patternCardTitle");
    textTitle.id="textTitle";

    const containerImages = createElement("div", "containerImagesGallery");

    // ***Conteúdo fixo da página HTML***

    containerImages.id = "containerImages";
    textTitle.id = "textTitle";

    // Inserção dos elementos variáveis no HTML
    contentBox.appendChild(textTitle);
    contentBox.appendChild(containerImages);

    return contentBox;
}

// Função que adiciona imagens a página HTML
function addImage(uploadImage) {
    const figure = createElement("figure", "contentImage");
    const image = createElement("img", "image");
    const figuraCaption = createElement("figcaption", "textImage");

    image.src = `../../../uploads/${uploadImage.gallery_image_id}`;
    image.onerror = () => {
        image.src = "../../../uploads/default_image.jpg";
    };
    figuraCaption.innerText = uploadImage.gallery_image_title;

    figure.appendChild(image);
    figure.appendChild(figuraCaption);

    return figure;
}

export function renderTextTitle(name) {
    const textTitle = document.querySelector("#textTitle");
    textTitle.innerHTML = `GALERIA DE IMAGENS ${name}`;
    return textTitle;
}

export function imagesGallery(array) {
    const containerImages = document.querySelector("#containerImages");

    containerImages.innerHTML = "";

    // Condição quando não é encontrado imagens
    if (array.length == 0) {
        const textNoImage = createElement("p", "patternText");
        textNoImage.innerText = "Não contém imagens cadastradas";

        containerImages.appendChild(textNoImage);    
    }

    // Percorrendo apenas os itens máximos por página
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        containerImages.appendChild(addImage(element));
    }
}