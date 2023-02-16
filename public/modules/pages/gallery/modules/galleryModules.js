//@author {Anderson Lima}

import { createElement } from "../../../modules.js";


export function renderPage(images) {

    // Criação de elementos HTML
    const contentBox = createElement("div", "contentBox");
    const textTitle = createElement("h1", "textTitle");
    const contentButtonsAndImages = createElement("div", "contentButtonsAndImages");
    const containerImages = createElement("div", "containerImages");

    const buttonLeft = createElement("img", "arrowButton");
    const buttonRight = createElement("img", "arrowButton");

    // ***Conteúdo fixo da página HTML***

    // Imagens dos itens fixos
    // buttonLeft.src = "./uploads/arrow-left.png";
    buttonLeft.src = "./modules/pages/gallery/uploads/arrow-left.png";
    buttonRight.src = "./modules/pages/gallery/uploads/arrow-right.png";
    
    // ***Conteúdo variável***

    // Título de conteúdo das imagens
    textTitle.innerHTML = `GALERIA DE IMAGES DE ${images.name}`;

    // Imagens do site
    images.files.forEach(element => {
        containerImages.appendChild(addImage(element));
    });
    
    contentButtonsAndImages.appendChild(buttonLeft);
    contentButtonsAndImages.appendChild(containerImages);
    contentButtonsAndImages.appendChild(buttonRight);

    contentBox.appendChild(textTitle);
    contentBox.appendChild(contentButtonsAndImages);
    
    root.appendChild(contentBox);

    return;
}

function addImage(uploadImage) {
    const figure = createElement("figure", "contentImage");
    const image = createElement("img", "image");
    const figuraCaption = createElement("figcaption","textImage");  

    image.src = `./modules/pages/gallery/uploads/${uploadImage.fileName}`;
    figuraCaption.innerText = uploadImage.nameImage;

    figure.appendChild(image);
    figure.appendChild(figuraCaption);

    return figure;
}