// lcp --proxyUrl https://contract.ibkr.info --port 9990
// lcp --proxyUrl https://www.interactivebrokers.eu --port 9991

 const VSE = [
    '/en/index.php?f=41295&exch=vse&showcategories=STK#productbuffer',
    '/en/index.php?f=41295&exch=vse&showcategories=STK&p=&cc=&limit=100&page=2',
    //'/en/index.php?f=41295&exch=vse&showcategories=STK&p=&cc=&limit=100&page=3'
]

 const ENEXT = [
    '/en/index.php?f=41295&exch=enext.be&showcategories=STK#productbuffer',
    '/en/index.php?f=41295&exch=enext.be&showcategories=STK&p=&cc=&limit=100&page=2'
]

 const SBF = [
    '/en/index.php?f=41295&exch=sbf&showcategories=STK#productbuffer',
    '/en/index.php?f=41295&exch=sbf&showcategories=STK&p=&cc=&limit=100&page=2',
   // '/en/index.php?f=41295&exch=sbf&showcategories=STK&p=&cc=&limit=100&page=3',
   // '/en/index.php?f=41295&exch=sbf&showcategories=STK&p=&cc=&limit=100&page=4',
   // '/en/index.php?f=41295&exch=sbf&showcategories=STK&p=&cc=&limit=100&page=5'
]

 const FWB = [
    '/en/index.php?f=41295&exch=fwb&showcategories=STK&p=&cc=&limit=100&page=2',
    '/en/index.php?f=41295&exch=fwb&showcategories=STK&p=&cc=&limit=100&page=3',
   // '/en/index.php?f=41295&exch=fwb&showcategories=STK&p=&cc=&limit=100&page=4',
   // '/en/index.php?f=41295&exch=fwb&showcategories=STK&p=&cc=&limit=100&page=5',
   // '/en/index.php?f=41295&exch=fwb&showcategories=STK&p=&cc=&limit=100&page=6'
]

 const SWB = [
    '/en/index.php?f=41295&exch=swb&showcategories=STK#productbuffer',
    '/en/index.php?f=41295&exch=swb&showcategories=STK&p=&cc=&limit=100&page=2',
    //'/en/index.php?f=41295&exch=swb&showcategories=STK&p=&cc=&limit=100&page=5',
    //'/en/index.php?f=41295&exch=swb&showcategories=STK&p=&cc=&limit=100&page=6',
    //'/en/index.php?f=41295&exch=swb&showcategories=STK&p=&cc=&limit=100&page=7'
]

 const SFB = [
    '/en/index.php?f=41295&exch=sfb&showcategories=STK#productbuffer',
    '/en/index.php?f=41295&exch=sfb&showcategories=STK&p=&cc=&limit=100&page=2',
    //'/en/index.php?f=41295&exch=sfb&showcategories=STK&p=&cc=&limit=100&page=3',
    //'/en/index.php?f=41295&exch=sfb&showcategories=STK&p=&cc=&limit=100&page=4',
    //'/en/index.php?f=41295&exch=sfb&showcategories=STK&p=&cc=&limit=100&page=5'
]

 const EBS = [
    '/en/index.php?f=41295&exch=ebs&showcategories=STK&p=&cc=&limit=100&page=3',
    '/en/index.php?f=41295&exch=ebs&showcategories=STK&p=&cc=&limit=100&page=6'
]

 const LSE = [
    '/en/index.php?f=41295&exch=lse&showcategories=STK#productbuffer',
    '/en/index.php?f=41295&exch=lse&showcategories=STK&p=&cc=&limit=100&page=3',
    //'/en/index.php?f=41295&exch=lse&showcategories=STK&p=&cc=&limit=100&page=5',
    //'/en/index.php?f=41295&exch=lse&showcategories=STK&p=&cc=&limit=100&page=6',
    //'/en/index.php?f=41295&exch=lse&showcategories=STK&p=&cc=&limit=100&page=9'
]

export const stocksPageUrls = [...VSE, ...ENEXT, ...SBF, ...FWB, ...SWB, ...SFB, ...EBS, ...LSE]
export const selectorIbkrPage = '#exchange-products > div > div > div.col-xs-12.col-sm-12.col-md-9.col-lg-9 > div > div > div > table > tbody > tr > td:nth-child(2) > a';
export const selectorIbkr = '#contractSpecs > table > tbody > tr > th';