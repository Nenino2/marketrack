"use strict"
import {selectorIbkr, selectorIbkrPage, stocksPageUrls} from './ibkr.js';
import {scrapeHtmlDataFromUrl} from './utils.js'

async function getStocksLinks(listPageUrls) {
	const resultElements = [];
	for (let url of listPageUrls) {
		const data = await scrapeHtmlDataFromUrl(url, selectorIbkrPage, 9991, el => el && el.href ? el.href.match(/\'https\:\/\/contract\.ibkr\.info(.*?)\'/)[1] : null);
		resultElements.push(data);
	}
	return resultElements;
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
		const typeArray=stock.find(element=>check(element,"Contract Type")) || [];
		const countryArray=stock.find(element=>check(element,"Country/Region")) || [];
		const currencyArray=stock.find(element=>check(element,"Currency")) || [];
		const isinArray=stock.find(element=>check(element,"ISIN")) || [];
		const websiteArray=stock.find(element=>check(element,"Exchange Website")) || [];
		const hoursArray=stock.find(element=>check(element,"Liquid Trading Hours")) || [];
		const closingPriceArray=stock.find(element=>check(element,"Closing Price")) || [];
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
			closingPrice: closingPriceArray[1]
		};
		parsedStocks.push(currentStock)
	}
	return parsedStocks;
}

async function runCode() {
	console.log('Loading....')
	const links = await getStocksLinks(stocksPageUrls.EBS)
	const stocks = await getStocks(links.splice(0,2));
	const parsedStocks = parseStocks(stocks)
	console.log(parsedStocks)
}

runCode();