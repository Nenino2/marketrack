"use strict"
import {selectorIbkr, selectorIbkrPage, stocksPageUrls} from './ibkr.js';
import {scrapeHtmlDataFromUrl, downloadTextFile} from './utils.js'

async function getStocksLinks(listPageUrls) {
	const resultElements = [];
	for (let url of listPageUrls) {
		const data = await scrapeHtmlDataFromUrl(url, selectorIbkrPage, 9991, el => el && el.href ? el.href.match(/\'https\:\/\/contract\.ibkr\.info(.*?)\'/)[1] : null);
		resultElements.push(data);
	}
	return resultElements.flat();
}

async function getStocks(urlsStocksIbkr) {
	const resultElements = [];
	for (let url of urlsStocksIbkr) {
		let data = await scrapeHtmlDataFromUrl(url, selectorIbkr, 9990);
		if (!data || !data.length) {
			alert('CAPTHAAAAAAA');
			data = await scrapeHtmlDataFromUrl(url, selectorIbkr, 9990);
		}
		resultElements.push(data);
	}
	return resultElements;
}

function parseStocks(stocks) {
	const check= function (array,element) {
		return array[0]===element;
	};
	const parsedStocks = [];
	for (let stock of stocks) {
		const nameArray=stock.find(element=>check(element,"Description/Name")) || [];
		const symbolArray=stock.find(element=>check(element,"Symbol")) || [];
		const exchangeArray=stock.find(element=>check(element ,"Exchange")) || [];
		const countryArray=stock.find(element=>check(element,"Country/Region")) || [];
		const currencyArray=stock.find(element=>check(element,"Currency")) || [];
		const isinArray=stock.find(element=>check(element,"ISIN")) || [];
		const closingPriceArray=stock.find(element=>check(element,"Closing Price")) || [];
		const currentStock = {
			name:nameArray[1].trim(),
			symbol: symbolArray[1].trim(),
			market: exchangeArray[1].split(',').map(el => el.trim()),
			country: countryArray[1].trim(),
			currency: currencyArray[1].trim(),
			isin: isinArray[1],
			closingPrice: closingPriceArray[1]
		};
		parsedStocks.push(currentStock)
	}
	return parsedStocks;
}

async function getStocksFromStocksPageUrls(stocksPageUrls) {
	const links = await getStocksLinks(stocksPageUrls);
	const stocks = await getStocks(links.slice(0, 5));
	const parsedStocks = parseStocks(stocks)
	return parsedStocks;
}

async function runCode() {
	console.log('Loading....')
	// AGGIUNGI LO STESSO NON SOLO PER EBS; POI METTI TUTTO IN UN UNICO OGGETTO
	const data = await getStocksFromStocksPageUrls(stocksPageUrls.EBS);
	console.log(data)
	downloadTextFile(JSON.stringify(data), 'data.json');
}

runCode();