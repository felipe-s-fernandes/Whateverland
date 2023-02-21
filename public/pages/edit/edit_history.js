// @Autor { Anderson Lima }
// @Coautor { Ed Wilson }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";

// ***Requisições***

// Requisição GET para renderizar a tabela a tabela
export async function reqRenderTableHistory(civilizationId) {

    const historyObject = await HTTPRequest(`/history/${civilizationId}`, "GET");
    console.log(historyObject);

    renderTable(historyObject.history_events);
}


// renderInputHistory(idCivilization, "name_pg_history", "event_title", i);
// renderInputHistory(idCivilization, "year_pg_history", "event_year", i);
// renderInputHistory(idCivilization, "img_pg_history", "event_image", i);
// renderInputHistory(idCivilization, "legend_pg_history", "event_image_label", i);
// renderInputHistory(idCivilization, "desc_pg_history", "event_paragraph", i);


// Requisição para cadastrar novo evento
async function newHistory(civilizationId, nameh, yearh, imgh, legh, desch) {
    await HTTPRequest(`/history/${civilizationId}/`, "POST", {
        civilization_id: civilizationId,
        event_title: nameh,
        event_year: yearh,
        event_image: "0.png",
        event_image_label: legh,
        event_paragraph: desch

        // historyObject.civilization_id,
        // historyObject.event_year,
        // historyObject.event_title,
        // historyObject.event_image,
        // historyObject.event_image_label,
        // historyObject.event_paragraph,
    });
}


/* function eventForm() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (e) => {
        const nomeUser = document.querySelector("#nome-input");
        const regionSelect = document.querySelector("#regions");
        // const button = document.querySelector("#cadastrar");
        e.preventDefault();

        // Requisitando para o servidor cadastrar o nova civilização no banco de dados
        await newCivilization(form.nome.value, form.regions.value);

        // if (button.value == "Cadastrar") {
        // }

        // if (button.value == "Editar") {
        //     // Requisitando para o servidor editar um usuário no banco de dados
        //     userEdit(userId);
        //     // Sumir os dados do usuário nos inputs quando terminar edição
        //     button.value = "Cadastrar";
        // }
        reqRenderTable();
        nomeUser.value = "";
        regionSelect.value = "";
    });
} */

export function addEventsHistory() {
    const buttonAddEvent = document.querySelector("#addHistory");
    buttonAddEvent.style.display = "block";
    buttonAddEvent.addEventListener("click", () => {
        buttonAddEvent.style.display = "none";
        const page = document.querySelector("#divHistory");
        const inputsHistory =
        `
        <form id="formhistory" class="cadastre">
            <h2>História</h2>
    
            <label for="name_pg_history">Título do evento:</label>
            <input type="text" name="nameh" id="name_pg_history" />
    
            <label for="year_pg_history">Ano do evento:</label>
            <input type="text" name="yearh" id="year_pg_history" />
    
            <label for="img_pg_history">Imagem do evento:</label>
            <input type="text" name="imgh" id="img_pg_history" />
    
            <label for="legend_pg_history">Legenda da imagem:</label>
            <input type="text" name="legendh" id="legend_pg_history" />
    
            <label for="desc_pg_history">Descrição do evento:</label>
            <textarea type="text" name="desch" id="desc_pg_history"></textarea>
    
            <button type="submit" class ="style_btn" id="include_hist">Incluir evento</button>
            <button type="button" class ="style_btn" id="cancel_add_hist">Cancelar</button>
        </form>
        `;
        page.innerHTML = inputsHistory;
        const buttonCancel = document.querySelector("#cancel_add_hist");
        console.log(buttonCancel);
        buttonCancel.addEventListener('click', () => {
            buttonAddEvent.style.display = "block";
            page.innerHTML = "";
        });
    })    
}


// Formulário de preenchimento
export function eventFormHistory(civilizationId) {
    const form = document.querySelector("#formhistory");

    form.addEventListener("submit", async (e) => {
        // const nomeUser = document.querySelector("#nome-input");
        // const regionSelect = document.querySelector("#regions");
        const button = document.querySelector("#include_hist");
        e.preventDefault();

        if (button.value == "Incluir evento") {
            newHistory(
                civilizationId,
                form.nameh.value, 
                form.yearh.value, 
                form.imgh.value, 
                form.legh.value, 
                form.desch.value
            );
            // Colocar o negócio de sumir ou é aparecer o botão aqui
            //Execute tal função
        }
        
        if (button.value == "Editar") {
            
            //Execute tal função
            // Colocar o negócio de sumir ou é aparecer o botão aqui


            // // Requisitando para o servidor editar um usuário no banco de dados
            // userEdit(userId);
            // // Sumir os dados do usuário nos inputs quando terminar edição
            // button.value = "Cadastrar";
        }

        // Requisitando para o servidor cadastrar o nova civilização no banco de dados
        await newCivilization(form.nome.value, form.regions.value);

        reqRenderTable();
        nomeUser.value = "";
        regionSelect.value = "";
    });
}


