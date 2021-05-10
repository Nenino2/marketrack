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
	const stocks = await getStocks();
	//const options = await getOptions();
	// console.log(bonds);
	// console.log(futures);
	console.log(stocks);
	//console.log(options);
}

















runCode();