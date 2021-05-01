// lcp --proxyUrl https://www.milanofinanza.it/

export async function getOptionLinksMilanoFinanza() {
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

    let initialArray=[];
    const finalArray=[];

    const createLink= function (url) {
        const urlPrefix ="/Mercati/GetQuotazioni?codice=1a90057";
        let id=url.replace(/.*-/, "");
        const link=urlPrefix + id;
        return link;
    }

    for (let link of links) {
        const object = await getDataFromUrl(link);
        const data=object.Data;
        for (let i=0;i<30;i++) {
            initialArray=data[i];
            const object1=initialArray[0];
            const cod=object1.UrlStock;
            const finalLink=createLink(cod);
            finalArray.push(finalLink);
        }
    }
    return finalArray;
}