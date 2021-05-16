const db = firebase.firestore();
const stockListDom = document.getElementById('stock-list')
const searchButtonDom = document.getElementById('search-button')
const searchInputDom = document.getElementById('search-input')
const minPriceInputDom = document.getElementById('min-price-input')
const maxPriceInputDom = document.getElementById('max-price-input')
const nextButtonDom = document.getElementById('next-button')

let docLast = null;

async function searchWithOptions() {
    const textValue = searchInputDom.value;
    const minPrice = minPriceInputDom.value;
    const maxPrice = maxPriceInputDom.value;
    const optionValue = document.querySelector('input[name="target"]:checked').value;
    if (!textValue || !optionValue) return load({minPrice, maxPrice })

    if (optionValue === 'name' || optionValue === 'isin') {
        await searchByKeyValue(optionValue, textValue, {minPrice, maxPrice})
    } else if (optionValue === 'market') {
        await searchByKeyValueInArray(optionValue, textValue, {minPrice, maxPrice})
    }
}
searchButtonDom.addEventListener('click', () => {docLast = null;searchWithOptions()})

nextButtonDom.addEventListener('click', async () => {
    if (!searchInputDom.value) {
        await load({minPrice: minPriceInputDom.value, maxPrice: maxPriceInputDom.value })
    } else {
        await searchWithOptions();
    }
})

function clearStockList() {
    stockListDom.innerHTML = ''
}

function displayStock(doc, stock) {
    stockListDom.insertAdjacentHTML('beforeend', `
        <a href="single.html?id=${doc.id}">      
            <div class="list__element">
                <div>${stock.name}</div>
                <div>${stock.symbol}</div>
                <div>${stock.market.join(',')}</div>
                <div>${stock.currency}</div>
                <div>${stock.isin}</div>
                <div>${stock.closingPrice}</div>
                </div>
            </a>
    `)
    docLast = doc;
}

async function load(filters = {}) {
    let stocksSnapshots = db.collection("STOCKS").orderBy('closingPrice');
    if (docLast) {
        stocksSnapshots = stocksSnapshots.startAfter(docLast)
    } else {
        if (filters.minPrice) {
            console.log('ok')
            stocksSnapshots = stocksSnapshots.startAt(parseFloat(filters.minPrice))
        }
        if (filters.maxPrice) {
            stocksSnapshots = stocksSnapshots.endAt(parseFloat(filters.maxPrice))
        }
    }
    stocksSnapshots = await stocksSnapshots.limit(8).get()
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        displayStock(doc, stock)
    })
}

async function searchByKeyValue(key, value, filters = {}) {
    let stocksSnapshots = db.collection("STOCKS").where(key, "==", value).orderBy('closingPrice');
    if (docLast) {
        stocksSnapshots = stocksSnapshots.startAfter(docLast)
    } else {
        if (filters.minPrice) {
            stocksSnapshots = stocksSnapshots.startAt(filters.minPrice)
        }
        if (filters.maxPrice) {
            stocksSnapshots = stocksSnapshots.endAt(filters.maxPrice)
        }
    }
    stocksSnapshots = await stocksSnapshots.limit(8).get()
    
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        displayStock(doc, stock)
    })
}

async function searchByKeyValueInArray(key, value, filters) {
    let stocksSnapshots = db.collection("STOCKS").where(key, 'array-contains', value).orderBy('closingPrice');
    if (docLast) {
        stocksSnapshots = stocksSnapshots.startAfter(docLast)
    } else {
        if (filters.minPrice) {
            stocksSnapshots = stocksSnapshots.startAt(filters.minPrice)
        }
        if (filters.maxPrice) {
            stocksSnapshots = stocksSnapshots.endAt(filters.maxPrice)
        }
    }
    stocksSnapshots = await stocksSnapshots.limit(8).get()
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        displayStock(doc, stock)
    })
}


load()