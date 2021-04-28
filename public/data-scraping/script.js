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

/* 
const urls= ["/v3.10/index.php?action=Details&site=GEN&conid=446620977","/v3.10/index.php?action=Details&site=GEN&conid=446620894", "/v3.10/index.php?action=Details&site=GEN&conid=446620891", "/v3.10/index.php?action=Details&site=GEN&conid=446620921", "/v3.10/index.php?action=Details&site=GEN&conid=446620930", "/v3.10/index.php?action=Details&site=GEN&conid=478462211", "/v3.10/index.php?action=Details&site=GEN&conid=446620956", "/v3.10/index.php?action=Details&site=GEN&conid=446620995", "/v3.10/index.php?action=Details&site=GEN&conid=446620950", "/v3.10/index.php?action=Details&site=GEN&conid=446620881", "/v3.10/index.php?action=Details&site=GEN&conid=446620884", "/v3.10/index.php?action=Details&site=GEN&conid=446620990", "/v3.10/index.php?action=Details&site=GEN&conid=478462266", "/v3.10/index.php?action=Details&site=GEN&conid=478462226", "/v3.10/index.php?action=Details&site=GEN&conid=446620947", "/v3.10/index.php?action=Details&site=GEN&conid=446620975", "/v3.10/index.php?action=Details&site=GEN&conid=446620935", "/v3.10/index.php?action=Details&site=GEN&conid=446620965", "/v3.10/index.php?action=Details&site=GEN&conid=446620915", "/v3.10/index.php?action=Details&site=GEN&conid=478462254", "/v3.10/index.php?action=Details&site=GEN&conid=446620898", "/v3.10/index.php?action=Details&site=GEN&conid=446620941", "/v3.10/index.php?action=Details&site=GEN&conid=446620998", "/v3.10/index.php?action=Details&site=GEN&conid=446620903", "/v3.10/index.php?action=Details&site=GEN&conid=446620953", "/v3.10/index.php?action=Details&site=GEN&conid=446620904", "/v3.10/index.php?action=Details&site=GEN&conid=446620987", "/v3.10/index.php?action=Details&site=GEN&conid=446621004", "/v3.10/index.php?action=Details&site=GEN&conid=446620980", "/v3.10/index.php?action=Details&site=GEN&conid=446620960", "/v3.10/index.php?action=Details&site=GEN&conid=446620970", "/v3.10/index.php?action=Details&site=GEN&conid=446620909", "/v3.10/index.php?action=Details&site=GEN&conid=446621001", "/v3.10/index.php?action=Details&site=GEN&conid=446620918"];
const urls1= [
"/v3.10/index.php?action=Details&site=GEN&conid=446620977",
"/v3.10/index.php?action=Details&site=GEN&conid=446620894", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620891", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620921", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620930", 
"/v3.10/index.php?action=Details&site=GEN&conid=478462211", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620956", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620995", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620950", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620881", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620884", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620990", 
"/v3.10/index.php?action=Details&site=GEN&conid=478462266", 
"/v3.10/index.php?action=Details&site=GEN&conid=478462226", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620947", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620975", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620935", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620965", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620915", 
"/v3.10/index.php?action=Details&site=GEN&conid=478462254", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620898", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620941", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620998", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620903", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620953", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620904", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620987", 
"/v3.10/index.php?action=Details&site=GEN&conid=446621004", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620980", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620960", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620970", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620909", 
"/v3.10/index.php?action=Details&site=GEN&conid=446621001", 
"/v3.10/index.php?action=Details&site=GEN&conid=446620918"];

const urls2 = [
"/v3.10/index.php?action=Details&site=GEN&conid=426785843", 
"/v3.10/index.php?action=Details&site=GEN&conid=426785846", 
"/v3.10/index.php?action=Details&site=GEN&conid=449860965", 
"/v3.10/index.php?action=Details&site=GEN&conid=4430467", 
"/v3.10/index.php?action=Details&site=GEN&conid=208710587", 
"/v3.10/index.php?action=Details&site=GEN&conid=208914695", 
"/v3.10/index.php?action=Details&site=GEN&conid=251259604", 
"/v3.10/index.php?action=Details&site=GEN&conid=479405067", 
"/v3.10/index.php?action=Details&site=GEN&conid=389238320", 
"/v3.10/index.php?action=Details&site=GEN&conid=324994684", 
"/v3.10/index.php?action=Details&site=GEN&conid=284197782", 
"/v3.10/index.php?action=Details&site=GEN&conid=29612223", 
"/v3.10/index.php?action=Details&site=GEN&conid=8825226", 
"/v3.10/index.php?action=Details&site=GEN&conid=73400802", 
"/v3.10/index.php?action=Details&site=GEN&conid=26318918", 
"/v3.10/index.php?action=Details&site=GEN&conid=240486295", 
"/v3.10/index.php?action=Details&site=GEN&conid=199829872", 
"/v3.10/index.php?action=Details&site=GEN&conid=79780521", 
"/v3.10/index.php?action=Details&site=GEN&conid=339968622", 
"/v3.10/index.php?action=Details&site=GEN&conid=347787867", 
"/v3.10/index.php?action=Details&site=GEN&conid=80316786", 
"/v3.10/index.php?action=Details&site=GEN&conid=1407379", 
"/v3.10/index.php?action=Details&site=GEN&conid=12828696", 
"/v3.10/index.php?action=Details&site=GEN&conid=39089692", 
"/v3.10/index.php?action=Details&site=GEN&conid=111604420", 
"/v3.10/index.php?action=Details&site=GEN&conid=29612135", 
"/v3.10/index.php?action=Details&site=GEN&conid=29612256", 
"/v3.10/index.php?action=Details&site=GEN&conid=476031830", 
"/v3.10/index.php?action=Details&site=GEN&conid=298538227", 
"/v3.10/index.php?action=Details&site=GEN&conid=14079", 
"/v3.10/index.php?action=Details&site=GEN&conid=99668290", 
"/v3.10/index.php?action=Details&site=GEN&conid=32596680", 
"/v3.10/index.php?action=Details&site=GEN&conid=13013285", 
"/v3.10/index.php?action=Details&site=GEN&conid=363412474", 
"/v3.10/index.php?action=Details&site=GEN&conid=55764652", 
"/v3.10/index.php?action=Details&site=GEN&conid=13013290", 
"/v3.10/index.php?action=Details&site=GEN&conid=148713044", 
"/v3.10/index.php?action=Details&site=GEN&conid=13013300", 
"/v3.10/index.php?action=Details&site=GEN&conid=87832645", 
"/v3.10/index.php?action=Details&site=GEN&conid=76815481", 
"/v3.10/index.php?action=Details&site=GEN&conid=117589399", 
"/v3.10/index.php?action=Details&site=GEN&conid=26318975", 
"/v3.10/index.php?action=Details&site=GEN&conid=201411335", 
"/v3.10/index.php?action=Details&site=GEN&conid=26318976", 
"/v3.10/index.php?action=Details&site=GEN&conid=26318981", 
"/v3.10/index.php?action=Details&site=GEN&conid=26319480", 
"/v3.10/index.php?action=Details&site=GEN&conid=29816327", 
"/v3.10/index.php?action=Details&site=GEN&conid=97616687", 
"/v3.10/index.php?action=Details&site=GEN&conid=361082888", 
"/v3.10/index.php?action=Details&site=GEN&conid=201887215", 
"/v3.10/index.php?action=Details&site=GEN&conid=67957194", 
"/v3.10/index.php?action=Details&site=GEN&conid=54418481", 
"/v3.10/index.php?action=Details&site=GEN&conid=259854200", 
"/v3.10/index.php?action=Details&site=GEN&conid=26318991", 
"/v3.10/index.php?action=Details&site=GEN&conid=26318991",
"/v3.10/index.php?action=Details&site=GEN&conid=77680640",
"/v3.10/index.php?action=Details&site=GEN&conid=68598660",
"/v3.10/index.php?action=Details&site=GEN&conid=50496554",
"/v3.10/index.php?action=Details&site=GEN&conid=106714578", 
"/v3.10/index.php?action=Details&site=GEN&conid=142893855", 
"/v3.10/index.php?action=Details&site=GEN&conid=26318993", 
"/v3.10/index.php?action=Details&site=GEN&conid=26318996", 
"/v3.10/index.php?action=Details&site=GEN&conid=26319006", 
"/v3.10/index.php?action=Details&site=GEN&conid=80814599", 
"/v3.10/index.php?action=Details&site=GEN&conid=14362", 
"/v3.10/index.php?action=Details&site=GEN&conid=80814692", 
"/v3.10/index.php?action=Details&site=GEN&conid=26319015", 
"/v3.10/index.php?action=Details&site=GEN&conid=272334042", 
"/v3.10/index.php?action=Details&site=GEN&conid=280540808", 
"/v3.10/index.php?action=Details&site=GEN&conid=41627656", 
"/v3.10/index.php?action=Details&site=GEN&conid=142250902", 
"/v3.10/index.php?action=Details&site=GEN&conid=386728100"]

*/

