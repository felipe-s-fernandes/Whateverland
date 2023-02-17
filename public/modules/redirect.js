import CreateEventStateChange from "./event-url.js";

export default function redirectTo(url, data = null) {
    const eventStateChange = CreateEventStateChange(url, data);
    window.dispatchEvent(eventStateChange);
}
