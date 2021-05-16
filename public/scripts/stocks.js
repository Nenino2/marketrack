const db = firebase.firestore();
const stockListDom = document.getElementById('stock-list')
const searchButtonDom = document.getElementById('search-button')
const searchInputDom = document.getElementById('search-input')

searchButtonDom.addEventListener('click', async () => {
    const value = searchInputDom.value;
    await searchByIsin(value);
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

async function searchByIsin(isin) {
    if (!isin) return load()
    const stocksSnapshots = await db.collection("STOCKS").where("isin", "==", isin).get();
    clearStockList();
    stocksSnapshots.forEach((doc) => {
        console.log('o')
        const stock = doc.data()
        displayStock(doc, stock)
    })
}


load()