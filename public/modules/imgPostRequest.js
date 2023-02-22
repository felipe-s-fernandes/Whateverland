export default async function imgPatchRequest(url, formData) {
    const HOST_PORT = window.location.host;

    const object = {
        method: "PATCH",
        body: formData,
    };

    const response = await fetch(`http://${HOST_PORT}${url}`, object);

    const json = await response.json();
    return json.data;
}
