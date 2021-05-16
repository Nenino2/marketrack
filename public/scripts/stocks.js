const db = firebase.firestore();
const stockListDom = document.getElementById('stock-list')
const searchButtonDom = document.getElementById('search-button')
const searchInputDom = document.getElementById('search-input')

searchButtonDom.addEventListener('click', async () => {
    const textValue = searchInputDom.value;
    const optionValue = document.querySelector('input[name="target"]:checked').value;
    if (!textValue || !optionValue) return load()

    if (optionValue === 'name' || optionValue === 'isin') {
        await searchByKeyValue(optionValue, textValue)
    } else if (optionValue === 'market') {
        await searchByKeyValueInArray(optionValue, textValue)
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
}

async function load() {
    const stocksSnapshots = await db.collection("STOCKS").get();
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        displayStock(doc, stock)
    })
}

async function searchByKeyValue(key, value) {
    const stocksSnapshots = await db.collection("STOCKS").where(key, "==", value).get();
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        displayStock(doc, stock)
    })
}

async function searchByKeyValueInArray(key, value) {
    const stocksSnapshots = await db.collection("STOCKS").where(key, 'array-contains', value).get();
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        console.log('o')
        const stock = doc.data()
        displayStock(doc, stock)
    })
}


load()