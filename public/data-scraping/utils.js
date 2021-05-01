export async function scrapeHtmlDataFromUrl (path, selector) {
    const result = await fetch('http://localhost:8010/proxy' + path);
    const html = await result.text();
    const parser = new DOMParser ();
    const page = parser.parseFromString(html, "text/html");
    const elements = Array.from(page.querySelectorAll(selector)).map(el => [el.innerText.trim(), el.nextElementSibling ? el.nextElementSibling.innerText.trim() : null])
    return elements
}
  
export async function getJsonDataFromUrl (path) {
    const result = await fetch('http://localhost:8010/proxy' + path);
    const data = await result.json();
    return data;
}