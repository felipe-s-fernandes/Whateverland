// @Autor { Felipe Fernandes }

export default async function imgRequest(url, method, formData) {
    const HOST_PORT = window.location.host;

    const username = localStorage.getItem("username") || null;
    formData.append("username", username);

    const object = {
        method: method,
        body: formData,
    };

    const response = await fetch(`http://${HOST_PORT}${url}`, object);

    const json = await response.json();
    return json.data;
}
