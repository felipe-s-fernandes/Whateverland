//@Autor {Felipe Fernandes}
export default function checkCookie(cookieName) {
    const cookies = document.cookie.split(";"); // split all cookies into an array
    for (var i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // remove whitespace
        if (cookie.startsWith(cookieName + "=")) {
            return true; // found the cookie
        }
    }
    return false; // cookie not found
}
