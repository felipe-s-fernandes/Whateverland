//@author {Anderson Lima}

import { createElement } from "../../../modules.js";


export function renderPage(images) {
    const root = document.querySelector("#root");
    root.innerHTML = "";

    // Criação de elementos HTML
    const contentBox = createElement("div", "contentBox");
    const textTitle = createElement("h1", "textTitle");
    const contentButtonsAndImages = createElement("div", "contentButtonsAndImages");
    const containerImages = createElement("div", "containerImages");

    const buttonLeft = createElement("img", "arrowButton");
    const buttonRight = createElement("img", "arrowButton");

    // Conteúdo fixo da página HTML
    
    // Imagens dos itens fixos
    buttonLeft.src = "./uploads/arrow-left.png";
    buttonRight.src = "./uploads/arrow-right.png";
    
    // Conteúdo variável
    textTitle.innerHTML = `GALERIA DE IMAGEs DE ${images.name}`;


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

    image.src = `./uploads/${uploadImage.fileName}`;
    figuraCaption.innerText = uploadImage.nameImage;  

    figure.appendChild(image);
    figure.appendChild(figuraCaption);

    return figure;
}