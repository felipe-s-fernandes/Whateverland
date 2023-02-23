import { createElement, createBackButton } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import redirectTo from "../../modules/redirect.js";

export default async function RenderLoginPage(data) {
    const loginForm = createLoginForm();
    const backButton = createBackButton();

    const container = createElement("div", "loginPage");
    container.appendChild(loginForm);
    container.appendChild(backButton);

    const response = {
        page: container,
        object: null,
        addEvents: addLogin,
    };

    return response;
}

function createLoginForm() {
    const form = createElement("div", "pg_login");
    form.innerHTML = `
    <div class="pg_login">
        <div class="login">
            <h1>Login</h1>
            <div class="container_mail">
                <label for="email">Usuário:</label>
                <input type="text" id="email" />
            </div>

            <div class="container_passwd">
                <label for="senha">Senha:</label>
                <input type="text" id="senha" />
            </div>

            <div class="container_btn">
                <button type="button" id="enter">Entrar</button>
                <button type="button" id="register">Registrar</button>
            </div>
        </div>
    `;

    return form;
}

function addLogin() {
    const loginButton = document.querySelector("#enter");

    loginButton.onclick = async () => {
        const username = document.querySelector("#email").value;
        const password = document.querySelector("#senha").value;
        const credentials = {
            username: username,
            password: password,
        };
        console.log(credentials);
        const result = await HTTPRequest("/login", "POST", credentials);
        console.log(result);
        redirectTo("/map");
    };
}
