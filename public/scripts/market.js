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
                <div class="row">
                    <div class="col-header">HOURS-MONDAY</div>
                    <div class="col-content">${market['Hours']['Monday']}</div>
                </div>
                <div class="row">
                    <div class="col-header">HOURS-TUESDAY</div>
                    <div class="col-content">${market['Hours']['Tuesday']}</div>
                </div>
                <div class="row">
                    <div class="col-header">HOURS-WEDNESDAY</div>
                    <div class="col-content">${market['Hours']['Wednesday']}</div>
                </div>
                <div class="row">
                    <div class="col-header">HOURS-THURSDAY</div>
                    <div class="col-content">${market['Hours']['Thursday']}</div>
                </div>
                <div class="row">
                    <div class="col-header">HOURS-FRIDAY</div>
                    <div class="col-content">${market['Hours']['Friday']}</div>
                </div>
                <div class="row">
                    <div class="col-header">HOURS-SATURDAY</div>
                    <div class="col-content">${market['Hours']['Saturday']}</div>
                </div>
                <div class="row">
                    <div class="col-header">HOURS-SUNDAY</div>
                    <div class="col-content">${market['Hours']['Sunday']}</div>
                </div>
        `)
    })
}

load()