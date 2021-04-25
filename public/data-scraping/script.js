"use strict"
/*
async function scrape (url) {
  const result = await fetch(url);
  const html = await result.text();
  const parser = new DOMParser ();
  const page = parser.parseFromString(html, "text/html");

  //CONTRACT INFORMATION--------------------------------------------------------------
  
  const Name = page.querySelector("#contractSpecs > table:nth-child(2) > tbody > tr:nth-child(2) > td").innerText;  
  const Symb = page.querySelector("#contractSpecs > table:nth-child(2) > tbody > tr:nth-child(3) > td").innerText;  
  const Exchange = page.querySelector("#contractSpecs > table:nth-child(2) > tbody > tr:nth-child(4) > td > b > a").innerText;  
  const Contract = page.querySelector("#contractSpecs > table:nth-child(2) > tbody > tr:nth-child(5) > td").innerText;    
  const Country = page.querySelector("#contractSpecs > table:nth-child(2) > tbody > tr:nth-child(6) > td").innerText;      
  const Currency = page.querySelector("#contractSpecs > table:nth-child(2) > tbody > tr:nth-child(8) > td").innerText;   
  const IsinID = page.querySelector("#contractSpecs > table:nth-child(3) > tbody > tr.white > td").innerText;   
  const Exchange_Website = page.querySelector("#contractSpecs > table:nth-child(7) > tbody > tr:nth-child(5) > td > a").innerText;   

  //-----------------------------------------------------------------------------
  //FUTURE INFORMATION-----------------------------------------------------------

  const FutureType = page.querySelector("#contractSpecs > table:nth-child(4) > tbody > tr:nth-child(2) > td").innerText;
  const LastDate = page.querySelector("#contractSpecs > table:nth-child(4) > tbody > tr:nth-child(5) > td").innerText;
  const ExpirationDate = page.querySelector("#contractSpecs > table:nth-child(4) > tbody > tr:nth-child(6) > td").innerText;
  const Multiplier = page.querySelector("#contractSpecs > table:nth-child(4) > tbody > tr:nth-child(7) > td").innerText;

  //-----------------------------------------------------------------------------
  //MARGIN REQUIREMENTS-----------------------------------------------------------

  const IntradayInitialMargin = page.querySelector("#contractSpecs > table:nth-child(5) > tbody > tr:nth-child(2) > td").innerText;
  const IntradayMaintenancemargin = page.querySelector("#contractSpecs > table:nth-child(5) > tbody > tr:nth-child(3) > td").innerText; 
  const OvernightInitialMargin= page.querySelector("#contractSpecs > table:nth-child(5) > tbody > tr:nth-child(4) > td").innerText; 
  const OvernightMaintenanceMargin= page.querySelector("#contractSpecs > table:nth-child(5) > tbody > tr:nth-child(5) > td").innerText; 

  //-----------------------------------------------------------------------------
  //TRADING HOURS-----------------------------------------------------------

  const Sunday = page.querySelector("#contractSpecs > table:nth-child(7) > tbody > tr:nth-child(6) > td > center > table > tbody > tr:nth-child(1) > td:nth-child(2)").innerText; 
  const Monday = page.querySelector("#contractSpecs > table:nth-child(7) > tbody > tr:nth-child(6) > td > center > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerText; 
  const Tuesday = page.querySelector("#contractSpecs > table:nth-child(7) > tbody > tr:nth-child(6) > td > center > table > tbody > tr:nth-child(3) > td:nth-child(2)").innerText; 
  const Wednesday = page.querySelector("#contractSpecs > table:nth-child(7) > tbody > tr:nth-child(6) > td > center > table > tbody > tr:nth-child(4) > td:nth-child(2)").innerText; 
  const Thursday = page.querySelector("#contractSpecs > table:nth-child(7) > tbody > tr:nth-child(6) > td > center > table > tbody > tr:nth-child(5) > td:nth-child(2)").innerText; 
  const Friday = page.querySelector("#contractSpecs > table:nth-child(7) > tbody > tr:nth-child(6) > td > center > table > tbody > tr:nth-child(6) > td:nth-child(2)").innerText; 
  const Saturday = page.querySelector("#contractSpecs > table:nth-child(7) > tbody > tr:nth-child(6) > td > center > table > tbody > tr:nth-child(7) > td:nth-child(2)").innerText; 

  //-----------------------------------------------------------------------------
  //OBJECT-----------------------------------------------------------
 
  const data = {
    Name:Name,
    Symb:Symb,
    Exchange:Exchange,
    Contract:Contract,
    Country:Country,
    Currency:Currency,
    IsinID:IsinID,
    Exchange_Website:Exchange_Website,
    FutureType:FutureType,
    LastDate:LastDate,
    ExpirationDate:ExpirationDate,
    Multiplier:Multiplier,
    IntradayInitialMargin:IntradayInitialMargin,
    IntradayMaintenancemargin:IntradayMaintenancemargin,
    OvernightInitialMargin:OvernightInitialMargin,
    OvernightMaintenanceMargin:OvernightMaintenanceMargin,
    Sunday:Sunday,
    Monday:Monday,
    Tuesday:Tuesday,
    Wednesday:Wednesday,
    Thursday:Thursday,
    Friday:Friday,
    Saturday:Saturday,
  }
  return data;
}
*/

async function scrape (path) {
  const result = await fetch('http://localhost:8010/proxy' + path);
  const html = await result.text();
  const parser = new DOMParser ();
  const page = parser.parseFromString(html, "text/html");
  const elements = Array.from(page.querySelectorAll('#contractSpecs > table > tbody > tr > th')).map(el => [el.innerText, el.nextElementSibling ? el.nextElementSibling.innerText : null])
  return elements
}

const urls= ["/v3.10/index.php?action=Details&site=GEN&conid=446620977","/v3.10/index.php?action=Details&site=GEN&conid=446620894", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620891", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620921", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620930", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=478462211", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620956", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620995", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620950", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620881", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620884", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620990", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=478462266", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=478462226", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620947", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620975", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620935", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620965", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620915", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=478462254", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620898", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620941", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620998", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620903", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620953", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620904", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620987", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446621004", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620980", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620960", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620970", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620909", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446621001", "https://contract.ibkr.info/v3.10/index.php?action=Details&site=GEN&conid=446620918"];

async function runCode() {
  const data = await scrape("/v3.10/index.php?action=Details&site=GEN&conid=446620977");
  console.log(data);

  for (let url of urls) {
    const data = await scrape(url)
    console.log(data)
  }


  for (let i=0; i<urls.length; i++){
    const data = await scrape(url[i]);
    console.log(data);
  }
}

runCode();