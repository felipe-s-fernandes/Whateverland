// @autor { Ed Wilson }
// Coautor { Anderson Lima }
// @Coautor { Felipe Fernades }

import { createElement } from "../../modules/modules.js";

export function renderEditStaticCivilizationAndStart() {
    const page = createElement("div", "containerInformationEdit");

    page.innerHTML = `
        
        <form id="formEditCivilizationAndStartPage" >
            <h2 id="name_civilization" class="titleEdit">Dados da civilização</h2>
            <div id="containerFormEditStartPage">
                <div class="divFormCivilizationEdit">
                    <div id="formCivilization">
                        <label class="labelEdit"  for="name_pg_start">Civilização</label>
                        <input class="InputEdit" type="text" name="nameCivilization" id="name_pg_start"  /></br>

                        <label class="labelEdit" for="titlename_pg_start">Nome da Região</label>
                        <select class="InputEdit" name="idregion" id="id_region_start"></select></br>
                    </div>

                    <div id="formCivilizationImage">
                        <label class="labelEdit" for="img_pg_start">Imagem da civilização</label>
                        
                        <div class="imgEdit">
                            <img src="" alt="Imagem não encontrada" id="imageCivilization">
                        </div>

                        <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" id="img_pg_adm" name="img_pg_adm" />

                    </div>
                </div>
                <div class="divFormStartEdit">                        
                    <label class="labelEdit" for="titlename_pg_start">Título da civilização</label>
                    <input class="InputFormEdit"  type="text" name="titulo" id="titlename_pg_start" /></br>

                    <label class="labelEdit" for="origin_pg_start">Nome Oficial</label>
                    <input class="InputFormEdit" type="text" name="originName" id="origin_pg_start" /></br>


                    <label class="labelEdit" for="titlename_pg_start">Localização</label>
                    <input class="InputFormEdit" type="text" name="nameregion" id="name_region_start" /></br>

                    <label class="labelEdit" for="cap_pg_start">Capital</label>
                    <input class="InputFormEdit" type="text" name="capital" id="cap_pg_start" /></br>

                    <label class="labelEdit" for="religion_pg_start">Religião</label>
                    <input class="InputFormEdit" type="text" name="religion" id="religion_pg_start" /></br>

                    <label class="labelEdit" for="gov_pg_start">Governo</label>
                    <input class="InputFormEdit" type="text" name="governo" id="gov_pg_start" /></br>

                    <label class="labelEdit" for="desc_pg_start">Descrição</label>
                    <textarea class="InputDesc" type="text" name="desc" id="desc_pg_start"></textarea></br>
                </div>
            </div>
            <div class="container_result">
            <button type="submit" class ="btn-edit" id="edit">Salvar alterações</button>
            <div id="resultstart"></div>
            </div>
        </form>
    `;

    return page;
}

export function renderEditStaticHistory() {
    const page = createElement("div", "containerInformationEdit");
    const defaultImage = "../../uploads/default_image_history.jpg";

    page.innerHTML = `
    <div class="formedit_H">
        
        <form id="formHistory2" class="cadastre">
        <h2 class="titleEdit">História</h2>
            <div class="formdivh2">
            <div class="divFormCivilizationEdit">
                <label class="labelEdit" for="img_pg_history">Imagem do evento:</label>
                <div class="imgEdit">
                <img class="labelEdit" src="${defaultImage}" alt="Imagem não encontrada" id="imageEvent">
                </div>
                <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgh" id="img_pg_history" /></br>

                <label class="labelEdit" for="legend_pg_history">Legenda da imagem:</label>
                <input class="InputEdit" type="text" name="legendh" id="legend_pg_history""/></br>
            </div> 
            <div class="divFormStartEdit">
                <div class="container_eventH">
                    <div class="yearevent">
                        <label class="labelEdit" for="year_pg_history">Ano do evento:</label>
                        <input class="InputFormEdit" type="text" name="yearh" id="year_pg_history" maxlength="6"/></br>
                    </div>
                    <div class="nameevent">
                        <label class="labelEdit"  for="name_pg_history">Título do evento:</label>
                        <input class="InputFormEdit" type="text" name="nameh" id="name_pg_history" /></br>
                    </div>
                </div>
                <div class="descevent">
                    <label class="labelEdit" for="desc_pg_history">Descrição do evento:</label>
                    <textarea class="InputDesc" type="text" name="desch" id="desc_pg_history"></textarea></br>
                </div>
            </div>  

            </div>
            <div class="container_result">
                <button type="submit" class ="btn-edit" id="buttonHistory">Adicionar Evento</button>
                <div id="resulthistory"></div>
            </div>
        </form>

        <table class="editTable">
            <thead>
                <tr id="table-heading">
                    <td class="e-mail">Ano do evento</td>
                    <td class="nome">Título do evento</td>
                    <td class="nome">Imagem do evento</td>
                    <td class="nome">Editar</td>
                    <td class="nome">Deletar</td>
                </tr>
            </thead>
            <tbody id="tableHistory"></tbody>
        </table>

    </div>
    `;
    return page;
}

export function renderEditStaticGallery() {
    const page = createElement("div", "containerInformationEdit");

    page.innerHTML = `
        <h2 class="titleEdit">Galeria</h2>
        <div class="formedit_H">
            <form class="cadastre" id="formGallery">
                <div class="divformgallery">
                    <div>            
                        <label class="labelEdit" for="civi_gallery">Legenda da imagem:</label>
                        <input class="InputFormEdit" type="text" id="civi_gallery" name="civi_gallery" /></br>
                    </div>  
                    <div>  
                        <label class="labelEdit" for="img_gallery">Imagem:</label>
                        <input type="file" accept="image/jpg, image/jpeg, image/png, image/bmp, image/webp" name="imgedith" id="img_gallery" name="img_gallery" /></br>
                    </div>  
                </div> 
                <div class="container_result">
                    <button class ="btn-edit" type="submit" id="include_gallery">Adicionar Imagem</button>
                    <div id="resultgallery"></div>
                </div>
            </form>
            <table class="editTable">
                <thead>
                    <tr id="table-heading">
                        <td class="id-number">Legenda</td>
                        <td class="id-number">Imagem</td>
                        <td class="e-mail">Deletar</td>
                    </tr>
                </thead>
                <tbody id="tableGallery"></tbody>
            </table>
        </div>
    `;
    return page;
}