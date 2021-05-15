export async function scrapeHtmlDataFromUrl (path, selector, port, mapUtil = el => [el.innerText.trim(), el.nextElementSibling ? el.nextElementSibling.innerText.trim() : null]) {
    const result = await fetch(`http://localhost:${port}/proxy` + path);
    const html = await result.text();
    const parser = new DOMParser ();
    const page = parser.parseFromString(html, "text/html");
    const elements = Array.from(page.querySelectorAll(selector)).map(mapUtil)
    return elements;
}
  
export async function getJsonDataFromUrl (path, port) {
    const result = await fetch(`http://localhost:${port}/proxy` + path);
    const data = await result.json();
    return data;
}

export function downloadTextFile(text, name) {
    const a = document.createElement('a');
    const type = name.split(".").pop();
    a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
    a.download = name;
    a.click();
}
