export default async function imgRequest(url, method, formData) {
    const HOST_PORT = window.location.host;

    const object = {
        method: method,
        body: formData,
    };

    const response = await fetch(`http://${HOST_PORT}${url}`, object);

    const json = await response.json();
    return json.data;
}
