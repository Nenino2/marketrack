const db = firebase.firestore();

async function load() {
    const stocksSnapshots = await db.collection("STOCKS").get();
    const stocks = []
    stocksSnapshots.forEach((doc) => stocks.push(doc.data()))
    console.log(stocks)
}

load()