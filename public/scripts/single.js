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
    Object.keys(stock).forEach(key => {
        stockSingle.insertAdjacentHTML('beforeend', `
            <div class="row">
                <div class="col-header">${key.toUpperCase()}</div>
                <div class="col-content">${stock[key]}</div>
            </div>
        `)
    })
}

load()