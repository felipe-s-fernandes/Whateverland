//author {Jônatas Gomes}
export async function fetchMainPageObject() {
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = "8080"; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend
    const response = await fetch(`http://${HOST}:${PORT}/pages/1`);
    const json = await response.json();
    return json.data;
}