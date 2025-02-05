import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class Technology extends Component {
    articals=[
        {
          "source": {
            "id": null,
            "name": "Nintendo Life"
          },
          "author": "Jim Norman",
          "title": "Poll: With 'Switch 2' Rumours Swirling, Will There Be A September Direct This Year? - Nintendo Life",
          "description": "Time's a-ticking",
          "url": "https://www.nintendolife.com/news/2024/09/poll-with-switch-2-rumours-swirling-will-there-be-a-september-direct-this-year",
          "urlToImage": "https://images.nintendolife.com/6794ec306a9f0/1280x720.jpg",
          "publishedAt": "2024-09-17T13:51:53Z",
          "content": "Image: Nintendo Life\r\nIt's a fool's errand to try and predict Nintendo's plans but come with us as we don our red noses and white facepaint because we're about to do just that.\r\nIt's September, and t… [+3886 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Tim Hardwick",
          "title": "First iPhone 16 Pro Unboxing Video Shared Online - MacRumors",
          "description": "The first iPhone 16 Pro unboxing video has been shared on Weibo (via Majin Bu), revealing Apple's new packaging design for its latest flagship...",
          "url": "https://www.macrumors.com/2024/09/17/first-iphone-16-pro-unboxing-video-shared-online/",
          "urlToImage": "https://images.macrumors.com/t/Cl0rulH1Gcf-xSs4BvbDXrRn8p4=/1920x/article-new/2024/09/iphone-16-pro-unboxing.jpg",
          "publishedAt": "2024-09-17T13:25:46Z",
          "content": "The first iPhone 16 Pro unboxing video has been shared on Weibo (via Majin Bu), revealing Apple's new packaging design for its latest flagship smartphone.\r\nWith Apple keen to promote its environmenta… [+1295 chars]"
        },
        
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "Wes Davis",
          "title": "Why is Apple sleeping on the AirPods Max? - The Verge",
          "description": "Apple’s AirPods Max got USB-C and new colors, but they’re really just the same old headphones they ever were, and that’s odd.",
          "url": "https://www.theverge.com/2024/9/17/24242378/airpods-max-usb-c-unchanged-missing-features",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/5Fg2WoApmhaDFTj5-vzuTiN5OLo=/0x0:4726x3027/1200x628/filters:focal(2363x1514:2364x1515)/cdn.vox-cdn.com/uploads/chorus_asset/file/25617254/Sleeping_on_AirPods_Max.png",
          "publishedAt": "2024-09-17T11:00:00Z",
          "content": "Why is Apple sleeping on the AirPods Max?\r\nWhy is Apple sleeping on the AirPods Max?\r\n / The new AirPods Max got USB-C and not much else. \r\nByWes Davis, a weekend editor who covers the latest in tech… [+3969 chars]"
        },
        
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Zak Doffman",
          "title": "Apple’s Update Decision—Bad News Confirmed For Millions Of iPhone Users - Forbes",
          "description": "Apple’s iOS 18: what you need to know before you use iMessage’s biggest ever update.",
          "url": "https://www.forbes.com/sites/zakdoffman/2024/09/17/apples-ios-18-update-new-warning-for-millions-of-iphone-15-iphone-16-users/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65744e9437fe0bbac67751bf/0x0.jpg?format=jpg&crop=2007,1116,x366,y602,safe&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-09-17T08:45:00Z",
          "content": "iOS 18 comes with bad news for users.\r\nNurPhoto via Getty Images\r\nAs hundreds of millions of iPhone users update their devices to iOS 18, tinting their home screens and navigating their new Photos ap… [+5069 chars]"
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "Jess Weatherbed",
          "title": "Setapp Mobile’s open beta adds more apps for European iPhone users - The Verge",
          "description": "The Setapp Mobile alternative iOS app marketplace is now available in open beta for iPhone users in the EU, featuring 50 productivity-focused apps at launch.",
          "url": "https://www.theverge.com/2024/9/17/24243950/setapp-mobile-alternative-ios-app-store-eu-open-beta",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/yp7AIEGWC_9j8P-zBTbaUbmLULQ=/85x70:2429x1536/1200x628/filters:focal(1270x800:1271x801)/cdn.vox-cdn.com/uploads/chorus_asset/file/25619505/Setapp_Mobile_Focused_Work.png",
          "publishedAt": "2024-09-17T08:00:00Z",
          "content": "Setapp Mobiles open beta adds more apps for European iPhone users\r\nSetapp Mobiles open beta adds more apps for European iPhone users\r\n / You dont need an invite to download MacPaws alternative iOS ap… [+2056 chars]"
        },
        
        {
          "source": {
            "id": null,
            "name": "Forbes"
          },
          "author": "Davey Winder",
          "title": "Hackers Force Chrome Users To Hand Over Google Passwords. Here’s How - Forbes",
          "description": "Hackers are using a clever Chrome browser lockdown attack to force users into revealing their Google account credentials. Here’s how to stop them.",
          "url": "https://www.forbes.com/sites/daveywinder/2024/09/17/hackers-force-chrome-users-to-hand-over-google-passwords-heres-how/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/615ffde5f265030feaa3fe32/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-09-17T04:47:00Z",
          "content": "StealC malware hackers force Chrome users to reveal Google password\r\nNurPhoto via Getty Images\r\nUpdate, Sept. 17, 2024: This story, originally published Sept. 15, now includes details of more credent… [+9439 chars]"
        },
        {
          "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
          },
          "author": "Maxwell Zeff",
          "title": "Slack is turning into an AI agent hub. Should it? - TechCrunch",
          "description": "The head of Slack, Denise Dresser, tells TechCrunch she is shifting the business chat platform into a \"work operating system,\" specifically by making",
          "url": "https://techcrunch.com/2024/09/16/slack-is-turning-into-an-ai-agent-hub-should-it/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/09/GettyImages-2097488963.jpg?resize=1200,800",
          "publishedAt": "2024-09-17T00:01:37Z",
          "content": "The head of Slack, Denise Dresser, tells TechCrunch she is shifting the business chat platform into a “work operating system,” specifically by making Slack a hub for AI applications from Salesforce, … [+4577 chars]"
        },
        {
          "source": {
            "id": "ign",
            "name": "IGN"
          },
          "author": "Eric Song",
          "title": "Today Only: Get a Pair of Apple AirPods Max Headphones for Only $299.99 at Best Buy - IGN",
          "description": "These are Geek Squad certified refurbished with a 90-day warranty",
          "url": "https://www.ign.com/articles/today-only-get-a-pair-of-apple-airpods-max-headphones-for-only-29999-at-best-buy",
          "urlToImage": "https://assets-prd.ignimgs.com/2024/09/16/airpodsmax-1726521564981.jpg?width=1280",
          "publishedAt": "2024-09-16T22:35:46Z",
          "content": "The Apple AirPods Max is normally priced considerably higher than its stiffest competition ($549 vs $349 for the Bose QuietComfort Ultra or Sony WH-1000XM5), but right now there's a way to get it for… [+2094 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Anusuya Lahiri",
          "title": "Intel Missed Out on PlayStation 6 Chip Deal to AMD: Report - Yahoo Finance",
          "description": "In 2022, Intel Corp (NASDAQ:INTC) lost out to Advanced Micro Devices (NASDAQ:AMD), a multiyear Sony Group Corp (NYSE:SONY) PlayStation 6 chip deal, according...",
          "url": "https://finance.yahoo.com/news/intel-missed-playstation-6-chip-220552345.html/",
          "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
          "publishedAt": "2024-09-16T22:05:52Z",
          "content": "In 2022, Intel Corp (NASDAQ:INTC) lost out to Advanced Micro Devices (NASDAQ:AMD), a multiyear Sony Group Corp (NYSE:SONY) PlayStation 6 chip deal, according to a Reuters exclusive report.\r\nThe sourc… [+2268 chars]"
        },
        {
          "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
          },
          "author": "Andrew Cunningham",
          "title": "Apple software leaks new Mac mini with five USB-C ports ahead of rumored event - Ars Technica",
          "description": "Apple often launches Macs and iPads in October, after the iPhone dust settles.",
          "url": "https://arstechnica.com/gadgets/2024/09/report-big-batch-of-m4-macs-and-cheaper-ipads-on-tap-for-october-apple-event/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/09/IMG_1415-760x380.jpeg",
          "publishedAt": "2024-09-16T20:35:57Z",
          "content": "Enlarge/ Apple's M3 Max-powered 16-inch MacBook Pro. New Pro laptops and some desktops could be on tap for later this fall.\r\n44\r\nApple's newest iPhones and Apple Watches don't come out until later th… [+2629 chars]"
        },
        
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Joe Rossignol",
          "title": "Apple Watch's Sleep Apnea Detection Feature Now Available in More Than 150 Countries - MacRumors",
          "description": "Apple released watchOS 11 today following months of beta testing. A key new health-related feature included in the software update is sleep apnea...",
          "url": "https://www.macrumors.com/2024/09/16/apple-watch-sleep-apnea-feature-150-countries/",
          "urlToImage": "https://images.macrumors.com/t/DXkv_GQJAPmEI593iXdVXfek0Us=/2000x/article-new/2024/09/sleep-apnea-detection-apple-watch.jpg",
          "publishedAt": "2024-09-16T20:17:28Z",
          "content": "Apple released watchOS 11 today following months of beta testing. A key new health-related feature included in the software update is sleep apnea detection, which is available starting today on the A… [+1731 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Kotaku"
          },
          "author": "Ethan Gach",
          "title": "Next Battlefield Returns To Modern Day, Wants To Be Like Battlefield 3 - Kotaku",
          "description": "Franchise head Vince Zampella says the sequel is already in full production",
          "url": "https://kotaku.com/battlefield-6-modern-day-specialists-classes-release-da-1851649399",
          "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/134ef31205da08b2d97198da22eae35c.jpg",
          "publishedAt": "2024-09-16T19:55:00Z",
          "content": "The next Battlefield promises a return to the Call of Duty competitors core after 2021's futuristic sequel drove many longtime fans away. The man in charge, longtime Respawn head Vince Zampella, cite… [+2276 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Arin Waichulis",
          "title": "Today’s release of macOS Sequoia brings 70+ new security fixes - 9to5Mac",
          "description": "macOS Sequoia has officially launched with new features and improvements such as window tiling, iPhone Mirroring, the new Password app,...",
          "url": "https://9to5mac.com/2024/09/16/todays-release-of-macos-sequoia-brings-70-new-security-fixes/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/09/Sequoia-security.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-09-16T19:41:00Z",
          "content": "macOS Sequoia has officially launched with new features and improvements such as window tiling, iPhone Mirroring, the new Password app, and more. But under the hood, Apple delivered a staggering amou… [+36912 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Daniel Howley",
          "title": "Microsoft bringing more AI technology to its productivity software as it works to monetize investments - Yahoo Finance",
          "description": "Microsoft is bringing more AI power to its productivity apps as it seeks to monetize its vast investments in the technology.",
          "url": "https://finance.yahoo.com/news/microsoft-bringing-more-ai-technology-to-its-productivity-software-as-it-works-to-monetize-investments-192656899.html/",
          "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
          "publishedAt": "2024-09-16T19:26:56Z",
          "content": "Microsoft (MSFT) is pouring more of its AI-powered Copilot technology into its Microsoft 365 productivity products, including Excel, PowerPoint, Outlook, and Teams. The updates, which include the abi… [+4219 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Zac Hall",
          "title": "AirPods are having their Apple Watch moment - 9to5Mac",
          "description": "Some seriously impressive new health-related features are coming to AirPods Pro 2. The customer reach of these features will be...",
          "url": "https://9to5mac.com/2024/09/16/airpods-health/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/AirPods-Pro-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2024-09-16T18:52:00Z",
          "content": "Some seriously impressive new health-related features are coming to AirPods Pro 2. The customer reach of these features will be especially great for the same reason Apple Watch impacts so many lives.… [+1671 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Detroit Free Press"
          },
          "author": "Adrienne Roberts",
          "title": "New Mustang GTD is 'fastest, most powerful' in Mustang history, Ford says - Detroit Free Press",
          "description": "Ford said the 2025 Mustang GTD \"sets a new performance bar\" with 815 horsepower. First round of applications to buy is already closed.",
          "url": "https://www.freep.com/story/money/cars/ford/2024/09/16/ford-2025-mustang-gtd-horsepower/75250616007/",
          "urlToImage": "https://www.freep.com/gcdn/authoring/authoring-images/2024/09/16/PDTF/75251405007-2025-mustang-gtd-1.jpg?crop=6083,3423,x0,y316&width=3200&height=1801&format=pjpg&auto=webp",
          "publishedAt": "2024-09-16T18:51:25Z",
          "content": "Ford Motor Co. said Monday its new 2025 Mustang GTD \"sets a new performance bar\" with 815 horsepower, 664 pound-feet of torque and a top speed of 202 mph, the most of any street-legal Mustang ever.\r\n… [+1502 chars]"
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
           document.title="Technology News";
      }
      render() {
        console.log("render");
        return (
        <div className='container my-1 '>
          <h1 className='text-center'style={{marginTop:'90px'}}>News--Top Technology Headlines</h1>
  
          <div className='row'>
          {this.state.articals && this.state.articals.map((element)=>{
             return <div className='col md-4 'key={element.url}>
          <NewsItems  tittle={element.title?element.title.slice(0,45):""} discription={element.description?element.description.slice(0,88):""}imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          <div className="input-group input-group-sm mb-3">
 
 
</div>
            </div>
            
          })}
            {/* md-4 will allow to take equal space it's just bootstrap css nothing more */}
           </div>
            
          </div>
        )
      }
    }

export default Technology
