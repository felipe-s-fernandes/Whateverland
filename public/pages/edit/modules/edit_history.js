// @Autor { Anderson Lima }
// @Coautor {Ed Wilson}
// @Coautor { Felipe Fernades }

import { createElement, toggleButton } from "../../../modules/modules.js";
import HTTPRequest from "../../../modules/HTTPRequest.js";
import imgRequest from "../../../modules/imgRequest.js";

// Global variable that stores the clicked eventId
let eventId;

// Preview of the selected image
export function previewImageEventHistory(idHTMLImage) {
    const imgPreview = document.querySelector(`#${idHTMLImage}`);
    const inputFile = document.querySelector("#img_pg_history");

    inputFile.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgPreview.src = reader.result;
        };
    });
}

function buttonCancel() {
    const form = document.querySelector("#formHistory");

    // Shows the cancel button
    const buttonCancel = document.querySelector("#buttonCancelEditHistory");
    buttonCancel.style.display = "block";

    // Cancel button event that clears all inputs
    buttonCancel.addEventListener("click", (e) => {
        buttonCancel.style.display = "none";
        e.preventDefault();

        const inputs = form.querySelectorAll('input[type="text"]');
        inputs.forEach((element) => (element.value = ""));

        // Enabling add history event button
        const button = document.querySelector("#buttonHistory");
        button.innerText = "Adicionar evento";

        // Renders default image
        const image = document.querySelector("#imageEvent");
        image.src = "../../../uploads/default_image_history.jpg";

        // Clears textarea
        const textArea = form.querySelector("textarea");
        textArea.value = "";

        // Clears file input
        const inputFile = form.querySelector('input[type="file"]');
        inputFile.value = "";

        return;
    });
}

// ***Requests***

export async function reqRenderTableHistory(civilizationId) {
    const historyObject = await HTTPRequest(
        `/history/${civilizationId}`,
        "GET"
    );

    if (historyObject == null) {
        return;
    }

    renderTable(historyObject.history_events);
}

// DELETE history request
export async function reqDeleteEvent(event, civilizationId) {
    const result = document.querySelector("#resulthistory");
    result.textContent = "";
    const button = document.querySelector("#buttonHistory");
    button.innerText = "Adicionar evento";

    // Clears all inputs when a new history event is added
    const form = document.querySelector("#formHistory");
    const inputs = form.querySelectorAll('input[type="text"]');
    inputs.forEach((element) => (element.value = ""));

    const textArea = form.querySelector("textarea");
    textArea.value = "";

    const image = form.querySelector("img");
    image.src = "../../../uploads/default_image_history.jpg";

    // Clears file input
    const inputFile = form.querySelector('input[type="file"]');
    inputFile.value = "";

    await HTTPRequest(`/history/${event}`, "DELETE");
    result.textContent = "O evento foi excluido!";

    const table = document.querySelector("#tableHistory");
    table.innerHTML = "";
    await reqRenderTableHistory(civilizationId);
    result.textContent = "O evento foi excluido!";
    console.log("Dados do evento excluidos!");
}

// ***History Events***

