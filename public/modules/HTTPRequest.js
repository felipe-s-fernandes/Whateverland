//@Autor {Felipe Fernandes}
export default async function HTTPRequest(url, method, body = null) {
    const HOST_PORT = window.location.host;

    const object = {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    if (body !== null) {
        body.username =
            body.username || localStorage.getItem("username") || null;
        object.body = JSON.stringify(body);
    }

    if (method === "DELETE") {
        const username = { username: localStorage.getItem("username") || null };
        object.body = JSON.stringify(username);
    }

    const response = await fetch(`http://${HOST_PORT}${url}`, object);

    const json = await response.json();
    return json.data;
}
