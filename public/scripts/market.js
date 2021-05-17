const db = firebase.firestore();
const marketSingle = document.getElementById('market-single')

function getMarketCurrentName() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    return name;
}

async function load() {
    const marketSnapshots = await db.collection("MARKET").where('Name', '==', getMarketCurrentName()).get()
    marketSnapshots.forEach((doc) => {
        const market = doc.data()
        marketSingle.insertAdjacentHTML('beforeend', `
                <div class="row">
                    <div class="col-header">NAME</div>
                    <div class="col-content">${market['Name']}</div>
                </div>
                
                ${
                    Object.keys(market['Hours']).map(key => {
                        return `
                            <div class="row">
                                <div class="col-header">HOURS-${key.toUpperCase()}</div>
                                <div class="col-content">${market['Hours'][key]}</div>
                                
                            </div>
                            `
                    }).join('')
                }
          
        `)
    })
}

load()