// History events form
export function eventFormHistory(civilizationId) {
    const form = document.querySelector("#formHistory");
    const button = document.querySelector("#buttonHistory");
    const result = document.querySelector("#resulthistory");

    form.addEventListener("submit", async (e) => {
        toggleButton(button);
        result.textContent = "";
        e.preventDefault();

        if (button.innerText == "Adicionar evento") {
            // Image upload
            const formData = new FormData();
            const file = document.querySelector("#img_pg_history");

            console.log(form.nameh.value);

            formData.append("file", file.files[0]);
            formData.append("civilization_id", civilizationId);
            formData.append("event_title", form.nameh.value);
            formData.append("event_year", form.yearh.value);
            formData.append("event_image_label", form.legendh.value);
            formData.append("event_paragraph", form.desch.value);

            if (isNaN(form.yearh.value) || form.yearh.value == "") {
                result.textContent =
                    'Preencha o campo "Ano do evento"! (Apenas com números!)';
            } else if (form.yearh.value <= 0) {
                result.textContent =
                    'Preencha o campo "Ano do evento" com valores positivos!';
            } else if (form.nameh.value == "") {
                result.textContent = "Adicione um nome ao evento!";
            } else {
                try {
                    const response = await imgRequest(
                        `/history/`,
                        "POST",
                        formData
                    );
                    if (response !== null) {
                        result.textContent =
                            'Evento "' +
                            form.nameh.value +
                            '" adicionado com sucesso!';
                        //Clearing all inputs
                        const inputs =
                            form.querySelectorAll('input[type="text"]');
                        inputs.forEach((element) => (element.value = ""));

                        const textArea = form.querySelector("textarea");
                        textArea.value = "";

                        const image = form.querySelector("img");
                        image.src =
                            "../../../uploads/default_image_history.jpg";

                        const inputFile =
                            form.querySelector('input[type="file"]');
                        inputFile.value = "";

                        await reqRenderTableHistory(civilizationId);
                    } else {
                        result.textContent = "Evento não inserido!";
                    }
                } catch (error) {
                    console.error(error);
                    alert(
                        "Você não possui autorização para editar essa civilização!"
                    );
                }
            }
        }

        if (button.innerText == "Editar evento") {
            const buttonCancel = document.querySelector(
                "#buttonCancelEditHistory"
            );
            buttonCancel.style.display = "none";

            // Image upload
            const formData = new FormData();
            const file = document.querySelector("#img_pg_history");

            formData.append("file", file.files[0]);
            formData.append("event", eventId);
            formData.append("event_title", form.nameh.value);
            formData.append("event_year", form.yearh.value);
            formData.append("event_image_label", form.legendh.value);
            formData.append("event_paragraph", form.desch.value);

            if (isNaN(form.yearh.value) || form.yearh.value == "") {
                result.textContent =
                    'Preencha o campo "Ano do evento"! (Apenas com números!)';
            } else if (form.yearh.value <= 0) {
                result.textContent =
                    'Preencha o campo "Ano do evento" com valores positivos!';
            } else if (form.nameh.value == "") {
                result.textContent = "Adicione um nome ao evento!";
            } else {
                try {
                    await imgRequest(`/history/edit`, "PATCH", formData);

                    result.textContent =
                        'Evento "' +
                        form.nameh.value +
                        '" alterado com sucesso!';

                    const inputs = form.querySelectorAll('input[type="text"]');
                    inputs.forEach((element) => (element.value = ""));

                    const textArea = form.querySelector("textarea");
                    textArea.value = "";

                    const image = form.querySelector("img");
                    image.src = "../../../uploads/default_image_history.jpg";

                    const inputFile = form.querySelector('input[type="file"]');
                    inputFile.value = "";

                    button.innerText = "Adicionar evento";
                    await reqRenderTableHistory(civilizationId);
                } catch (error) {
                    console.error(error);
                    alert(
                        "Você não possui autorização para editar essa civilização!"
                    );
                }
            }
        }
        toggleButton(button);
        await reqRenderTableHistory(civilizationId);
    });
}

// ***Dynamic rendering of the page***

// Inserting edit information on the inputs
function inputRender(object, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);
    input.value = object[objectProperty];
}

// Feeds inputs around the page
async function editEventsHistory(object) {
    const button = document.querySelector("#buttonHistory");
    button.innerText = "Editar evento";

    buttonCancel();

    const image = document.querySelector("#imageEvent");
    image.src = "../../../uploads/" + object.event_image;

    // Default image rendering
    image.addEventListener("error", function () {
        image.src = "../../../uploads/default_image_history.jpg";
    });

    eventId = object.event;

    // Updating inputs with object entries
    inputRender(object, "name_pg_history", "event_title");
    inputRender(object, "year_pg_history", "event_year");
    inputRender(object, "legend_pg_history", "event_image_label");
    inputRender(object, "desc_pg_history", "event_paragraph");
}

// Renderização da tabela que recebe o array de dados
function renderTable(array) {
    const tableBody = document.querySelector("#tableHistory");
    tableBody.innerHTML = "";

    // Criação das colunas e linhas no HTML
    for (let i = 0; i < array.length; i++) {
        const line = createElement("tr", "trEdit");

        const column1 = createElement("td", "tdEdit");
        const column2 = createElement("td", "tdEdit");
        const column3 = createElement("td", "tdEdit");
        const column4 = createElement("td", "tdEdit");
        const column5 = createElement("td", "tdEdit");

        const defaultImage = "default_image_history.jpg";

        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);
        line.appendChild(column4);
        line.appendChild(column5);

        column1.innerText = `${array[i].event_year}`;
        column2.innerText = `${array[i].event_title}`;
        column3.innerHTML = `<img class="imagePreviewHistory" src="../../uploads/${array[i].event_image}" alt="Prévia da imagem do evento histórico">`;
        column4.innerHTML = `<img class="buttontable_H"src="../../uploads/lapis.png" alt="Ícone de editar">`;
        column5.innerHTML = `<img class="buttontable_H"src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Função para inserir imagem padrão de visualização caso a imagem do evento não seja encontrada
        column3.firstChild.onerror = () => {
            column3.firstChild.src =
                "../../../uploads/default_image_history.jpg";
        };

        // Eventos de editar e deletar dados da tabela
        column4.addEventListener("click", async () =>
            editEventsHistory(array[i])
        );
        column5.addEventListener("click", async () => {
            if (
                window.confirm(
                    `Deseja realmente excluir o evento ${array[i].event_title} ?`
                )
            ) {
                try {
                    await reqDeleteEvent(
                        array[i].event,
                        array[i].civilization_id
                    );
                } catch (error) {
                    console.error(error);
                    alert(
                        "Você não possui autorização para editar essa civilização!"
                    );
                }
            }
        });

        tableBody.appendChild(line);
    }

    return tableBody;
}
