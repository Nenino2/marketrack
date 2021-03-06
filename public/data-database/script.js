const db = firebase.firestore();

document.getElementById('button').addEventListener('click', deployToDatabase)

async function getDatabaseDataElementList () {
    const result = await fetch(`data.json`);
    const data = await result.json();
    return data;
}

async function deployToDatabase() {
    const elementList = await getDatabaseDataElementList();
    const elementMap = new Map();
    for (let element of elementList) {
        Object.keys(element).forEach(key => {
            if (!isNaN(element[key])) {
                element[key] = parseFloat(element[key])
            } else if (key === 'name') {
                element[key] = element[key].replace(/\(.*\)/, '').trim()
            }
        })
        elementMap.set(element['isin'], element)
    }
    elementMap.forEach(async (element) => {
        await db.collection("STOCKS").add(element)
    })
    console.log('DONE!')
}