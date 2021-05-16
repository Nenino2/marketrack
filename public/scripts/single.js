const db = firebase.firestore();
const stockSingle = document.getElementById('stock-single')

function getStockCurrentId() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id;
}

async function load() {
    const documentId = getStockCurrentId();
    const stockSnapshot = await db.collection("STOCKS").doc(documentId).get()
    const stock = stockSnapshot.data()
    stockSingle.insertAdjacentHTML('beforeend', `
        <div class="row">
            <div class="col-header">NAME</div>
            <div class="col-content">${stock['name']}</div>
        </div>
        <div class="row">
            <div class="col-header">SYMBOL</div>
            <div class="col-content">${stock['symbol']}</div>
        </div>
        <div class="row">
            <div class="col-header">MARKET</div>
            <div class="col-content">${
                stock['market'].map(el => {
                    return `<a href="/market.html?name=${el}" style="color: blue">${el}</a>`
                }).join(',')
            }</div>
        </div>
        <div class="row">
            <div class="col-header">COUNTRY</div>
            <div class="col-content">${stock['country']}</div>
        </div>
        <div class="row">
            <div class="col-header">CURRENCY</div>
            <div class="col-content">${stock['currency']}</div>
        </div>
        <div class="row">
            <div class="col-header">ISIN</div>
            <div class="col-content">${stock['isin']}</div>
        </div>
        <div class="row">
            <div class="col-header">CLOSING PRICE</div>
            <div class="col-content">${stock['closingPrice']}</div>
        </div>
    `)
}

load()