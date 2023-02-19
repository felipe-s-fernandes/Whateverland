export default async function HTTPRequest(url, method, body = null) {
    const HOST_PORT = window.location.host;

    const response = await fetch(`http://${HOST_PORT}${url}`, {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: body,
    });
    const json = await response.json();
    return json.data;
}
