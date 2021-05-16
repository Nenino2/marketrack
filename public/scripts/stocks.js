const db = firebase.firestore();
const stockListDom = document.getElementById('stock-list')
const searchButtonDom = document.getElementById('search-button')
const searchInputDom = document.getElementById('search-input')
const nextButtonDom = document.getElementById('next-button')

let docLast = null;

async function searchWithOptions() {
    const textValue = searchInputDom.value;
    const optionValue = document.querySelector('input[name="target"]:checked').value;
    if (!textValue || !optionValue) return load()

    if (optionValue === 'name' || optionValue === 'isin') {
        await searchByKeyValue(optionValue, textValue)
    } else if (optionValue === 'market') {
        await searchByKeyValueInArray(optionValue, textValue)
    }
}
searchButtonDom.addEventListener('click', () => {docLast = null;searchWithOptions})

nextButtonDom.addEventListener('click', async () => {
    if (!searchInputDom.value) {
        await load()
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

async function load() {
    let stocksSnapshots;
    if (!docLast) {
        stocksSnapshots = await db.collection("STOCKS").limit(8).get();
    } else {
        stocksSnapshots = await db.collection("STOCKS").startAfter(docLast).limit(8).get();
    }
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        displayStock(doc, stock)
    })
}

async function searchByKeyValue(key, value) {
    let stocksSnapshots;
    if (!docLast) {
        stocksSnapshots = await db.collection("STOCKS").where(key, "==", value).limit(8).get();
    } else {
        stocksSnapshots = await db.collection("STOCKS").where(key, "==", value).startAfter(docLast).limit(8).get();
    }
    
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        displayStock(doc, stock)
    })
}

async function searchByKeyValueInArray(key, value) {
    let stocksSnapshots;
    if (!docLast) {
        stocksSnapshots = await db.collection("STOCKS").where(key, "array-contains", value).limit(8).get();
    } else {
        stocksSnapshots = await db.collection("STOCKS").where(key, "array-contains", value).startAfter(docLast).limit(8).get();
    }
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        displayStock(doc, stock)
    })
}


load()