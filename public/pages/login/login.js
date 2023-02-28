import {
    createElement,
    createBackButton,
    toggleButton,
} from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import redirectTo from "../../modules/redirect.js";

export default async function RenderLoginPage(data) {
    const loginForm = createLoginForm();
    const backButton = createBackButton();

    const container = createElement("div", "container");
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
        <div class="containerInformation" id="login">
            <h1 class="TitleLogin">LOGIN</h1>
            <div class="container_mail">
                <input type="text" id="email" class="mainInput" placeholder="usuário"/>
            </div>

            <div class="container_passwd">
                <input type="password" id="senha" class="mainInput" placeHolder="senha" />
            </div>

            <div class="container_btn">
                <button type="button" id="enter">ENTRAR</button>
            </div>
        </div>
    `;

    return form;
}

function addLogin() {
    const loginButton = document.querySelector("#enter");
    const usernameInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#senha");

    loginButton.onclick = async () => {
        toggleButton(loginButton);
        const username = document.querySelector("#email").value;
        const password = document.querySelector("#senha").value;
        const credentials = {
            username: username,
            password: password,
        };

        const result = await HTTPRequest("/login", "POST", credentials);
        console.log(result);

        if (result.status === true) {
            localStorage.setItem("username", result.username);
            redirectTo("/map");
        } else {
            alert("Informações incorretas!");
            toggleButton(loginButton);
        }
    };

    usernameInput.addEventListener("keyup", (event) => {
        const keyCode = event.keyCode;
        if (keyCode === 13) {
            loginButton.click();
        }
    });

    passwordInput.addEventListener("keyup", (event) => {
        const keyCode = event.keyCode;
        if (keyCode === 13) {
            loginButton.click();
        }
    });
}
