//@author {Pedro Mendes}
import { createElement } from "../../../modules/modules.js";

const objects = [
    {
        title: "titulo",
        img: "magnifier.png",
        paragrafo:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
];

export function page() {
    //criando constante para selecioanr o elemento html
    const root = document.querySelector("#searchRoot");

    //criando divs para incluir artigos, imagens e outros
    const searchBar = createElement("div", "searchBar");
    const main = createElement("div", "main");

    const divSearch = createElement("div", "divSearch");

    const divSearch1 = createElement("div", "divSearch");
    const divSearch2 = createElement("div", "divSearch");
    const divSearch3 = createElement("div", "divSearch");

    //criando articles e titles para as divs subsequentes
    const titleSearch = createElement("div", "titleSearch");
    const answerSearch = createElement("text", "answerSearch");
    const article = createElement("div", "article");

    //linhas de exemplo
    const article1 = createElement("div", "article");
    const article2 = createElement("div", "article");
    const article3 = createElement("div", "article");

    const titles = createElement("text", "titles");
    const contents = createElement("text", "contents");

    //linhas de exemplo
    const titles1 = createElement("text", "titles");
    const contents1 = createElement("text", "contents");
    const titles2 = createElement("text", "titles");
    const contents2 = createElement("text", "contents");
    const titles3 = createElement("text", "titles");
    const contents3 = createElement("text", "contents");

    answerSearch.innerHTML = "Resultados";

    titles.innerHTML = objects[0].title; //"Titulo do artigo";
    contents.innerHTML = objects[0].paragrafo; //"Titulo do artigo";

    //linhas de exemplo
    titles1.innerHTML = objects[0].title; //"Titulo do artigo";
    contents1.innerHTML = objects[0].paragrafo; //"Titulo do artigo";

    titles2.innerHTML = objects[0].title; //"Titulo do artigo";
    contents2.innerHTML = objects[0].paragrafo; //"Titulo do artigo";

    titles3.innerHTML = objects[0].title; //"Titulo do artigo";
    contents3.innerHTML = objects[0].paragrafo; //"Titulo do artigo";

    //criando constante para armazenar imagem
    const loupe = createElement("img", "loupe");
    const img = createElement("img", "image");

    //linhas de exemplo
    const img1 = createElement("img", "image");
    const img2 = createElement("img", "image");
    const img3 = createElement("img", "image");

    //criando campo de entrada de pesquisa
    const inputText = createElement("text", "inputText");
    inputText.innerHTML = "Busque um artigo...";

    //buscando imagens
    loupe.src = "./uploads/" + objects[0].img;
    img.src = "./uploads/viking.png";
    img1.src = "./uploads/Erebonia_Crest.webp";
    img2.src = "./uploads/Rean_Schwarzer_Note_29.webp";
    img3.src = "./uploads/tanque.png";

    titleSearch.appendChild(answerSearch);
    main.appendChild(titleSearch);
    searchBar.appendChild(inputText);
    searchBar.appendChild(loupe);

    article.appendChild(titles);
    article.appendChild(contents);

    //linhas de exemplo
    article1.appendChild(titles1);
    article1.appendChild(contents1);
    article2.appendChild(titles2);
    article2.appendChild(contents2);
    article3.appendChild(titles3);
    article3.appendChild(contents3);

    //incluindo conteúdo dentro das divs
    divSearch.appendChild(article);
    divSearch.appendChild(img);

    divSearch1.appendChild(article1);
    divSearch1.appendChild(img1);

    divSearch2.appendChild(article1);
    divSearch2.appendChild(img2);

    divSearch3.appendChild(article1);
    divSearch3.appendChild(img3);

    //linhas de exemplo
    divSearch.appendChild(article);
    divSearch1.appendChild(article1);
    divSearch2.appendChild(article2);
    divSearch3.appendChild(article3);
    main.appendChild(divSearch);
    main.appendChild(divSearch1);
    main.appendChild(divSearch2);
    main.appendChild(divSearch3);

    //exibindo conteúdo
    root.appendChild(searchBar);
    root.appendChild(main);
    root.appendChild(backButton);

    return;
}
