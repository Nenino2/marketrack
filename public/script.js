"use strict"
async function scrape () {
  const result = await fetch ("https://localhost:8010/proxy/v3.10/index.php?action=Details&site=GEN&conid=446620977");
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
    IsinID:IsiniID,
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

  console.log(data);
}