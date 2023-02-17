//@Autor {Felipe Fernandes}
export default function CreateEventStateChange(urlParameter, data) {
    const eventStateChange = new CustomEvent("onstatechange", {
        detail: { url: urlParameter, data: data },
    });

    return eventStateChange;
}
