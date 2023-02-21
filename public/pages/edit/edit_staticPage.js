import { createElement } from "../../modules/modules.js";

// const startEditTable = createStartEditTable(civilizationId)
// const historyEditTable = createHistoryEditTable(civilizationId)
// const galleryEditTable = createGalleryEditTable(civilizationId)

export function renderEditStaticStartTitle() {
    const page = createElement("div", "page");

    page.innerHTML = 
    `
            <div class="title_pg_adm">
                <h2 id="name_civilization">Nome Provisório</h2>
                <img id="img_pg_adm" src="img.png" alt="Civilization logo"/>
            </div>
    `;

    return page;
}

export function renderEditStaticStart() {
    const page = createElement("div", "page");

    page.innerHTML = 
    `
            <div class="boxBigCard">
                <form class="cadastre">
                    <h2>Página Inicial</h2>

                    <label for="img_pg_start">Imagem da civilização:</label>
                    <input type="text" id="img_pg_start" />

                    <label for="name_pg_start">Nome da civilização:</label>
                    <input type="text" id="name_pg_start" />

                    <label for="origin_pg_start">Nome Oficial da civilização:</label>
                    <input type="text" id="origin_pg_start" />

                    <label for="cap_pg_start">Capital da civilização:</label>
                    <input type="text" id="cap_pg_start" />

                    <label for="religion_pg_start">Religião da civilização:</label>
                    <input type="text" id="religion_pg_start" />

                    <label for="gov_pg_start">Governo da civilização:</label>
                    <input type="text" id="gov_pg_start" />

                    <label for="desc_pg_start">Descrição:</label>
                    <textarea type="text" id="desc_pg_start"></textarea>

                    <button type="button" class ="style_btn" id="include">Incluir civilização</button>
                    <button type="button" class ="style_btn" id="edit">Editar civilização</button>
                    <button type="button" class ="style_btn" id="delete">Deletar civilização</button>
                    <button type="button" class ="style_btn" id="clean">Limpar alterações</button>

                </form>
            </div>
    `;

    return page;
}

export function renderEditStaticHistory() {
    const page = createElement("div", "page");

    page.innerHTML = 
    `
            <div class="boxBigCard">
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

                    <button type="button" class ="style_btn" id="include_hist">Incluir evento</button>
                    <button type="button" class ="style_btn" id="edit_hist">Editar evento</button>
                    <button type="button" class ="style_btn" id="delete_hist">Deletar evento</button>
                    <button type="button" class ="style_btn" id="clean_hist">Limpar alterações</button>
                </form>
            </div>
    `;

    return page;
}

export function renderEditStaticGallery() {
    const page = createElement("div", "page");

    page.innerHTML = 
    `
            <div class="boxBigCard">
                <form class="cadastre">
                    <h2>Galeria</h2>

                    <label for="civi_gallery">Civilização que pertence:</label>
                    <input type="text" id="civi_gallery" />

                    <label for="img_gallery">Imagem:</label>
                    <input type="text" id="img_gallery" />

                    <button type="button" class ="style_btn" id="include_gallery"> + </button>
                    <button type="button" class ="style_btn" id="delete_gallery">Deletar imagem</button>
                    <button type="button" class ="style_btn" id="clean_gallery">Limpar alterações</button>
                </form>
            </div>
    `;

    return page;
}