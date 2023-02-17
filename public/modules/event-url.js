//@Autor {Felipe Fernandes}
export default function CreateEventStateChange(urlParameter) {
    const eventStateChange = new CustomEvent("onstatechange", {
        detail: { url: urlParameter },
    });

    return eventStateChange;
}
