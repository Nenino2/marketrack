import {selectorIbkr, selectorIbkrPage, stocksPageUrls} from './ibkr.js';
import {scrapeHtmlDataFromUrl, downloadTextFile} from './utils.js'

async function getStocksLinks(listPageUrls) {
	const resultElements = (await Promise.all(listPageUrls.map(async url => {
		const data = await scrapeHtmlDataFromUrl(url, selectorIbkrPage, 9991, el => el && el.href ? el.href.match(/\'https\:\/\/contract\.ibkr\.info(.*?)\'/)[1] : null);
		return data;
	}))).flat();
	return resultElements;
}

async function getStocks(urlsStocksIbkr) {
	const resultElements = [];
	console.log('LINK TOTALI: ',urlsStocksIbkr.length);
	const groups = [];
	const totalGroups = Math.floor((urlsStocksIbkr.length)/5);
	console.log(totalGroups)
	for (let i = 0; i < totalGroups; i++) {
		groups.push([
			urlsStocksIbkr[i * 5 + 0],
			urlsStocksIbkr[i * 5 + 1],
			urlsStocksIbkr[i * 5 + 2],
			urlsStocksIbkr[i * 5 + 3],
			urlsStocksIbkr[i * 5 + 4],
			urlsStocksIbkr[i * 5 + 5],
			urlsStocksIbkr[i * 5 + 6],
			urlsStocksIbkr[i * 5 + 7],
			urlsStocksIbkr[i * 5 + 8],
			urlsStocksIbkr[i * 5 + 9],
		])
	}
	console.log(groups);
	for (let group of groups) {
		console.log('invio 5 richieste...');
		const redo = [];
		(await Promise.all(group.map(async url => {
			if (!url) return null;
			let data = await scrapeHtmlDataFromUrl(url, selectorIbkr, 9990);
			if (!data || !data.length) {
				redo.push(url);
			} else {
				return data;
			}
		}))).filter(el => el).forEach(result => resultElements.push(result));
		if (redo.length) {
			alert('captha');
			(await Promise.all(redo.map(async url => {
				if (!url) return null;
				let data = await scrapeHtmlDataFromUrl(url, selectorIbkr, 9990);
				if (!data || !data.length) {
					console.log('dati persi')
				} else {
					return data;
				}
			}))).filter(el => el).forEach(result => resultElements.push(result));
		}
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
			name:nameArray[1] ? nameArray[1].trim() : '',
			symbol: symbolArray[1] ?  symbolArray[1].trim() : '',
			market: exchangeArray[1] ? exchangeArray[1].split(',').map(el => el ? el.trim() : '') : [],
			country: countryArray[1] ? countryArray[1].trim() : '',
			currency: currencyArray[1] ? currencyArray[1].trim() : '',
			isin: isinArray[1] ? isinArray[1] : '',
			closingPrice: closingPriceArray[1] ? closingPriceArray[1] : ''
		};
		parsedStocks.push(currentStock)
	}
	return parsedStocks;
}

async function getStocksFromStocksPageUrls(stocksPageUrls) {
	let links, stocks, parsedStocks;
	try {
		links = await getStocksLinks(stocksPageUrls);
		stocks = await getStocks(links);
		parsedStocks = parseStocks(stocks)
	} catch(error) {
		console.log(error);
	}
	return parsedStocks;
}

async function runCode() {
	console.log('Loading....')
	const data = await getStocksFromStocksPageUrls(stocksPageUrls);
	downloadTextFile(JSON.stringify(data), 'data.json');
}

runCode();