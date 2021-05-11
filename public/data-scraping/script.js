"use strict"
import {selectorBorsaItaliana, urlsBondsBorsaItaliana} from './borsaitaliana.js';
import {selectorIbkr, urlsFuturesIbkr, urlsStocksIbkr} from './ibkr.js';
import {getOptionLinksMilanoFinanza} from './milanofinanza.js';
import {getJsonDataFromUrl, scrapeHtmlDataFromUrl} from './utils.js'

async function getBonds() {
  const resultElements = [];
  for (let url of urlsBondsBorsaItaliana) {
    const data = await scrapeHtmlDataFromUrl(url, selectorBorsaItaliana);
    resultElements.push(data);
  }
  return resultElements;
}

async function getFutures() {
  const resultElements = [];
  for (let url of urlsFuturesIbkr) {
    const data = await scrapeHtmlDataFromUrl(url, selectorIbkr);
    resultElements.push(data);
  }
  return resultElements;
}

async function getStocks() {
  const resultElements = [];
  for (let url of urlsStocksIbkr) {
    const data = await scrapeHtmlDataFromUrl(url, selectorIbkr);
    resultElements.push(data);
  }
  return resultElements;
}

async function getOptions() {
	const urlOptionsMilanoFinanza = await getOptionLinksMilanoFinanza();
	const resultElements = [];
	for (let url of urlOptionsMilanoFinanza) {
		const data = await getJsonDataFromUrl(url);
		resultElements.push(data);
	}
	return resultElements;
}

/**
 * Questa funzione farà un webscraping e prenderà tutte le informazioni di cui abbiamo bisogno
 * Dato che stiamo prendendo i dati da 3 siti diversi, bisogna usare un proxy alla volta, 
 * quindi commentare le funzioni degli altri siti che non stiamo usando
 */
async function runCode() {
	console.log('Loading....')
	// const bonds = await getBonds();
	// const futures = await getFutures();
  const check= function (array,element) {
    return array[0]===element;
  };
  let object={};
  let arrayOfObjects=[];
  
	const stocks = await getStocks();
  for (let stock of stocks) 
  {
    let i=0;
    for (let element of stock) 
    {
      let name=stock.find(element=>check(element,"Description/Name"));
      let symbol=stock.find(element=>check(element,"Symbol"));
      let exchange=stock.find(element=>check(element ,"Exchange"));
      let type=stock.find(element=>check(element,"Contract Type"));
      let country=stock.find(element=>check(element,"Country/Region"));
      let currency=stock.find(element=>check(element,"Currency"));
      let isin=stock.find(element=>check(element,"ISIN"));
      let website=stock.find(element=>check(element,"Exchange Website"));
      let hours=stock.find(element=>check(element,"Liquid Trading Hours"));
      object = {
        name:name[1],
        symbol: symbol[1],
        exchange: exchange[1],
        type: type[1],
        country: country[1],
        currency: currency[1],
        isin: isin[1],
        website: website[1],
        hours: hours[1],
      };
    }
    object=arrayOfObjects[i];
    i++;
    console.log(arrayOfObjects);
  }
  



	//const options = await getOptions();
	// console.log(bonds);
	// console.log(futures);

	//console.log(stocks);
	//console.log(options);
}

















runCode();