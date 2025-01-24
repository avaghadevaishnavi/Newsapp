import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class Business extends Component {
    articals= [
        {
          "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
          },
          "author": "Joe Wallace, Paul Kiernan, WSJ Staff, Margot Patrick, Quentin Webb, Heard Editors",
          "title": "Stock Market Today: Dow Futures Rise; Intel Shares Rally - The Wall Street Journal",
          "description": "Federal Reserve rate-setting meeting starts Tuesday. Follow along for live updates on stocks and other markets, including the Dow Jones Industrial Average, S&P 500 and Nasdaq Composite.",
          "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-sp500-nasdaq-live-09-17-2024",
          "urlToImage": "https://images.wsj.net/im-925349/social",
          "publishedAt": "2024-09-17T12:39:00Z",
          "content": "With Federal Reserve policymakers starting their two-day meeting today, traders keep lifting the chances of a supersize interest-rate cut.\r\nDerivatives markets suggest the probability of a half-perce… [+1122 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Karen Friar",
          "title": "Stock market today: Dow poised to build on record as US futures rise ahead of Fed - Yahoo Finance",
          "description": "Investors are looking to retail sales data for clues to consumer health, the last piece of data that could factor into the Fed's rate decision.",
          "url": "https://finance.yahoo.com/news/live/stock-market-today-dow-poised-to-build-on-record-as-us-futures-rise-ahead-of-fed-110018250.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/uSC_37_o_RXljg._PutHOQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/53221f30-6139-11ef-9ff7-f9fe1e3936dd",
          "publishedAt": "2024-09-17T11:37:32Z",
          "content": "US stock futures rose on Tuesday, with techs leading the advance in the wait for fresh retail sales data and the start of a Federal Reserve meeting pivotal to an interest-rate cut.\r\nDow Jones Industr… [+1561 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Steve Liesman",
          "title": "Fed to cut rates by a quarter point with a soft landing expected, according to CNBC Fed Survey - CNBC",
          "description": "The survey shows 84% of the 27 respondents, including economists, fund managers and strategists, see the Fed cutting by a quarter percentage point.",
          "url": "https://www.cnbc.com/2024/09/17/fed-to-cut-rates-by-a-quarter-point-with-a-soft-landing-expected-according-to-cnbc-fed-survey.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/108024800-1724414538815-gettyimages-2164056363-5ah02161.jpeg?v=1726570302&w=1920&h=1080",
          "publishedAt": "2024-09-17T11:15:01Z",
          "content": "Federal Reserve Chairman Jerome Powell.\r\nWith considerable uncertainty about what the Federal Reserve will do at its meeting this week, respondents to the CNBC Fed Survey are forecasting a more gradu… [+3655 chars]"
        },
        {
          "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
          },
          "author": "The Wall Street Journal",
          "title": "Kroger Antitrust Case Could Open Up New Bag of M&A Possibilities - The Wall Street Journal",
          "description": null,
          "url": "https://www.wsj.com/business/deals/kroger-antitrust-case-could-open-up-new-bag-of-m-a-possibilities-25c7f2a8",
          "urlToImage": null,
          "publishedAt": "2024-09-17T11:00:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Boeing warns of job losses and makes spending cuts after strike - BBC.com",
          "description": "The strike at Boeing has sent the company scrambling to save cash.",
          "url": "https://www.bbc.com/news/articles/c8ell8jwew0o",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7e50/live/904ba750-7444-11ef-9e9c-314933c514dc.jpg",
          "publishedAt": "2024-09-17T08:14:37Z",
          "content": "Boeing is making immediate spending cuts and says it may temporarily lay off staff, as it grapples with a strike by more than 30,000 workers in the US.\r\nThe cuts include a freeze on hiring, \"signific… [+2261 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Morgan Phillips",
          "title": "China exerts new restrictions on exports of minerals critical to US weapons making - Fox News",
          "description": "China slapped new export controls on a batch of minerals, including antimony, that are key to the U.S. defense industry in a move that could send prices in the defense sector soaring.",
          "url": "https://www.foxnews.com/politics/china-export-controls-minerals-us-weapons",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/2003-08-12T120000Z_1050461165_PBEAHUONYGB_RTRMADP_3_CHINA.jpg",
          "publishedAt": "2024-09-17T08:00:00Z",
          "content": "China slapped new export controls on a batch of minerals such as antimony vital for the U.S. defense industry as a flame-retardant component used in machine bearings in a move that could send prices … [+5113 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Benzinga"
          },
          "author": "Benzinga Neuro",
          "title": "Starbucks North America CEO Michael Conway Quits After Just 6 Months In The Position - Benzinga",
          "description": "Before his North American CEO role, Conway served as group president of international and channel development and president of Starbucks Canada.",
          "url": "https://www.benzinga.com/news/24/09/40892040/starbucks-north-america-ceo-michael-conway-quits-after-just-6-months-in-the-position",
          "urlToImage": "https://cdn.benzinga.com/files/images/story/2024/09/17/starbucks-5460799-1920.jpeg?width=1200&height=800&fit=crop",
          "publishedAt": "2024-09-17T07:33:04Z",
          "content": "In a surprising move, Michael Conway, StarbucksSBUX North America CEO, has resigned after only six months in the role.\r\nWhat Happened: Conway, who took on the position in April, informed the company … [+2475 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Max A. Cherney",
          "title": "Intel stock pops on plan for its foundry business to make custom chip for Amazon - Yahoo Finance",
          "description": "Intel's foundry, or contract manufacturing business, has signed up Amazon's cloud services unit as a customer for making custom artificial intelligence chips...",
          "url": "https://finance.yahoo.com/news/intel-aws-expand-strategic-collaboration-201944252.html/",
          "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
          "publishedAt": "2024-09-17T07:26:55Z",
          "content": "(Reuters) - Intel's (INTC) foundry, or contract manufacturing business, has signed up Amazon's (AMZN) cloud services unit as a customer for making custom artificial intelligence chips, the companies … [+3007 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "2024-09-17T06:02:40Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "Antonio G. Di Benedetto, Brandon Widder",
          "title": "Amazon’s next Prime Day sale is happening on October 8th and 9th - The Verge",
          "description": "Amazon’s October Prime Day event, Prime Big Deal Days, kicks off on October 8th, providing Amazon shoppers with a chance to save on a range of goods ahead of Black Friday.",
          "url": "https://www.theverge.com/2024/9/17/24244180/amazon-october-prime-day-big-deal-days-fall-dates-2024",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/YsSwJjeePniOk01QDHeAsuHaotg=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935558/acastro_STK103__01.jpg",
          "publishedAt": "2024-09-17T05:00:00Z",
          "content": "Amazons next Prime Day sale is happening on October 8th and 9th\r\nAmazons next Prime Day sale is happening on October 8th and 9th\r\n / Prime Big Deal Days will once again run for two full days, with a … [+2411 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "ELAINE KURTENBACH",
          "title": "Stock market today: Asian shares are mixed as Wall Street gears up for an interest rate cut - The Associated Press",
          "description": "Shares are mixed in Asia after the Dow Jones Industrial Average set a record as Wall Street gears up for Federal Reserve's most anticipated meeting in years. Tokyo's Nikkei index fell 2% and Hong Kong advanced. Markets in mainland China were closed. On Monday…",
          "url": "https://apnews.com/article/stock-markets-today-wall-street-interest-rates-4e491b309ad5e9952627c1d9a0ee8e29",
          "urlToImage": "https://dims.apnews.com/dims4/default/0b353c8/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F20%2Fd85cc2266f4e3e06542aabc69d30%2F2107c706bad942f3926df19d063cf1cc",
          "publishedAt": "2024-09-17T04:16:00Z",
          "content": "Shares were mixed in Asia on Tuesday after the Dow Jones Industrial Average set a record as Wall Street geared up for Federal Reserves most anticipated meeting in years. \r\nTokyos Nikkei index fell 2%… [+3505 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "SCOTT SONNER, ALEX VEIGA",
          "title": "Control of Murdoch media empire at stake as hearing to proceed with mogul and children - The Associated Press",
          "description": "Rupert Murdoch and his four children are in Nevada where they're scheduled to return to court Tuesday at an evidentiary hearing that could decide who control’s Murdoch’s media empire after his death. The proceedings before probate commissioner began behind cl…",
          "url": "https://apnews.com/article/rupert-murdoch-news-corp-murdoch-family-trust-9a4b20037e43f46ad5934797579dcd8e",
          "urlToImage": "https://dims.apnews.com/dims4/default/735fa25/2147483647/strip/true/crop/5904x3321+0+308/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe9%2F21%2Fb3d38ce0301a6c803085cac83b6a%2F2ffc5e9d65fb4a2fb07f5949149a4bf8",
          "publishedAt": "2024-09-17T03:52:00Z",
          "content": "RENO, Nev. (AP) Rupert Murdoch and four of his children on Monday went before a Nevada probate commissioner behind closed doors to an evidentiary hearing that could decide who controls Murdochs media… [+3105 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Ashley Stewart",
          "title": "Amazon wants fewer managers. A leaked document explains how it plans to meet this goal. - Business Insider",
          "description": "The document states the plan may result in role eliminations as \"organizations may identify roles that are no longer required.\"",
          "url": "https://www.businessinsider.com/amazon-fewer-managers-leaked-document-2024-9",
          "urlToImage": "https://i.insider.com/66abfb53b4912df3ae18602f?width=1200&format=jpeg",
          "publishedAt": "2024-09-16T22:51:00Z",
          "content": null
        },
        {
          "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
          },
          "author": "Benj Edwards",
          "title": "Ban warnings fly as users dare to probe the “thoughts” of OpenAI’s latest model - Ars Technica",
          "description": "OpenAI does not want anyone to know what o1 is “thinking\" under the hood.",
          "url": "https://arstechnica.com/information-technology/2024/09/openai-threatens-bans-for-probing-new-ai-models-reasoning-process/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/09/brain_gears_header-760x380.jpg",
          "publishedAt": "2024-09-16T22:49:11Z",
          "content": "95\r\nOpenAI truly does not want you to know what its latest AI model is \"thinking.\" Since the company launched its \"Strawberry\" AI model family last week, touting so-called reasoning abilities with o1… [+4874 chars]"
        },
        {
          "source": {
            "id": "fortune",
            "name": "Fortune"
          },
          "author": "Andrew Pollack, Bloomberg",
          "title": "Microsoft announces $60 billion stock buyback and 10% dividend increase - Fortune",
          "description": "The software company said shareholders as of Nov. 21 will receive a quarterly dividend of 83 cents a share, compared with the current 75 cents.",
          "url": "https://fortune.com/2024/09/16/microsoft-60-billion-stock-buyback-10-percent-dividend-increase/",
          "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/09/GettyImages-2162687264-e1726526519654.jpg?resize=1200,600",
          "publishedAt": "2024-09-16T22:46:00Z",
          "content": "Microsoft Corp. unveiled a new $60 billion stock-buyback program, matching its largest-ever repurchase authorization, and raised its quarterly dividend 10%.The software company said shareholders as o… [+1172 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Josh Lipton",
          "title": "What the Fed's interest rate cut means for the bond market - Yahoo Finance",
          "description": "Janney Montgomery Scott chief fixed income strategist Guy LeBas joins Market Domination Overtime to discuss how the Federal Reserve's interest rate cut will ...",
          "url": "https://finance.yahoo.com/video/feds-interest-rate-cut-means-220013633.html/",
          "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
          "publishedAt": "2024-09-16T22:00:13Z",
          "content": "Janney Montgomery Scott chief fixed income strategist Guy LeBas joins Market Domination Overtime to discuss how the Federal Reserve's interest rate cut will weigh on the bond market (^TYX, ^TNX, ^FVX… [+1740 chars]"
        },
        {
          "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
          },
          "author": "Beth Mole",
          "title": "Boar’s Head will never make liverwurst again after outbreak that killed 9 - Ars Technica",
          "description": "Indefinitely closed plant rated area with Listeria as \"low risk\" for Listeria.",
          "url": "https://arstechnica.com/science/2024/09/boars-head-will-never-make-liverwurst-again-after-outbreak-that-killed-9/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/08/GettyImages-2164656717-760x380.jpg",
          "publishedAt": "2024-09-16T21:44:49Z",
          "content": "Enlarge/ A recall notice is posted next to Boar's Head meats that are displayed at a Safeway store on July 31, 2024, in San Rafael, California.\r\n33\r\nThe Boar's Head deli-meat plant at the epicenter o… [+4687 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Detroit Free Press"
          },
          "author": "Eric D. Lawrence",
          "title": "UAW: Stellantis trying to move Dodge Durango production out of Detroit - Detroit Free Press",
          "description": "The UAW says its locals are pushing back against attempts by Stellantis to move Dodge Durango production out of Detroit.",
          "url": "https://www.freep.com/story/money/cars/chrysler/2024/09/16/uaw-warns-stellantis-dodge-durango-production-move-detroit/75252723007/",
          "urlToImage": "https://www.freep.com/gcdn/presto/2022/08/15/PDTF/04f6fb78-172b-46a4-91e3-e6735340f73a-DG023_047DUfsrmo8o6s4jl3h2v5tfucn37pt.JPG?crop=999,562,x0,y51&width=999&height=562&format=pjpg&auto=webp",
          "publishedAt": "2024-09-16T21:24:28Z",
          "content": "The UAW said its locals are pushing back against what the union says are Stellantis' attempts to move Dodge Durango production out of Detroit.\r\nThe union said that locals representing thousands of me… [+3175 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Kristian Burt",
          "title": "Biden administration awards Intel up to $3 billion under the CHIPS Act - CNBC",
          "description": "The Biden administration announced Monday that it is awarding Intel up to an additional $3 billion under the CHIPS Act.",
          "url": "https://www.cnbc.com/2024/09/16/intel-awarded-up-to-3-billion-under-chips-act.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/108034853-1726517707977-gettyimages-2155355706-AFP_34UR8ET.jpeg?v=1726517736&w=1920&h=1080",
          "publishedAt": "2024-09-16T20:52:18Z",
          "content": "The Biden administration on Monday awarded Intel up to an additional $3 billion under the CHIPS and Science Act for the \"Secure Enclave\" program, which is designed to expand the supply of microelectr… [+1736 chars]"
        },
        {
          "source": {
            "id": "fortune",
            "name": "Fortune"
          },
          "author": "Sydney Lake",
          "title": "Mark Cuban says he’s not going through a midlife crisis but would buy X and Fox News if he could - Fortune",
          "description": "\"If I had enough money to do it, which I don’t, I’d buy it in a heartbeat,\" the billionaire told Wired.",
          "url": "https://fortune.com/2024/09/16/mark-cuban-buy-fox-news-x-midlife-crisis-interview/",
          "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/09/GettyImages-1421425943-e1726515426877.jpg?resize=1200,600",
          "publishedAt": "2024-09-16T20:38:00Z",
          "content": "Cuban, who is worth $7.66 billion, told Wireds Lauren Goode that hes doing the exact opposite of having a midlife crisis. Instead, hes taken a massive leap into pharmaceuticals, an industry he hasnt … [+2921 chars]"
        }
      ]
    constructor(){
        super();
        console.log("hello i am constructor from news component");
        this.state={
         articals:this.articals,
         loading:false,
         page:1
           }
           document.title="Business News";
      }
      render() {
        console.log("render");
        return (
        <div className='container my-1 '>
          <h1 className='text-center'style={{marginTop:'90px'}}>News--Top Business Headlines</h1>
             <spinner/>
          <div className='row'>
          {this.state.articals && this.state.articals.map((element)=>{
             return <div className='col md-4 'key={element.url}>
          <NewsItems  tittle={element.title?element.title.slice(0,45):""} discription={element.description?element.description.slice(0,88):""}imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
            {/* md-4 will allow to take equal space it's just bootstrap css nothing more */}
           </div>
            
          </div>
        )
      }
    }

export default Business
