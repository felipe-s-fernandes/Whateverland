// @autor { Ed Wilson }
// Coautor { Anderson Lima }

import { createElement } from "../../modules/modules.js";

export function renderEditStaticCivilizationAndStart() {
    const page = createElement("div", "page");

    page.innerHTML = 
    `
        <div class="boxBigCard">
            <form class="cadastre" id="formEditCivilizationAndStartPage">
                <div>
                    <h2 id="name_civilization">Dados da civilização</h2>

                    <label for="name_pg_start">Nome da civilização:</label>
                    <input type="text" name="nameCivilization" id="name_pg_start" />

                    <img src="" alt="Imagem não encontrada" id="imageCivilization">

                    <label for="img_pg_start">Imagem da civilização:</label>
                    <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgedith" id="img_pg_adm" name="img_pg_adm" />
                </div>

                <div>                        
                    <h2>Página Inicial</h2>

                    <label for="titlename_pg_start">Título da civilização:</label>
                    <input type="text" name="titulo" id="titlename_pg_start" />

                    <label for="origin_pg_start">Nome Oficial da civilização:</label>
                    <input type="text" name="originName" id="origin_pg_start" />

                    <label for="titlename_pg_start">Id da Região:</label>
                    <select name="idregion" id="id_region_start"></select>

                    <label for="titlename_pg_start">Nome da Região:</label>
                    <input type="text" name="nameregion" id="name_region_start" />

                    <label for="cap_pg_start">Capital da civilização:</label>
                    <input type="text" name="capital" id="cap_pg_start" />

                    <label for="religion_pg_start">Religião da civilização:</label>
                    <input type="text" name="religion" id="religion_pg_start" />

                    <label for="gov_pg_start">Governo da civilização:</label>
                    <input type="text" name="governo" id="gov_pg_start" />

                    <label for="desc_pg_start">Descrição:</label>
                    <textarea type="text" name="desc" id="desc_pg_start"></textarea>
                </div>

                <button type="submit" class ="style_btn" id="edit">Salvar alterações</button>
            </form>
            <div id="resultstart"></div>
        </div>
    `;

    return page;
}

export function renderEditStaticHistory() {
    const page = createElement("div", "page");

    page.innerHTML = `
    <div class="boxBigCard">
        <h2>História</h2>
        <button type="submit" class ="style_btn" id="addHistory">Adicionar Evento</button>
        <div id="divHistory"></div>


        <form id="formHistory2" class="cadastre">
            <label for="name_pg_history">Título do evento:</label>
            <input type="text" name="nameh" id="name_pg_history" />

            <label for="year_pg_history">Ano do evento:</label>
            <input type="text" name="yearh" id="year_pg_history" />

            <label for="img_pg_history">Imagem do evento:</label>
            <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgh" id="img_pg_history" />

            <label for="legend_pg_history">Legenda da imagem:</label>
            <input type="text" name="legendh" id="legend_pg_history" />

            <label for="desc_pg_history">Descrição do evento:</label>
            <textarea type="text" name="desch" id="desc_pg_history"></textarea>

            <button type="submit" class ="style_btn" id="buttonHistory">Adicionar</button>
        </form>


        <table>
            <thead>
                <tr id="table-heading">
                    <td class="id-number">Id</td>
                    <td class="e-mail">Ano do evento</td>
                    <td class="nome">Título do evento</td>
                    <td class="nome">Editar</td>
                    <td class="nome">Deletar</td>
                </tr>
            </thead>
            <tbody id="tableHistory"></tbody>
        </table>
        <div id="resulthistory"></div>
    </div>
    `;

    return page;
}

export function renderEditStaticGallery() {
    const page = createElement("div", "page");

    page.innerHTML = `
        <div class="boxBigCard">
        <h2>Galeria</h2>
            <div>
                <form class="cadastre" id="formGallery">
                    <h3>Adicionar nova imagem</h3>

                    <label for="civi_gallery">Legenda da imagem:</label>
                    <input type="text" id="civi_gallery" name="civi_gallery" />

                    <label for="img_gallery">Imagem:</label>
                    <input type="file"  accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgedith" id="img_gallery" name="img_gallery" />

                    <button type="submit" id="include_gallery">Adicionar Imagem</button>
                </form>
            </div>
            <table>
                <thead>
                    <tr id="table-heading">
                        <td class="id-number">Legenda</td>
                        <td class="id-number">Unique ID</td>
                        <td class="e-mail">Deletar</td>
                    </tr>
                </thead>
                <tbody id="tableGallery"></tbody>
            </table>
            <div id="resultgallery"></div>
        </div>
    `;

    return page;
}

export const inputsAddHistory = `
<form id="formHistory" class="cadastre">
    <label for="name_pg_history">Título do evento:</label>
    <input type="text" name="nameh" id="name_pg_history" />

    <label for="year_pg_history">Ano do evento:</label>
    <input type="text" name="yearh" id="year_pg_history" />

    <label for="img_pg_history">Imagem do evento:</label>
    <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgedith" name="imgh" id="img_pg_history" />

    <label for="legend_pg_history">Legenda da imagem:</label>
    <input type="text" name="legendh" id="legend_pg_history" />

    <label for="desc_pg_history">Descrição do evento:</label>
    <textarea type="text" name="desch" id="desc_pg_history"></textarea>

    <button type="submit" class ="style_btn" id="include_hist">Incluir evento</button>
    <button type="button" class ="style_btn" id="cancel_add_hist">Cancelar</button>
</form>
`;


export const inputsEditHistory = `
<form class="cadastre" id="formEditHistory">
    <label for="name_pg_history">Título do evento:</label>
    <input type="text" name="nameedith" id="name_pg_history" />

    <label for="year_pg_history">Ano do evento:</label>
    <input type="text" name="yearedith" id="year_pg_history" />

    <label for="img_pg_history">Imagem do evento:</label>
    <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgedith" id="img_pg_history" />

    <label for="legend_pg_history">Legenda da imagem:</label>
    <input type="text" name="legendedith" id="legend_pg_history" />

    <label for="desc_pg_history">Descrição do evento:</label>
    <textarea type="text" name="descedith" id="desc_pg_history"></textarea>

    <button type="submit" class ="style_btn" id="edit_hist">Editar evento</button>
    <button type="button" class ="style_btn" id="cancel_edit_hist">Cancelar alterações</button>
</form>
`;

// export function inputsHistory(idHTML, buttonName) {
//     const pageContent =`
//         <form class="cadastre" id="formEditHistory">
//             <label for="name_pg_history">Título do evento:</label>
//             <input type="text" name="nameedith" id="name_pg_history" />

//             <label for="year_pg_history">Ano do evento:</label>
//             <input type="text" name="yearedith" id="year_pg_history" />

//             <label for="img_pg_history">Imagem do evento:</label>
//             <input type="file" name="imgedith" id="img_pg_history" />

//             <label for="legend_pg_history">Legenda da imagem:</label>
//             <input type="text" name="legendedith" id="legend_pg_history" />

//             <label for="desc_pg_history">Descrição do evento:</label>
//             <textarea type="text" name="descedith" id="desc_pg_history"></textarea>

//             <button type="submit" class ="style_btn" id="${idHTML}">${buttonName}</button>
//             <button type="button" class ="style_btn" id="cancel_edit_hist">Cancelar alterações</button>
//         </form>
//     `;
//     return pageContent;        
// }