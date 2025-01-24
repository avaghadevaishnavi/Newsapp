import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
 
  articals= 

    [
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Israeli strikes on Syria kill at least 16 people, Syrian state media say - Reuters",
        "description": "Israeli airstrikes killed 16 people in western Syria and wounded dozens more overnight, Syrian state media reported on Monday, the deadliest Israeli attack reported by Syrian authorities since the Iranian embassy compound in Damascus was hit in April.",
        "url": "https://www.reuters.com/world/middle-east/syrian-air-defences-confront-aggression-central-region-2024-09-08/",
        "urlToImage": "https://www.reuters.com/resizer/v2/466BJJQ7PVGY5O53NZ3KL65MHM.png?auth=b9c3bf166c40a6778eb5672993fde7c30a15f48329026674eff92afd8da1d0ca&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-09-09T10:30:00Z",
        "content": null
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "ANIRUDDHA GHOSAL",
        "title": "Flooding sweeps away a bus and a bridge collapses in Vietnam as storm deaths rise to 59 - The Associated Press",
        "description": "A bridge collapsed and a bus was swept away by flooding as more rain fell on Vietnam following a typhoon that has caused at least 59 deaths in the Southeast Asian country. Vietnam's state media said nine people died during the storm and at least 50 others hav…",
        "url": "https://apnews.com/article/yagi-vietnam-storm-flooding-landslides-fdc1ab23b354b8b63a9c92213c3ec316",
        "urlToImage": "https://dims.apnews.com/dims4/default/d28e666/2147483647/strip/true/crop/5669x3189+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4d%2F63%2Fbd204264734bfb1700e60566b12d%2F9cc5b5353887403b95b34ee98df318bc",
        "publishedAt": "2024-09-09T09:41:00Z",
        "content": "HANOI, Vietnam (AP) A bridge collapsed and a bus was swept away by flooding Monday as more rain fell following a typhoon Vietnam that has caused at least 59 deaths in the Southeast Asian country and … [+4032 chars]"
      },
      {
        "source": {
          "id": "bloomberg",
          "name": "Bloomberg"
        },
        "author": "Jorge Valero, Andrea Palasciano",
        "title": "Draghi Says EU in Danger Without Massive Spending and Joint Debt - Bloomberg",
        "description": "Former European Central Bank President Mario Draghi called on the EU to invest as much as €800 billion ($884 billion) extra a year and commit to the regular issuance of common bonds to make the bloc more competitive with China and the US.",
        "url": "https://www.bloomberg.com/news/articles/2024-09-09/draghi-says-eu-in-danger-without-massive-spending-and-joint-debt",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7VMD.5Ok_nc/v0/1200x800.jpg",
        "publishedAt": "2024-09-09T09:02:24Z",
        "content": "Former European Central Bank President Mario Draghi called on the EU to invest as much as 800 billion ($884 billion) extra a year and commit to the regular issuance of common bonds to make the bloc m… [+304 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Weather Channel"
        },
        "author": "The Weather Channel",
        "title": "Gulf Tropical System Poses Possible Hurricane Threat - The Weather Channel",
        "description": "A Gulf of Mexico disturbance could become a hurricane before striking Texas and Louisiana. Here's what to know.",
        "url": "https://weather.com/storms/hurricane/news/2024-09-08-francine-tropical-storm-gulf-coast",
        "urlToImage": "https://s.w-x.co/ptc6am.jpg",
        "publishedAt": "2024-09-09T09:00:00Z",
        "content": "At a Glance\r\n\u003Cul\u003E\u003Cli\u003EA disturbance in the southwest Gulf is likely to soon become a tropical storm.\u003C/li\u003E\u003Cli\u003EIt's forecast to strengthen into a hurricane as it tracks toward the upper Texas and Louisi… [+4112 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Paradise Afshar, Cindy Von Quednow",
        "title": "Residents flee as California and Nevada wildfires get dangerously close and forecasters warn of record heat - CNN",
        "description": "Raging wildfires in California and Nevada are forcing the mandatory evacuations of thousands of homes as forecasters warn of a few more days of record-breaking heat for parts of the West.",
        "url": "https://www.cnn.com/2024/09/08/weather/line-fire-california-and-nevada-wildfires-heat/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2170108232.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-09-09T08:53:00Z",
        "content": "Raging wildfires in California and Nevada have led to mandatory evacuations of thousands of homes, as forecasters warn of record heat in the West for the next few days.There are 14 active wildfires c… [+8782 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Tom's Guide"
        },
        "author": "Philip Michaels, Mark Spoonauer",
        "title": "Apple 'Glowtime' event live blog — iPhone 16, Apple Watch 10, AirPods 4 and more - Tom's Guide",
        "description": "All the latest Apple products as they're announced",
        "url": "https://www.tomsguide.com/phones/live/apple-glowtime-event-iphone-16",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/Giq4anshxqGG3Rge2ApzKN-1200-80.jpg",
        "publishedAt": "2024-09-09T07:34:22Z",
        "content": "2024-09-09T08:59:44.228ZA new Apple store on Apple event day\r\n(Image credit: Shutterstock)\r\nIf you happen to be at the Mall of Scandinavia in Stockholm, Sweden today, you'll notice Apple's opening a … [+14276 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Elizabeth Wolfe",
        "title": "Central Kentucky children told to stay home from school as I-75 shooting suspect evades capture for third day - CNN",
        "description": "Schools across a swath of central Kentucky have cancelled classes Monday and residents have been urged to remain on high alert as the deep-woods search for a man suspected of opening fire along I-75 enters it third day.",
        "url": "https://www.cnn.com/2024/09/09/us/kentucky-i-75-shooting-suspect-search-monday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24252007029495.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-09-09T07:32:00Z",
        "content": "Schools across a swath of central Kentucky have cancelled classes Monday and residents have been urged to remain on high alert as the deep-woods search for a man suspected of opening fire along I-75 … [+6347 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "",
        "title": "Overreactions after Week 1 of the NFL season: Kirk Cousins benched already? Cowboys made mistake paying Dak? - CBS Sports",
        "description": "Overreactions and reality checks for the Week 1 Sunday slate",
        "url": "https://www.cbssports.com/nfl/news/overreactions-after-week-1-of-the-nfl-season-kirk-cousins-benched-already-cowboys-made-mistake-paying-dak/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/09/09/89477968-350b-4857-81ac-252f2ed23668/thumbnail/1200x675/3121093626a7e9ed29a9471dd65559b4/kirk-cousins.jpg",
        "publishedAt": "2024-09-09T06:39:00Z",
        "content": "The first Sunday afternoon slate of the NFL season is completed, with some wild results. The Miami Dolphins came back to beat the Jacksonville Jaguars, the Cincinnati Bengals were upset by the New En… [+5768 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ScienceAlert"
        },
        "author": "ScienceAlert",
        "title": "US Confirms First Human Case of Bird Flu With No Known Animal Trace - ScienceAlert",
        "description": null,
        "url": "https://www.sciencealert.com/us-confirms-first-human-case-of-bird-flu-with-no-known-animal-trace",
        "urlToImage": null,
        "publishedAt": "2024-09-09T06:03:14Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Dan Wetzel",
        "title": "Lions' season of hope is full speed ahead after opening with an electric overtime win vs. Rams - Yahoo Sports",
        "description": "Sunday's win was the start of what many expect to be a season of thrilling victories leading, eventually, to a Lombardi Trophy; or at least again something...",
        "url": "https://sports.yahoo.com/lions-season-of-hope-is-full-speed-ahead-after-opening-with-an-electric-overtime-win-vs-rams-055936706.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/KXTdki.v6LXPi6_k_B60CQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/6e124110-6e6f-11ef-97ff-a4977a41fc7a",
        "publishedAt": "2024-09-09T05:59:36Z",
        "content": "DETROIT They say humans have inhabited this area for about 11,000 years, but it wasnt until Sunday that any of them from the tailgates of Eastern Market to the bars of Corktown could stare into a fre… [+5062 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "DW (English)"
        },
        "author": "Deutsche Welle",
        "title": "Boeing offers 25% pay rise to avoid strike - DW (English)",
        "description": "The aviation giant and a local labor union have agreed to the deal after workers threatened a crippling strike. The company has suffered major financial losses following a series of fatal crashes involving its 737 MAX.",
        "url": "https://www.dw.com/en/boeing-offers-25-pay-rise-to-avoid-strike/a-70167370",
        "urlToImage": "https://static.dw.com/image/69527692_6.jpg",
        "publishedAt": "2024-09-09T05:54:57Z",
        "content": "Boeing has reached a tentative deal with workers to avoid a major strike, the aircraft maker said late on Sunday. The company conceded a 25% wage increase and a promise to build its next commercial a… [+2520 chars]"
      },
      {
        "source": {
          "id": "fox-news",
          "name": "Fox News"
        },
        "author": "Landon Mion",
        "title": "House Dems issue response to GOP report on Biden's withdrawal from Afghanistan - Fox News",
        "description": "The House Democrats on the Foreign Affairs Committee released their own memo on President Biden's chaotic 2021 withdrawal from Afghanistan after the GOP's report.",
        "url": "https://www.foxnews.com/politics/house-dems-issue-response-gop-report-bidens-withdrawal-from-afghanistan",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/01/baby-fence-kabul.png",
        "publishedAt": "2024-09-09T05:26:00Z",
        "content": "The House Democrats on the Foreign Affairs Committee released their own memo on President Biden's chaotic 2021 withdrawal from Afghanistan after committee Republicans released a report criticizing th… [+4379 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "ANDREW DALTON",
        "title": "'Shogun' wins record-breaking 14 Emmys at Creative Arts ceremony as Jamie Lee Curtis gets her first - The Associated Press",
        "description": "“Shogun” won a whopping 14 times at the Creative Arts Emmy Awards. That's the most Emmys ever won by a show for a single season. The two-night Creative Arts Emmys held this weekend are a precursor to the main Emmy Awards coming up on Sept. 15, when “Shogun,” …",
        "url": "https://apnews.com/article/emmys-shogun-creative-arts-jamie-lee-curtis-641b33fcad195467a39df91ce673d32f",
        "urlToImage": "https://dims.apnews.com/dims4/default/9a22273/2147483647/strip/true/crop/3470x1952+0+177/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F41%2F55%2F2fb3044109a15b2b315a1eaf7e41%2F42fa1399ace2456aaeee928719d3deb6",
        "publishedAt": "2024-09-09T05:20:00Z",
        "content": "LOS ANGELES (AP) Shogun won the most Emmys ever for a single season of a television series with 14 at the Creative Arts Emmy Awards on Sunday night, while The Bear won seven including best guest actr… [+3465 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "MATTHEW BARAKAT",
        "title": "Google faces new antitrust trial after ruling declaring search engine a monopoly - Yahoo Finance",
        "description": "One month after a judge declared Google's search engine an illegal monopoly, the tech giant faces another antitrust lawsuit that threatens to break up the...",
        "url": "https://finance.yahoo.com/news/google-faces-antitrust-trial-ruling-044756972.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/JGCnPLABNlYQg8wubX2rOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDE-/https://media.zenfs.com/en/ap_finance_articles_694/e63fc11fde585260045b235389e18c5b",
        "publishedAt": "2024-09-09T04:47:00Z",
        "content": "ALEXANDRIA, Va. (AP) One month after a judge declared Google's search engine an illegal monopoly, the tech giant faces another antitrust lawsuit that threatens to break up the company, this time over… [+5199 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Variety"
        },
        "author": "Brent Lang",
        "title": "Bruce Springsteen Contemplates Mortality With Toronto Film Festival Documentary ‘Road Diary’: ‘If I Went Tomorrow, It’s OK. What a F—ing Ride!’ - Variety",
        "description": "Bruce Springsteen debuted the contemplative documentary 'Road Diary' at the Toronto Film Festival while talking about his own mortality.",
        "url": "https://variety.com/2024/film/markets-festivals/bruce-springsteen-mortality-toronto-film-festival-new-documentary-road-diary-e-street-band-premiere-1236137502/",
        "urlToImage": "https://variety.com/wp-content/uploads/2020/04/GettyImages-2170891467-e1725856901346.jpg?crop=0px%2C48px%2C2125px%2C1195px&resize=1000%2C563",
        "publishedAt": "2024-09-09T04:26:00Z",
        "content": "Toronto welcomed “The Boss” on Sunday night.\r\nBut it was a more contemplative Bruce Springsteen on display at the Roy Thomson Hall for the world premiere of “Road Diary: Bruce Springsteen and The E S… [+3702 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "KEVIN McGILL",
        "title": "Grief, pain, hope and faith at church services following latest deadly school shooting - The Associated Press",
        "description": "Grief, pain, hope and faith permeated church services Sunday in an Atlanta area community coping with the nation’s latest deadly school shooting. There were prayers, hymns, sermons and at one church, a first-person account of the tragedy. Brooke Lewis-Slamkov…",
        "url": "https://apnews.com/article/apalachee-high-school-georgia-shooting-church-services-bb424c69ba42cf9fd0c9ce62b6503f21",
        "urlToImage": "https://dims.apnews.com/dims4/default/fcff54f/2147483647/strip/true/crop/3449x1940+0+180/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbb%2F22%2Fef626422798dbbbd6bfcdab8b810%2F685837336ae44d74935ce6052f7805a9",
        "publishedAt": "2024-09-09T03:29:00Z",
        "content": "Grief, pain, hope and faith permeated church services Sunday as an Atlanta area communitys efforts to cope with the nations latest deadly school shooting included prayer, hymns and a first-person acc… [+3742 chars]"
      },
      {
        "source": {
          "id": "the-hill",
          "name": "The Hill"
        },
        "author": "Sarah Fortinsky",
        "title": "Former Venezuelan opposition candidate Edmundo González flees to Spain - The Hill",
        "description": "Former opposition presidential candidate Edmundo González fled Venezuela for asylum in Spain this weekend, less than a week after a local judge ordered his arrest. His departure is part of a negotiated deal with Nicolas Maduro’s government, The Associated Pre…",
        "url": "https://thehill.com/policy/international/4868959-former-venezuelan-opposition-candidate-edmundo-gonzalez-flees-to-spain/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/09/edmundo-gonzalez-ap.jpg?w=1280",
        "publishedAt": "2024-09-09T03:23:00Z",
        "content": "Skip to content\r\nFormer opposition presidential candidate Edmundo González fled Venezuela for asylum in Spain this weekend, less than a week after a local judge ordered his arrest.\r\nHis departure is … [+1676 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Associated Press",
        "title": "Explosion kills at least 48 people as fuel tanker collides with truck in Nigeria - CNN",
        "description": "A fuel tanker collided head-on with another truck in Nigeria on Sunday causing an explosion that killed at least 48 people, the country’s emergency response agency said.",
        "url": "https://www.cnn.com/2024/09/08/africa/fuel-tanker-explosion-nigeria-intl-latam/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/screen-shot-2024-09-08-at-5-44-13-pm.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-09-09T02:59:00Z",
        "content": "ABUJA, NigeriaAssociated Press\r\n  — \r\nA fuel tanker collided head-on with another truck in Nigeria on Sunday causing an explosion that killed at least 48 people, the countrys emergency response agenc… [+1077 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MacRumors"
        },
        "author": "Eric Slivka",
        "title": "New AirPods Max With Improved Audio and USB-C Expected Tomorrow - MacRumors",
        "description": "Bloomberg's Mark Gurman is sharing some last-minute predictions tonight regarding what we can expect to see at tomorrow's \"It's...",
        "url": "https://www.macrumors.com/2024/09/08/airpods-max-usb-c-glowtime-apple-event/",
        "urlToImage": "https://images.macrumors.com/t/WK5DbHLLlKpcHBnnm2W5kAFNcYc=/2500x/article-new/2022/12/AirPods-Max-Gen-2-Feature-Red.jpg",
        "publishedAt": "2024-09-09T02:31:28Z",
        "content": "Bloomberg's Mark Gurman is sharing some last-minute predictions tonight regarding what we can expect to see at tomorrow's \"It's Glowtime\" Apple event, and in addition to his claim that the Apple Watc… [+1024 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Kevin Dotson, Ben Morse",
        "title": "Miami-Dade police officer placed on administrative duty after Dolphins star Tyreek Hill detained before game - CNN",
        "description": "The Miami-Dade Police Department placed an officer on administrative leave Sunday after Miami Dolphins star Tyreek Hill was detained prior to the start of the season-opening game.",
        "url": "https://www.cnn.com/2024/09/08/sport/tyreek-hill-detained-miami-dolphins-nfl-spt-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2166203682.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-09-09T02:31:00Z",
        "content": "The Miami-Dade Police Department placed an officer on administrative leave Sunday after Miami Dolphins star Tyreek Hill was detained prior to the start of the season-opening game.\r\nOn Sunday morning,… [+6848 chars]"
      }
    ]
    
    // componentDidMount is react ;life cycle method which is used in this frist construnctor will run then render and then cdm will run
  constructor(){
    super();
   
    console.log("hello i am constructor from news component");
    
    this.state={
     articals:this.articals,
     loading:false,
     page:1
       }
       document.body.style.backgroundColor="#0dcaf030";
       document.title="News App";
  }
  //  async componentDidMount(){
  //   let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=9d4fe4380aaf4bb692803b0ee9492fcb";
  //   let data= await fetch(url);
  //   let paraData= await data.json()
  //    console.log(paraData);
  //   //  this.setState({articals:paraData.articals})
  // }

  //  async componentDidMount()
  //  {
  //   fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=9d4fe4380aaf4bb692803b0ee9492fcb").then((response)=>response.json())
  //   .then((json)=>{
  //     this.setState({articals:json.articals,
  //       loading:false
  //     });
  //   })
  // }
  
  // handleprviousclick=async()=>{
  // console.log("prevois");
  // let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=9d4fe4380aaf4bb692803b0ee9492fcb${this.state.page-1}pageSize=20`;
  //   let data= await fetch(url);
  //   let paraData= await data.json()
  //    console.log(paraData);
  //    this.setState({
  //     page:this.state.page-1,
  //   articals:paraData.articals
  //    })
  // }
  
 handlenextclick= async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=9d4fe4380aaf4bb692803b0ee9492fcb$`;
    let data= await fetch(url);
    let paraData= await data.json()
     console.log(paraData);
     this.setState({
      page:this.state.page+1,
    articals:paraData.articals
     })
     
 }
//   console.log('next');
//   let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=9d4fe4380aaf4bb692803b0ee9492fcb&page=2${this.state.page+1}pageSize=20`;
//   let data= await fetch(url);
//   let paraData= await data.json()
//    console.log(paraData);
  
  render() {
    console.log("render");
    return (
    <div className='container my-1 '>
      <h1 className='text-center' style={{marginTop:'90px'}}>News-Top Headlines</h1>
         
      <div className='row'>
      {this.state.articals.map((element)=>{
         return <div className='col md-4 'key={element.url}>
      <NewsItems  tittle={element.title?element.title.slice(0,45):""} discription={element.description?element.description.slice(0,88):""}imageurl={element.urlToImage} newsUrl={element.url}
      author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
      })}
        {/* md-4 will allow to take equal space it's just bootstrap css nothing more */}
       </div>
        
      </div>
    )
  }
}

export default News
