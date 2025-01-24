import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class Health extends Component {
    articals=[
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": null,
          "title": "The vaccines you need to know about before you travel - CNN",
          "description": "While a mild stomach bug will likely affect most tourists at some point, there are more dangerous diseases travelers should know how to protect themselves against.",
          "url": "https://www.cnn.com/travel/what-vaccines-do-you-need-for-travel/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2032825189.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-09-17T13:56:00Z",
          "content": "Few things can ruin a vacation faster than illness.\r\nBut while a mild stomach bug will probably affect most travelers at some point, there are far more dangerous diseases including potentially lethal… [+10162 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Madeline Holcombe",
          "title": "Drinking 1 to 3 cups of coffee a day may protect heart health, new study finds - CNN",
          "description": "The caffeine in your coffee or tea might not just be a daily vice — it could be reducing your risk for heart disease, according to new research.",
          "url": "https://www.cnn.com/2024/09/17/health/caffeine-heart-health-study-wellness/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1480086475-restricted.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-09-17T13:22:00Z",
          "content": "Get inspired by a weekly roundup on living well, made simple. Sign up for CNNs Life, But Better newsletter for information and tools designed to improve your well-being\r\nA morning cup of coffee may d… [+4316 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Anumita Kaur",
          "title": "Norovirus sickens dozens on Hawaii hiking trail, forcing site’s closure - The Washington Post",
          "description": "The Kalalau Trail is closed until at least Thursday because of a norovirus outbreak, according to state officials. At least 50 people fell ill.",
          "url": "https://www.washingtonpost.com/travel/2024/09/17/norovirus-sickens-dozens-hawaii-hiking-trail-forcing-sites-closure/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6N6SI4MXYDDEHAFOHSLJFMRUCM_size-normalized.jpg&w=1440",
          "publishedAt": "2024-09-17T11:42:51Z",
          "content": "It was a hikers dream turned nightmare, Danielle Burr said.\r\nThe 32-year-old embarked on the Kalalau Trail on an ideal August day. The 11-mile trail, which Burr had hiked once before, runs along the … [+5074 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Erika Edwards",
          "title": "Virus that causes paralyzing illness is spiking in the U.S., wastewater data shows - Yahoo! Voices",
          "description": "The enterovirus D68 that sometimes paralyzes children is spreading in the U.S., raising worries about a possible rise in polio-like illnesses.",
          "url": "https://www.yahoo.com/news/virus-causes-paralyzing-illness-spiking-110000834.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8YjXth7vIRT2YHd8XeLi_g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/nbc_news_122/f9f9e94edc6c40239ef45384c5adf8a5",
          "publishedAt": "2024-09-17T11:00:00Z",
          "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nA… [+5675 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Mistakes meant Covid jab was given to clot victim Jack Last, report finds - BBC.com",
          "description": "Inquiry finds mistakes meant AstraZeneca vaccine was given to the 27-year-old, who died days later.",
          "url": "https://www.bbc.com/news/articles/cy5ylldp1l3o",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b1ba/live/cef929f0-74d0-11ef-b02d-c5f3b724a1ea.jpg",
          "publishedAt": "2024-09-17T10:44:15Z",
          "content": "A man who died after being given a Covid-19 vaccination should not have received the jab, according to an independent review.\r\nJack Last, 27, died from a blood clot after receiving the AstraZeneca va… [+5247 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Andrew Zaleski",
          "title": "Not ready for a knee replacement? You might be able to fix your cartilage instead. - The Washington Post",
          "description": "New techniques include a pellet made of coral and a hydrogel that can be pressed around the bone to help eliminate pain.",
          "url": "https://www.washingtonpost.com/business/interactive/2024/knee-replacement-cartilage-pain-coral-treatment/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O44P4QIRIJGOBAPZPDBWF42JBU.jpg&w=1200",
          "publishedAt": "2024-09-17T10:33:38Z",
          "content": "Alicia McHatton was in Kailua-Kona, on Hawaiis big island, when she received the phone call that would change her life.\r\nIt was April 2023, and for the previous eight months, McHatton, a neonatal nur… [+7762 chars]"
        },
        {
          "source": {
            "id": "axios",
            "name": "Axios"
          },
          "author": "Axios",
          "title": "Pregnancy changes the brain: study - Axios",
          "description": null,
          "url": "https://www.axios.com/2024/09/17/pregnancy-brain-changes-study",
          "urlToImage": null,
          "publishedAt": "2024-09-17T10:30:30Z",
          "content": null
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Meg Tirrell",
          "title": "GLP-1 pills are coming, and they could revolutionize weight-loss treatment - CNN",
          "description": "At least a dozen experimental weight-loss drugs designed to be taken as pills are working their way through clinical trials, with the most advanced now in the third and final stage of testing.",
          "url": "https://www.cnn.com/2024/09/17/health/glp-1-pills-weight-loss-treatment/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/weightlosspills.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-09-17T10:30:00Z",
          "content": "Jared Holz thought about taking one of the new GLP-1 drugs for weight loss for months before he actually filled the prescription. And even when he got the drug, he waited a month before using it.\r\nPa… [+6274 chars]"
        },
        {
          "source": {
            "id": "medical-news-today",
            "name": "Medical News Today"
          },
          "author": "Robby Berman",
          "title": "Endurance exercise can help the body store healthier fat - Medical News Today",
          "description": "Research in people with obesity or overweight has shown that long-term exercisers have belly fat with healthier properties than peers who do not exercise.",
          "url": "https://www.medicalnewstoday.com/articles/even-in-obesity-regular-exercise-turns-belly-fat-healthier",
          "urlToImage": "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/09/females-sport-teammates-1200-628-facebook.jpg",
          "publishedAt": "2024-09-17T10:27:54Z",
          "content": "\u003Cul\u003E\u003Cli\u003ERegular endurance exercise can improve the health of the fat-storing subcutaneous adipose tissue directly beneath the skin, says a new study from the University of Michigan.\u003C/li\u003E\u003Cli\u003EThis is p… [+5777 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "PsyPost"
          },
          "author": "Eric W. Dolan",
          "title": "Neuroscientists just discovered a weird effect on ketamine on the brain - PsyPost",
          "description": "Researchers found that ketamine increases redundant brain activity, especially in the alpha frequency band, leading to dissociative experiences. Portable EEG devices effectively tracked these changes, offering insights into how ketamine alters brain function …",
          "url": "https://www.psypost.org/neuroscientists-just-discovered-a-weird-effect-on-ketamine-on-the-brain/",
          "urlToImage": "https://www.psypost.org/wp-content/uploads/2024/09/wavy-brain-image.jpg",
          "publishedAt": "2024-09-17T10:02:53Z",
          "content": "Researchers have long been intrigued by ketamine’s ability to alter consciousness and its potential therapeutic uses, particularly in treating mood disorders. A recent study published in Translationa… [+8982 chars]"
        },
        
        
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "New XEC Covid variant starting to spread - BBC.com",
          "description": "It has some new mutations that might help it spread this autumn, scientists say.",
          "url": "https://www.bbc.com/news/articles/c1jddenj5p5o",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cf09/live/95c52c30-741f-11ef-9423-ff8d003051c7.jpg",
          "publishedAt": "2024-09-17T03:16:09Z",
          "content": "People have started catching a new Covid variant that could soon take off and become the dominant type, according to scientists. \r\nIdentified in Germany, in June, cases of the XEC variant have since … [+2647 chars]"
        },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": "Kerry Breen",
          "title": "This Florida dad felt fit and healthy — until a doctor said he needed immediate surgery - CBS News",
          "description": "When Phil Passen found a new doctor after the pandemic, he got some bad news about his congenital heart condition.",
          "url": "https://www.cbsnews.com/news/florida-dad-heart-surgery/",
          "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/09/13/19160863-c697-4bb5-8c31-3c20fa2719fe/thumbnail/1200x630/1b40c1047463035e58386fe7c4d60ec4/unknown-6.jpg?v=d2d77bee90bcafa285fd6d60bd8b3612",
          "publishedAt": "2024-09-17T00:13:38Z",
          "content": "For decades, Phil Passen was an active runner and boxer. He jogged dozens of miles per week and regularly took part in competitions, all while parenting his 9-year-old daughter and working in finance… [+5809 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WKBN.com"
          },
          "author": "Paul Wetzl",
          "title": "Are you sneezing more as the fall season approaches? - WKBN.com",
          "description": "The allergy season starts in the spring and slowly tapers off in the fall. For some, it seems like it never ends.",
          "url": "https://www.wkbn.com/weather/are-you-sneezing-more-as-the-fall-season-approaches/",
          "urlToImage": "https://www.wkbn.com/wp-content/uploads/sites/48/2024/09/Allergens-through-the-year.jpg?w=1280",
          "publishedAt": "2024-09-17T00:09:40Z",
          "content": "(WKBN) – If you are an allergy sufferer, you most likely spend close to half of the year going through phases of a runny nose, watery and itchy eyes, a scratchy throat, and sneezing.\r\nThe dry forecas… [+2727 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Kaitlin Reilly",
          "title": "Chemicals leaching from food packaging found in humans, new study shows. Experts call for more safety regulations. - Yahoo Life",
          "description": "Human exposure to chemicals, including forever chemicals or PFAS, from food packaging is widespread, according to the study. Experts call it \"concerning.\"",
          "url": "https://www.yahoo.com/lifestyle/chemicals-leaching-food-packaging-found-000042726.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/UnPRJUAbh7uqczhEC9Tk.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/a18db350-7462-11ef-9fff-a53b486ca194",
          "publishedAt": "2024-09-17T00:00:00Z",
          "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nC… [+6002 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WBAY"
          },
          "author": "Emily Beier",
          "title": "Nearly 300 confirmed cases of whooping cough in Wisconsin - WBAY",
          "description": "Wisconsin is seeing a growing number of whooping cough cases. So far this year, the state has four times the number of cases since last year.",
          "url": "https://www.wbay.com/2024/09/16/nearly-300-confirmed-cases-whooping-cough-wisconsin/",
          "urlToImage": "https://gray-wbay-prod.cdn.arcpublishing.com/resizer/v2/LM52VPMAQRBGFK4LD5RPNNE4JA.jpg?auth=155fd56c491d40ff496d3915315aa093b3a80b593ace8414ca39114385de1c75&width=1200&height=600&smart=true",
          "publishedAt": "2024-09-16T22:34:00Z",
          "content": "GREEN BAY, Wis. (WBAY) - Wisconsin is seeing a growing number of whooping cough cases. So far this year, the state has four times the number of cases since last year.\r\nNo deaths have been reported. D… [+2019 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WCVB Boston"
          },
          "author": "Jessica Brown",
          "title": "Mass. woman finds relief after rare heart disease diagnosis - WCVB Boston",
          "description": "The condition, known as cardiac amyloidosis is considered \"very rare\" in the United States, but one Mass. doctor believes it may be more common if more doctors looked for it.",
          "url": "https://www.wcvb.com/article/brigham-womens-hospital-amyloidosis-treatment/62230365",
          "urlToImage": "https://kubrick.htvapps.com/vidthumb/940b2c46-0fff-4f29-85e3-4782a3708c66/1fc1081e-e8c4-424d-961d-aa8e30b74397.jpg?crop=1xw:1.0xh;center,top&resize=1200:*",
          "publishedAt": "2024-09-16T21:47:00Z",
          "content": "BOSTON —It's been 10 years, but Goli Darabi still remembers how exhausted and short of breath she used to get.\r\n\"My life was miserable,\" she said. \"I couldn't do anything on my own. I completely lost… [+2229 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "KSAT San Antonio"
          },
          "author": "Spencer Heath",
          "title": "2 cats test positive for rabies in Comal County - KSAT San Antonio",
          "description": "Comal County Animal Control officials urge the public to avoid contact with wildlife after two cats tested positive for rabies.",
          "url": "https://www.ksat.com/news/local/2024/09/16/2-cats-test-positive-for-rabies-in-comal-county/",
          "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/SA4ISME5IRGZZNVBUGXJS6CVFI.jpg?_a=DATAfRfiZAA0",
          "publishedAt": "2024-09-16T21:23:06Z",
          "content": "COMAL COUNTY, Texas Comal County Animal Control officials urge the public to avoid contact with wildlife after two cats tested positive for rabies.\r\nThe cats were found on Sept. 6 near the intersecti… [+604 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Melissa Rudy",
          "title": "'Vaccine fatigue' blamed as roughly half of people in US will skip COVID and flu shots this year - Fox News",
          "description": "A growing number of U.S. adults are hesitant to get recommended vaccines this fall, a new survey found. Doctors discuss potential reasons and why it could be concerning.",
          "url": "https://www.foxnews.com/health/vaccine-fatigue-blamed-roughly-half-people-us-skip-covid-flu-shots",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/08/covid-vaccine-refusal.jpg",
          "publishedAt": "2024-09-16T20:35:00Z",
          "content": "A growing number of U.S. adults are hesitant to get recommended vaccines this fall, a new survey found.\r\nThe poll, which included 1,006 people, found that only 43% of respondents have gotten or plan … [+5557 chars]"
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
           document.title="Health News";
      }
      render() {
        console.log("render");
        return (
        <div className='container my-1 '>
          <h1 className='text-center'style={{marginTop:'90px'}}>News--Top Health Headlines</h1>
             <spinner/>
          <div className='row'>
          {this.state.articals && this.state.articals.map((element)=>{
             return <div className='col md-4 'key={element.url}>
          <NewsItems  tittle={element.title.slice(0,45)} discription={element.description?element.description.slice(0,88):""}imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
            {/* md-4 will allow to take equal space it's just bootstrap css nothing more */}
           </div>
            
          </div>
        )
      }
    }
export default Health
