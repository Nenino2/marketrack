async function getDataFromUrl (path) {
    const result = await fetch('http://localhost:8010/proxy' + path);
    const data = await result.json();
    return data;
}
  
// lcp --proxyUrl https://www.milanofinanza.it/
async function runCode() {
    const data = await getDataFromUrl('/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=1&url=future-sull-indice-0a9%3Frefresh_cens')
    console.log(data)
}
runCode()