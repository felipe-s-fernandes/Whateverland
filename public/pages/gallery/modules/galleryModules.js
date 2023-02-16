//@author {Anderson Lima}
import { createElement } from "../../../modules/modules.js";

export default function renderPage(name, gallery) {
    // Criação de elementos HTML
    const contentBox = createElement("div", "contentBox");
    const textTitle = createElement("h1", "textTitle");
    const contentButtonsAndImages = createElement(
        "div",
        "contentButtonsAndImages"
    );
    const containerImages = createElement("div", "containerImages");

    const buttonLeft = createElement("img", "arrowButton");
    const buttonRight = createElement("img", "arrowButton");

    // ***Conteúdo fixo da página HTML***

    // Imagens dos itens fixos
    // buttonLeft.src = "./uploads/arrow-left.png";
    buttonLeft.src = "../../../uploads/arrow-left.png";
    buttonRight.src = "../../../uploads/arrow-right.png";

    // ***Conteúdo variável***

    // Título de conteúdo das imagens
    textTitle.innerHTML = `GALERIA DE IMAGES DE ${name}`;

    // Imagens do site
    gallery.forEach((element) => {
        containerImages.appendChild(addImage(element));
    });

    contentButtonsAndImages.appendChild(buttonLeft);
    contentButtonsAndImages.appendChild(containerImages);
    contentButtonsAndImages.appendChild(buttonRight);

    contentBox.appendChild(textTitle);
    contentBox.appendChild(contentButtonsAndImages);

    return contentBox;
}

function addImage(uploadImage) {
    const figure = createElement("figure", "contentImage");
    const image = createElement("img", "image");
    const figuraCaption = createElement("figcaption", "textImage");

    image.src = `../../../uploads/${uploadImage.gallery_image_id}`;
    figuraCaption.innerText = uploadImage.gallery_image_title;

    figure.appendChild(image);
    figure.appendChild(figuraCaption);

    return figure;
}
