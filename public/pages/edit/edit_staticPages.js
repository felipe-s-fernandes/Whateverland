import { createElement } from "../../modules/modules.js";

// const startEditTable = createStartEditTable(civilizationId)
// const historyEditTable = createHistoryEditTable(civilizationId)
// const galleryEditTable = createGalleryEditTable(civilizationId)

export function renderEditStaticStartTitle() {
    const page = createElement("div", "page");

    page.innerHTML = 
    `
        <div class="boxBigCard">
            <h2 id="name_civilization">Dados da civilização</h2>
            <label for="name_pg_start">Nome da civilização:</label>
            <input type="text" name="nome" id="name_pg_start" />
            <img id="img_pg_adm" src="img.png" alt="Civilization logo"/>
        </div>
    `;

    return page;
}

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
                        <img id="img_pg_adm" src="img.png" alt="Civilization logo"/>
                    </div>

                    <div>                        
                        <h2>Página Inicial</h2>

                        <label for="img_pg_start">Imagem da civilização:</label>
                        <input type="text" name="logo" id="img_pg_start" />

                        <label for="titlename_pg_start">Título da civilização:</label>
                        <input type="text" name="titulo" id="titlename_pg_start" />

                        <label for="origin_pg_start">Nome Oficial da civilização:</label>
                        <input type="text" name="originName" id="origin_pg_start" />

                        <label for="titlename_pg_start">Id da Região:</label>
                        <input type="text" name="idregion" id="id_region_start" />

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
            </div>
    `;

    return page;
}

export function renderEditStaticHistory() {
    const page = createElement("div", "page");

    page.innerHTML = 
    `
    <div class="boxBigCard">
        <h2>História</h2>
        <button type="submit" class ="style_btn" id="addHistory">Adicionar Evento</button>
        <div class="boxBigCard" id="divHistory">
        </div>
        <div id="tableHistory"></div>
    </div>

    `;

    return page;
}

export function renderEditStaticGallery() {
    const page = createElement("div", "page");

    page.innerHTML = 
    `
        <div class="boxBigCard">
        <h2>Galeria</h2>
            <div class="boxBigCard">
                <form class="cadastre">
                    <h3>Adicionar nova imagem</h3>

                    <label for="civi_gallery">Legenda da imagem:</label>
                    <input type="text" id="civi_gallery" />

                    <label for="img_gallery">Imagem:</label>
                    <input type="text" id="img_gallery" />

                    <button type="submit" id="include_gallery">Adicionar Imagem</button>
                    <button type="button" id="cancel_gallery">Cancelar</button>
                </form>
            </div>

            <table id="tableGallery"></table>
        </div>
    `;

    return page;
}