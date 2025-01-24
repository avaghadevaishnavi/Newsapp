import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class Science extends Component {
    articals=[ {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Eric Lagatta, Julia Gomez",
          "title": "Polaris Dawn mission comes to end with SpaceX Dragon landing off Florida coast - USA TODAY",
          "description": "The SpaceX Dragon capsule made a water landing Sunday in Florida, bringing to an end the historic commercial Polaris Dawn mission.",
          "url": "https://www.usatoday.com/story/news/nation/2024/09/15/spacex-dragon-florida-coast-polaris-dawn-astronauts/75192254007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/15/USAT/75240348007-2171345628.jpg?crop=1998,1123,x1,y0&width=1998&height=1123&format=pjpg&auto=webp",
          "publishedAt": "2024-09-17T13:04:11Z",
          "content": "\u003Cul\u003E\u003Cli\u003EWhen the Dragon spacecraft launched Tuesday atop a Falcon 9 rocket, the vehicle carried the private astronauts further into space than humans have reached in more than half a century.\u003C/li\u003E\u003Cli… [+7155 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Ashlyn Messier",
          "title": "Possible ancient meteor crater found by Canadian man planning trip using Google Maps - Fox News",
          "description": "While a Quebec man was planning a camping trip, he stumbled upon a strange pit. After reaching out to professional, it was determined his find could be a crater left by a space rock.",
          "url": "https://www.foxnews.com/world/possible-ancient-meteor-crater-found-canadian-man-planning-trip-using-google-maps",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/iStock-1548715330.jpg",
          "publishedAt": "2024-09-17T12:17:00Z",
          "content": "If you see something unusual, don't overlook it. It could just be an ancient discovery. \r\nJoël Lapointe from Quebec, Canada, was investigating the Côte-Nord region ahead of a camping trip using Googl… [+2128 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Space.com"
          },
          "author": "Daisy Dobrijevic",
          "title": "Auroras galore! Severe geomagnetic storm sparks stunning northern lights across US (photos) - Space.com",
          "description": "A powerful G4 geomagnetic storm sparks widespread auroras, lighting up skies across the U.S. with stunning northern lights displays.",
          "url": "https://www.space.com/severe-geomagnetic-storm-auroras-northern-lights-harvest-moon",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/Pj9UvHSuGmdDJurxrjXuQV-1200-80.jpg",
          "publishedAt": "2024-09-17T11:38:02Z",
          "content": "Better late than never. \r\nRolling in about 6 hours later than predicted, a huge plume of plasma and magnetic field from the sun, known as a coronal mass ejection\r\n (CME) slammed into Earth, triggerin… [+6199 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Space.com"
          },
          "author": "Daisy Dobrijevic",
          "title": "Don't miss the Harvest Moon Supermoon lunar eclipse tonight! Here's what to expect - Space.com",
          "description": "September's full moon will put on quite the show on the evening of Sept. 17. Not only are we treated to a slightly larger-than-average \"supermoon\" but also a partial lunar eclipse.",
          "url": "https://www.space.com/lunar-eclipse-september-harvest-moon-supermoon-what-to-expect",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/6Uzx2eCytpUghRNcLx36RN-1200-80.jpg",
          "publishedAt": "2024-09-17T10:00:45Z",
          "content": "On the evening of Sept. 17, a partial lunar eclipse will turn the moon a murky red-brown color when Earth's shadow descends upon the lunar surface.\r\nThe partial lunar eclipse\r\n will be visible from m… [+3920 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NASA"
          },
          "author": null,
          "title": "NASA’s Artemis II Crew Uses Iceland Terrain for Lunar Training - Science@NASA",
          "description": "At first glance, it seems like a scene from an excursion on the Moon’s surface…except the people are in hiking gear, not spacesuits.",
          "url": "https://science.nasa.gov/missions/artemis/nasas-artemis-ii-crew-uses-iceland-terrain-for-lunar-training/",
          "urlToImage": "https://science.nasa.gov/wp-content/uploads/2024/09/iceland-artemisiitraining-b.jpg?w=1024",
          "publishedAt": "2024-09-17T08:04:31Z",
          "content": "Icelands geology, like the Moons, includes rocks called basalts and breccias. Basalts are dark, fine-grained, iron-rich rocks that form when volcanic magma cools and crystalizes quickly. In Iceland, … [+383 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Live Science"
          },
          "author": "Harry Baker",
          "title": "Earth from space: Ghostly figure emerges in Greenland ice after underground lake collapses - Livescience.com",
          "description": "In 2011, a ghostly depression, known as \"the mitten,\" appeared on the surface of and ice sheet in Greenland after the unprecedented collapse of a concealed subglacial lake.",
          "url": "https://www.livescience.com/planet-earth/arctic/earth-from-space-ghostly-figure-emerges-in-greenland-ice-after-underground-lake-collapses",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/CQTMGH7g2QEuvw2V544rGL-1200-80.jpg",
          "publishedAt": "2024-09-17T07:00:00Z",
          "content": "Where is it? Flade Isblink ice cap, northeast Greenland [81.298483222, -16.071359543]\r\nWhat's in the photo? A ghostly-looking indentation in the snow\r\nWhich satellite took the photo? Landsat 8\r\nWhen … [+3053 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "After 8 Billion Years, Mysterious Deep Space Radio Signal Reaches Earth - NDTV",
          "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
          "url": "https://www.ndtv.com",
          "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
          "publishedAt": "2024-09-17T04:18:26Z",
          "content": null
        },
       
        {
          "source": {
            "id": null,
            "name": "KTLA Los Angeles"
          },
          "author": "Cameron Kiszla",
          "title": "Huge fossil beds found during L.A. County high school construction - KTLA Los Angeles",
          "description": "A Los Angeles County high school is home to two huge deposits of fossils that experts are now using to see what the world was like hundreds of thousands and millions of years ago. While constructing new buildings at San Pedro High School, researchers found tw…",
          "url": "https://ktla.com/news/local-news/huge-fossil-bed-found-during-l-a-county-high-school-construction-lat/",
          "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2024/09/GettyImages-167394618.jpg?w=1280",
          "publishedAt": "2024-09-16T22:05:40Z",
          "content": "A Los Angeles County high school is home to two huge deposits of fossils that experts are now using to see what the world was like hundreds of thousands and millions of years ago.\r\nWhile constructing… [+1170 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Ashley Strickland",
          "title": "A clogged thruster could have ended Voyager 1’s interstellar mission. Engineers just saved it - CNN",
          "description": "Engineers have mitigated an issue with Voyager 1’s thrusters, enabling the mission to stay in touch with mission controllers on Earth and send back unique data.",
          "url": "https://www.cnn.com/2024/09/16/science/voyager-1-thruster-issue/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/jpegpia17462.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-09-16T21:37:00Z",
          "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nEngineers at NASA have successfully fired up a set of … [+5320 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Space.com"
          },
          "author": "Samantha Mathewson",
          "title": "Gas and stars 'stolen' from galaxy in striking European Southern Observatory photo and video - Space.com",
          "description": "The galaxy appears to be losing its gas through a process known as ram pressure stripping.",
          "url": "https://www.space.com/cosmic-robbery-galaxy-cluster-eso-image",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/5JohttcYUTxPTQvnL8SYg7-1200-80.jpg",
          "publishedAt": "2024-09-16T20:30:32Z",
          "content": "A galaxy is robbed of its gas and stars in a new image from the European Southern Observatory (ESO). \r\nThe spiral galaxy\r\n, called NGC 3312, lies within a large cluster known as Hydra I. Located over… [+2925 chars]"
        },
        
        {
          "source": {
            "id": null,
            "name": "KSNT News"
          },
          "author": "Colter Robinson",
          "title": "NASA issues alert for stadium sized asteroid passing earth Tuesday - Yahoo! Voices",
          "description": "KANSAS (KSNT) – The NASA Jet Propulsion Laboratory has issued alerts for five asteroids approaching earth. One asteroid is described as ‘stadium-size’ and will pass earth on Tuesday. The asteroid named ‘2024ON’ is approximately 950 feet in diameter, or about …",
          "url": "https://www.ksnt.com/news/national/nasa-issues-alert-for-stadium-sized-asteroid-passing-earth-tuesday/",
          "urlToImage": "https://www.ksnt.com/wp-content/uploads/sites/86/2024/06/667ee434967173.25106280.jpeg?w=1280",
          "publishedAt": "2024-09-16T19:12:28Z",
          "content": "KANSAS (KSNT) – The NASA Jet Propulsion Laboratory has issued alerts for five asteroids approaching earth. One asteroid is described as ‘stadium-size’ and will pass earth on Tuesday.\r\nThe asteroid na… [+1320 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Phys.Org"
          },
          "author": null,
          "title": "New video shows how tiny spacecraft will 'swarm' Proxima Centauri - Phys.org",
          "description": "Earlier this year, NASA selected a rather interesting proposal for Phase I development as part of their NASA Innovative Advanced Concepts (NIAC) program. It's known as Swarming Proxima Centauri, a collaborative effort between Space Initiatives Inc. and the In…",
          "url": "https://phys.org/news/2024-09-video-tiny-spacecraft-swarm-proxima.html",
          "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2024/new-video-shows-how-ti.jpg",
          "publishedAt": "2024-09-16T18:17:16Z",
          "content": "Earlier this year, NASA selected a rather interesting proposal for Phase I development as part of their NASA Innovative Advanced Concepts (NIAC) program. It's known as Swarming Proxima Centauri, a co… [+5706 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Live Science"
          },
          "author": "Kristina Killgrove",
          "title": "Rare skeletons up to 30,000 years old reveal when ancient humans went through puberty - Livescience.com",
          "description": "An analysis of around a dozen teenagers who lived during the Paleolithic reveals that they hit puberty around the same time modern teens do.",
          "url": "https://www.livescience.com/archaeology/rare-skeletons-up-to-30-000-years-old-reveal-when-ancient-humans-went-through-puberty",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/kbmZSQRhvHKjyspdye7S8U-1200-80.jpg",
          "publishedAt": "2024-09-16T17:51:49Z",
          "content": "Most ice age teens started puberty around the same time as humans in modern times do, according to archaeologists who studied the skeletons of adolescents who died in Europe between 10,000 and 30,000… [+5005 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "IFLScience"
          },
          "author": "Stephen Luntz",
          "title": "Hidden Structures Found Beneath Mars’ Ancient Ocean And Largest Mountain - IFLScience",
          "description": "Their density causes gravitational anomalies that have alerted us to their presence.",
          "url": "https://www.iflscience.com/hidden-structures-found-beneath-mars-ancient-ocean-and-largest-mountain-75978",
          "urlToImage": "https://assets.iflscience.com/assets/articleNo/75978/aImg/78907/martian-gravity-map-meta.png",
          "publishedAt": "2024-09-16T17:20:44Z",
          "content": "Sediments deposited during the time when Mars had a large ocean cover structures whose high densities have been detected in the process of gravity-mapping the planet. Their nature and cause remain a … [+3845 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Live Science"
          },
          "author": "Harry Baker",
          "title": "'Spiders on Mars' fully awakened on Earth for 1st time — and scientists are shrieking with joy - Livescience.com",
          "description": "Researchers have recreated the bizarre spider-like features seen on the surface of Mars for the first time ever. The breakthrough could help unravel further mysteries surrounding the static Martian arachnids.",
          "url": "https://www.livescience.com/space/mars/spiders-on-mars-fully-awakened-on-earth-for-1st-time-and-scientists-are-shrieking-with-joy",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/2No8FZYw7XWoDvVjjPQcMc-1200-80.jpg",
          "publishedAt": "2024-09-16T17:20:01Z",
          "content": "NASA scientists on Earth have recreated the creepy black \"spiders\" that litter the surface of Mars. The breakthrough left the researchers \"shrieking\" with joy and could help uncover further secrets a… [+4528 chars]"
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
           document.title="Science News";
           document.body.style.background="rgb(193 213 229)";
      }
      render() {
        console.log("render");
        return (
        <div className='container my-1 '>
          <h1 className='text-center'style={{marginTop:'90px'}}>News--Top Science headlines</h1>
            
          <div className='row'>
          {this.state.articals && this.state.articals.map((element)=>{
             return <div className='col md-4 'key={element.url}>
          <NewsItems  tittle={element.title?element.title.slice(0,45):""} discription={element.description?element.description.slice(0,88):""}imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.date} source={element.source.name}/>
            </div>
          })}
            {/* md-4 will allow to take equal space it's just bootstrap css nothing more */}
           </div>
            
          </div>
        )
      }
    }
export default Science