// Renderização da tabela que recebe o array de dados
function renderTable(array) {
    console.log("chegou");
    const table = document.querySelector("#tableHistory");
    console.log(table);
    table.innerHTML = "";
    const tableBody = createElement("tbody", "table");
    tableBody.innerHTML = `
        <thead>
            <tr id="table-heading">
                <td class="id-number">Id</td>
                <td class="e-mail">Ano do evento</td>
                <td class="nome">Descrição do evento</td>
                <td class="nome">Editar</td>
                <td class="nome">Deletar</td>
            </tr>
        </thead>
    `;

    table.appendChild(tableBody);

    // Criação das colunas e linhas no HTML
    for (let i = 0; i < array.length; i++) {
        const line = createElement("tr", "table");

        const column1 = createElement("td", "table");
        const column2 = createElement("td", "table");
        const column3 = createElement("td", "table");
        const column4 = createElement("td", "table");
        const column5 = createElement("td", "table");

        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);
        line.appendChild(column4);
        line.appendChild(column5);

        column1.innerHTML = `${i + 1}`;
        column2.innerHTML = `${array[i].event_year}`;
        column3.innerHTML = `${array[i].event_title}`;
        // column4.innerHTML = `<img src="./src/lapis.png" alt="Ícone de editar">`;
        column4.innerHTML = `<img src="../../uploads/lapis.png" alt="Ícone de editar">`;
        column5.innerHTML = `<img src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
        // console.log(array[i]);
        column4.addEventListener("click", () => redirectEditPage(array[i].civilization_id, i));
        // column4.addEventListener("click", () => userInput(array[i]));
        // column5.addEventListener("click", () => userDelete(array[i].civilization_id));

        table.appendChild(line);
        console.log(array.length + "-" + i);
    }

    return tableBody;
}

function redirectEditPage(idCivilization, i) {
    const page = document.querySelector("#divHistory");
    // const tableHistory = document.querySelector("#tableHistory");
    const buttonAddEvent = document.querySelector("#addHistory");
    buttonAddEvent.style.display = "none";
    const inputsHistory =
    `
    <form class="cadastre">
        <h2>História</h2>

        <label for="name_pg_history">Título do evento:</label>
        <input type="text" id="name_pg_history" />

        <label for="year_pg_history">Ano do evento:</label>
        <input type="text" id="year_pg_history" />

        <label for="img_pg_history">Imagem do evento:</label>
        <input type="text" id="img_pg_history" />

        <label for="legend_pg_history">Legenda da imagem:</label>
        <input type="text" id="legend_pg_history" />

        <label for="desc_pg_history">Descrição do evento:</label>
        <textarea type="text" id="desc_pg_history"></textarea>

        <button type="button" class ="style_btn" id="edit_hist">Editar evento</button>
        <button type="button" class ="style_btn" id="cancel_edit_hist">Cancelar alterações</button>
    </form>
    `;
    page.innerHTML = inputsHistory;
    

    const buttonCancel = document.querySelector("#cancel_edit_hist");
    buttonCancel.addEventListener('click', () => {
        page.innerHTML = "";
        buttonAddEvent.style.display = "block";
    });

    renderInputHistory(idCivilization, "name_pg_history", "event_title", i);
    renderInputHistory(idCivilization, "year_pg_history", "event_year", i);
    renderInputHistory(idCivilization, "img_pg_history", "event_image", i);
    renderInputHistory(idCivilization, "legend_pg_history", "event_image_label", i);
    renderInputHistory(idCivilization, "desc_pg_history", "event_paragraph", i);
}

export async function renderInputHistory(idCivilization, idHTML, objectProperty, i) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/history/${idCivilization}`, "GET");
    console.log(i);
    console.log(object.history_events);
    const objectValue = object.history_events[i][objectProperty];
    console.log(objectValue);

    input.value = objectValue;
}