const urls = ['/borsa/azioni/aim-italia/dati-completi.html?isin=IT0005439861&lang=it', '/borsa/derivati/ftse-mib-futures/dati-completi.html?isin=IT0017178531&lang=it'];

// lcp --proxyUrl https://www.borsaitaliana.it
const borsaItalianaSelector = '#fullcontainer > main > section > div > article > div > div > table > tbody > tr > td:nth-child(1)';

// lcp --proxyUrl https://contract.ibkr.info
const contactIbrkSelector = '#contractSpecs > table > tbody > tr > th';

async function scrape (path, selector) {
  const result = await fetch('http://localhost:8010/proxy' + path);
  const html = await result.text();
  const parser = new DOMParser ();
  const page = parser.parseFromString(html, "text/html");
  const elements = Array.from(page.querySelectorAll(selector)).map(el => [el.innerText.trim(), el.nextElementSibling ? el.nextElementSibling.innerText.trim() : null])
  return elements
}


async function runCode() {
  for (let url of urls) {
    let data = await scrape(url, borsaItalianaSelector);
    // if (data.length === 0) {
    //   confirm('RISOLVI IL CAPTHA: https://contract.ibkr.info/v3.10/index.php')
    //   data = await scrape(url);
    // }
    console.log(data)
  }
}
runCode();