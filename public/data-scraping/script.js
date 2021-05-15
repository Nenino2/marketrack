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

	const stocks = await getStocks();
	const parsedStocks = [];
	for (let stock of stocks) {
		const nameArray=stock.find(element=>check(element,"Description/Name")) || [];
		const symbolArray=stock.find(element=>check(element,"Symbol")) || [];
		const exchangeArray=stock.find(element=>check(element ,"Exchange")) || [];
		const typeArray=stock.find(element=>check(element,"Contract Type")) || [];
		const countryArray=stock.find(element=>check(element,"Country/Region")) || [];
		const currencyArray=stock.find(element=>check(element,"Currency")) || [];
		const isinArray=stock.find(element=>check(element,"ISIN")) || [];
		const websiteArray=stock.find(element=>check(element,"Exchange Website")) || [];
		const hoursArray=stock.find(element=>check(element,"Liquid Trading Hours")) || [];
		const currentStock = {
			name:nameArray[1],
			symbol: symbolArray[1],
			exchange: exchangeArray[1],
			type: typeArray[1],
			country: countryArray[1],
			currency: currencyArray[1],
			isin: isinArray[1],
			website: websiteArray[1],
			hours: hoursArray[1],
		};
		parsedStocks.push(currentStock)
	}
	console.log(parsedStocks);
	const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(parsedStocks));
	console.log(dataStr)
	
	//const options = await getOptions();
	// console.log(bonds);
	// console.log(futures);
	//console.log(stocks);
	//console.log(options);

	// "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify());
	// Array.from(document.querySelectorAll('#exchange-products > div > div > div.col-xs-12.col-sm-12.col-md-9.col-lg-9 > div > div > div > table > tbody > tr > td:nth-child(2) > a')).map(el => el.href.match(/\'(.*?)\'/)[1])
	// "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(Array.from(document.querySelectorAll('#exchange-products > div > div > div.col-xs-12.col-sm-12.col-md-9.col-lg-9 > div > div > div > table > tbody > tr > td:nth-child(2) > a')).map(el => el.href.match(/\'(.*?)\'/)[1])));
}

runCode();