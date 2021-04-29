async function getDataFromUrl (path) {
    const result = await fetch('http://localhost:8010/proxy' + path);
    const data = await result.json();
    return data;
}
  
// lcp --proxyUrl /
async function runCode() {
    const links= [
        //CALL FTSE
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=1&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=2&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=3&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=4&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=5&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=6&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=7&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=8&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=9&url=opzioni-call-mib-1a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=10&url=opzioni-call-mib-1a9%3Frefresh_cens",
        //PUT FTSE
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=1&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=2&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=3&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=4&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=5&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=6&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=7&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=8&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=9&url=opzioni-put-mib-2a9%3Frefresh_cens",
        "/Mercati/GetDataTabelle?alias=&campoOrdinamento=0002&numElem=30&ordinamento=asc&page=10&url=opzioni-put-mib-2a9%3Frefresh_cens",
]
for (let link of links) {
    const data = await getDataFromUrl(link)
}
    console.log(data)
}
runCode()