import CreateEventStateChange from "./event-url.js";

const objPages = [
    { label: "INICIAL", handle: redirectToStart },
    { label: "HISTÓRIA", handle: redirectToHistory },
    { label: "GALERIA", handle: redirectToGallery },
];

export default function Principal() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    h1.textContent = "Whateverland";
    div.appendChild(h1);

    objPages.forEach((element) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = element.label;
        btn.onclick = element.handle; //btn.onclick = redirectToAnotherPage;
        div.appendChild(btn);
    });

    const response = {
        page: div,
        object: null,
        addEvents: function () {
            console.log("Adiciona eventos");
        },
    };
    return response;

    return;
}

/* function redirectToAnotherPage(event) {
	const path = "/" + event.target.textContent.toLowerCase();
	const eventStateChange = CriaEventStateChange(path);
	window.dispatchEvent(eventStateChange);
} */

/*--------------------------------------------*/
function redirectToStart() {
    const eventStateChange = CreateEventStateChange("/start");
    window.dispatchEvent(eventStateChange);
}

function redirectToHistory() {
    const eventStateChange = CreateEventStateChange("/history");
    window.dispatchEvent(eventStateChange);
}

function redirectToGallery() {
    const eventStateChange = CreateEventStateChange("/gallery");
    window.dispatchEvent(eventStateChange);
}
