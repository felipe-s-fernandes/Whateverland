//@author {Anderson Lima}

import { createElement } from "../../../modules/modules.js";

export default function renderPage() {
    // Criação de elementos HTML
    const contentBox = createElement("div", "containerInformation");
    contentBox.id = "contentBox";
    const textTitle = createElement("h1", "textTitle");
    // const contentButtonsAndImages = createElement("div", "contentButtonsAndImages");
    const containerImages = createElement("div", "containerImagesGallery");

    // const buttonLeft = createElement("img", "arrowButton");
    // const buttonRight = createElement("img", "arrowButton");

    // ***Conteúdo fixo da página HTML***

    // Imagens dos itens fixos
    // buttonLeft.src = "../../../uploads/arrow-left.png";
    // buttonRight.src = "../../../uploads/arrow-right.png";

    // Identicação dos botões
    // buttonLeft.id = "left";
    // buttonRight.id = "right";
    containerImages.id = "containerImages";
    textTitle.id = "textTitle";

    // Inseerção dos elementos fixos no HTML
    // contentButtonsAndImages.appendChild(buttonLeft);
    // contentButtonsAndImages.appendChild(containerImages);
    // contentButtonsAndImages.appendChild(buttonRight);

    // Inserção dos elementos variáveis no HTML
    contentBox.appendChild(textTitle);
    contentBox.appendChild(containerImages);
    // contentBox.appendChild(contentButtonsAndImages);

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

// export function passPage(array) {
//     const containerImages = document.querySelector("#containerImages");

//     const buttonLeft = document.querySelector("#left");
//     const buttonRight = document.querySelector("#right");

//     const maxImages = 6;

//     let currentPage = 0;

//     let primaryElement = currentPage * maxImages;
//     let lastElement = primaryElement + maxImages - 1;

//     if (currentPage == 0) {
//         buttonLeft.style.display = "none";
//     }

//     buttonRight.style.display = "block";

//     if (array.length - 1 <= lastElement) {
//         buttonRight.style.display = "none";
//     }

//     displayElements(array);

//     function displayElements(array) {

//         containerImages.innerHTML = "";

//         // Posições no array
//         primaryElement = currentPage * maxImages;
//         lastElement = primaryElement + maxImages - 1;

//         // Percorrendo apenas os itens máximos por página
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];

//             if (i >= primaryElement && i <= lastElement) {
//                 containerImages.appendChild(addImage(element));
//                 if (i == lastElement) {
//                     i = array.length;
//                 }
//             }
//         }
//     }

//     buttonLeft.addEventListener("click", () => {

//         if (currentPage === 1) {
//             buttonLeft.style.display = "none";
//             buttonRight.style.display = "block";
//         } else {
//             buttonLeft.style.display = "block";
//             buttonRight.style.display = "block";
//         }
//         currentPage--;
//         console.log(currentPage);
//         displayElements(array);
//     })

//     buttonRight.addEventListener("click", () => {

//         if (lastElement + maxImages > array.length - 1) {
//             buttonRight.style.display = "none";
//             buttonLeft.style.display = "block";

//         } else {
//             buttonLeft.style.display = "block";
//             buttonRight.style.display = "block";
//         }

//         currentPage++;
//         console.log(lastElement);
//         displayElements(array);
//     })
// }

export function imagesGallery(array) {
    const containerImages = document.querySelector("#containerImages");

    containerImages.innerHTML = "";

    // Percorrendo apenas os itens máximos por página
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        containerImages.appendChild(addImage(element));
    }
}
