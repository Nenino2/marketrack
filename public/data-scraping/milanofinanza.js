async function getDataFromUrl (path) {
    const result = await fetch('http://localhost:8010/proxy' + path);
    const data = await result.json();
    return data;
}
  
// lcp --proxyUrl https://www.milanofinanza.it/
async function runCode() {
    const getOptionsLink= [
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

let initialArray=[];
const finalArray=[];

const CreateLink= function (url) {
    const urlPrefix ="/Mercati/GetQuotazioni?codice=1a90057";
    let id=url.replace(/.*-/, "");
    const Link=urlPrefix + id;
    return Link;
}

for (let link of links) {
    const object = await getDataFromUrl(link);
    const data=object.Data;
    for (let i=0;i<30;i++) {
        initialArray=data[i];
        const object1=initialArray[0];
        const cod=object1.UrlStock;
        const finalLink=CreateLink (cod);
        finalArray.push(finalLink);
    }
}
console.log(finalArray);
}
runCode()