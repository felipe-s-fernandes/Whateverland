import { createElement } from "../../modules/modules";

export function renderEditStaticPage() {
    const page = createElement("div", "page");

    page.innerHTML = `
        <div class="boxBigCard">
            <div class="container">
                <h2>FORMULÁRIO DE CADASTRO DE CIVILIZAÇÕES</h2>
                <p>Para inserir civilizações na lista, preencha os dados abaixo:</p>
            </div>
            <form id="form" class="input-box">
                <input type="text" name="nome" id="nome-input" class="input-field" placeholder="Nome" autocomplete="off">
                <select name="regions" id="regions">
                    <option value=""></option>
                </select>
                <input type="submit" value="Cadastrar" id="cadastrar">
            </form>
            <section id="section-lista">
                <div class="container">
                    <h2>LISTA DE CIVILIZAÇÕES CADASTRADAS POR REGIÃO</h2>
                    <p>Abaixo, você pode ver as civilizações registradas, podendo editá-las ou removê-las.</p>
                </div>
                <table></table>
            </section>
        </div>
    `;

    return page;
}