// @autor { Ed Wilson }
// Coautor { Anderson Lima }

import { createElement } from "../../modules/modules.js";

export function renderEditStaticCivilizationAndStart() {
    const page = createElement("div", "containerEdit1");

    page.innerHTML = `
        <div class="containerEdit2">
            <form class="containerEdit7" id="formEditCivilizationAndStartPage" >
                <div class="divForm">
                    <h2 id="name_civilization" class="titleEdit">Dados da civilização</h2>

                    <label class="labelEdit" for="name_pg_start">Nome da civilização:</label>
                    <input class="InputEdit" type="text" name="nameCivilization" id="name_pg_start"  /></br></br>

                    <img class="imgEdit" src="" alt="Imagem não encontrada" id="imageCivilization">

                    <label class="labelEdit" for="img_pg_start">Imagem da civilização:</label>
                    <input class="InputEdit" type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" id="img_pg_adm" name="img_pg_adm" />
                </div>

                <div class="containerEdit6">                        
                    <h2 class="titleEdit">Página Inicial</h2>

                    <label class="labelEdit" for="titlename_pg_start">Título da civilização:</label>
                    <input class="InputEdit" type="text" name="titulo" id="titlename_pg_start" /></br>

                    <label class="labelEdit" for="origin_pg_start">Nome Oficial da civilização:</label>
                    <input class="InputEdit" type="text" name="originName" id="origin_pg_start" /></br>

                    <label class="labelEdit" for="titlename_pg_start">Id da Região:</label>
                    <select class="InputEdit" name="idregion" id="id_region_start"></select></br>

                    <label class="labelEdit" for="titlename_pg_start">Nome da Região:</label>
                    <input class="InputEdit" type="text" name="nameregion" id="name_region_start" /></br>

                    <label class="labelEdit" for="cap_pg_start">Capital da civilização:</label>
                    <input class="InputEdit" type="text" name="capital" id="cap_pg_start" /></br>

                    <label class="labelEdit" for="religion_pg_start">Religião da civilização:</label>
                    <input class="InputEdit" type="text" name="religion" id="religion_pg_start" /></br>

                    <label class="labelEdit" for="gov_pg_start">Governo da civilização:</label>
                    <input class="InputEdit" type="text" name="governo" id="gov_pg_start" /></br>

                    <label class="labelEdit" for="desc_pg_start">Descrição:</label>
                    <textarea class="InputDesc" type="text" name="desc" id="desc_pg_start"></textarea></br>
                </div>

                <button type="submit" class ="btn-edit" id="edit">Salvar alterações</button>
            </form>
            <div id="resultstart"></div>
        </div>
    `;

    return page;
}

export function renderEditStaticHistory() {
    const page = createElement("div", "containerEdit3");

    page.innerHTML = `
    <div class="containerEdit4">
        <h2 class="titleEdit">História</h2>

        <form id="formHistory2" class="cadastre">
            <label class="labelEdit" for="name_pg_history">Título do evento:</label>
            <input class="InputEdit" type="text" name="nameh" id="name_pg_history" /><br>

            <label class="labelEdit" for="year_pg_history">Ano do evento:</label>
            <input class="InputEdit" type="text" name="yearh" id="year_pg_history" />

            <label class="labelEdit" for="img_pg_history">Imagem do evento:</label>
            <img class="labelEdit" src="" alt="Imagem não encontrada" id="imageEvent">
            <input class="InputEdit" type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgh" id="img_pg_history" />

            <label class="labelEdit" for="legend_pg_history">Legenda da imagem:</label>
            <input class="InputEdit" type="text" name="legendh" id="legend_pg_history" />

            <label class="labelEdit" for="desc_pg_history">Descrição do evento:</label>
            <textarea class="InputEdit" type="text" name="desch" id="desc_pg_history"></textarea>

            <button type="submit" class ="btn-edit" id="buttonHistory">Adicionar</button>
        </form>


        <table class="editTable">
            <thead>
                <tr id="table-heading">
                    <td class="id-number">Id</td>
                    <td class="e-mail">Ano do evento</td>
                    <td class="nome">Título do evento</td>
                    <td class="nome">Imagem do evento</td>
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
        <div class="containerEdit5">
        <h2 class="titleEdit">Galeria</h2>
            <div>
                <form class="cadastre" id="formGallery">
                    <h3>Adicionar nova imagem</h3>

                    <label class="labelEdit" for="civi_gallery">Legenda da imagem:</label>
                    <input type="text" id="civi_gallery" name="civi_gallery" />

                    <label class="labelEdit" for="img_gallery">Imagem:</label>
                    <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgedith" id="img_gallery" name="img_gallery" />

                    <button class ="btn-edit" type="submit" id="include_gallery">Adicionar Imagem</button>
                </form>
            </div>
            <table class="editTable">
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

// export const inputsAddHistory = `
// <form id="formHistory" class="containerEdit">
//     <label class="labelEdit" for="name_pg_history">Título do evento:</label>
//     <input class="InputEdit" type="text" name="nameh" id="name_pg_history" />

//     <label class="labelEdit" for="year_pg_history">Ano do evento:</label>
//     <input class="InputEdit" type="text" name="yearh" id="year_pg_history" />

//     <label class="labelEdit" for="img_pg_history">Imagem do evento:</label>
//     <input class="InputEdit" type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgedith" name="imgh" id="img_pg_history" />

//     <label class="labelEdit" for="legend_pg_history">Legenda da imagem:</label>
//     <input class="InputEdit" type="text" name="legendh" id="legend_pg_history" />

//     <label class="labelEdit" for="desc_pg_history">Descrição do evento:</label>
//     <textarea class="InputEdit" type="text" name="desch" id="desc_pg_history"></textarea>

//     <button type="submit" class ="btn-edit" id="include_hist">Incluir evento</button>
//     <button type="button" class ="btn-edit" id="cancel_add_hist">Cancelar</button>
// </form>
// `;

// export const inputsEditHistory = `
// <form class="containerEdit" id="formEditHistory">
//     <label for="name_pg_history">Título do evento:</label>
//     <input type="text" name="nameedith" id="name_pg_history" />

//     <label for="year_pg_history">Ano do evento:</label>
//     <input type="text" name="yearedith" id="year_pg_history" />

//     <label for="img_pg_history">Imagem do evento:</label>
//     <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgedith" id="img_pg_history" />

//     <label for="legend_pg_history">Legenda da imagem:</label>
//     <input type="text" name="legendedith" id="legend_pg_history" />

//     <label for="desc_pg_history">Descrição do evento:</label>
//     <textarea type="text" name="descedith" id="desc_pg_history"></textarea>

//     <button type="submit" class ="style_btn" id="edit_hist">Editar evento</button>
//     <button type="button" class ="style_btn" id="cancel_edit_hist">Cancelar alterações</button>
// </form>
// `;

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
