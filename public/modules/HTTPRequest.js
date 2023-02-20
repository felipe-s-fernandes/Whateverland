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
        object.body = JSON.stringify(body);
    }

    const response = await fetch(`http://${HOST_PORT}${url}`, object);

    const json = await response.json();
    return json.data;
}
