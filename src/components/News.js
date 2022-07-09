import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Motoko Rich, Ben Dooley",
            "title": "Live Updates: Shinzo Abe Taken to Hospital After Apparently Being Shot - The New York Times",
            "description": "The former prime minister was wounded while giving a speech near Kyoto, according to NHK, the public broadcaster.",
            "url": "https://www.nytimes.com/live/2022/07/08/world/japan-shinzo-abe-shooting",
            "urlToImage": "https://static01.nyt.com/images/2022/07/08/world/08japan-abe-hospital-01/merlin_209720790_145564ba-096b-46c8-b490-40819aa47f67-articleLarge.jpg",
            "publishedAt": "2022-07-08T04:34:23Z",
            "content": "TOKYO Shinzo Abe, the former prime minister of Japan, collapsed and was left unconscious after he was apparently shot on Friday while giving a speech in western Japan, according to a fire official.Mr… [+1901 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "No. 1 Pick Paolo Banchero Drops 17 Pts & 6 Ast In Summer League Debut! - NBA",
            "description": "Paolo Banchero and Jabari Smith II, the No. 1 and No. 3 pick in the 2022 NBA Draft, respectively, went head-to-head for the first time as the Magic defeated ...",
            "url": "https://www.youtube.com/watch?v=OvN9hLx3gFs",
            "urlToImage": "https://i.ytimg.com/vi/OvN9hLx3gFs/hqdefault.jpg",
            "publishedAt": "2022-07-08T04:31:51Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "LA County Supervisors seeking power to remove LA County Sheriff - CBS Los Angeles",
            "description": "CBSLA political reporter Tom Wait breaks down the proposed change to the county's charter.",
            "url": "https://www.youtube.com/watch?v=vLyF6PKYLSs",
            "urlToImage": "https://i.ytimg.com/vi/vLyF6PKYLSs/hqdefault.jpg",
            "publishedAt": "2022-07-08T04:19:41Z",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Elsie Boskamp and Jon Winkler, USA TODAY",
            "title": "Amazon Prime Day 2022: Deals have arrived early, shop the sale now - USA TODAY",
            "description": "Amazon Prime Day starts July 12 and we've already got the details on the best early deals to shop. Save on Apple, LG, eufy and more.",
            "url": "https://www.usatoday.com/story/money/reviewed/2022/07/07/amazon-prime-day-sale-deals-july-12-2022/7831008001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/07/07/USAT/a93dc698-6ee3-4969-bf47-6480eba4e205-Amazon_Prime_Day_early_deals_7722.jpg?auto=webp&crop=4779,2689,x10,y0&format=pjpg&width=1200",
            "publishedAt": "2022-07-08T03:39:35Z",
            "content": "— Recommendations are independently chosen by Reviewed’s editors. Purchases you make through our links may earn us a commission.\r\nAmazon Prime Day 2022 is less than a week away. It's one of the bigge… [+10292 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Meraxes Gigas: Giant New Carnivorous Dinosaur Discovered With Tiny Arms Like T. rex - SciTechDaily",
            "description": "Meraxes gigas — a new species of dinosaur has been discovered with disproportionally short arms just like T. rex called the Meraxes gigas. Tyrannosaurs (like the infamous T. rex) is not the only group of gigantic carnivorous dinosaur with tiny arms. In fact, …",
            "url": "https://scitechdaily.com/meraxes-gigas-giant-new-carnivorous-dinosaur-discovered-with-tiny-arms-like-t-rex/",
            "urlToImage": "https://scitechdaily.com/images/Meraxes.jpg",
            "publishedAt": "2022-07-08T03:39:19Z",
            "content": "Meraxes gigas, a newly discovered species of dinosaur with disproportionally short arms just like T. rex. Credit: Jorge A Gonzalez\r\nMeraxes gigas a new species of dinosaur has been discovered with di… [+4040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YourTango"
            },
            "author": "Ruby Miranda",
            "title": "The 3 Zodiac Signs With Rough Horoscopes, Friday, July 8, 2022 - YourTango",
            "description": "Aries, Gemini, and Capricorn are going to have rough horoscopes on Friday, July 8, 2022, and part of the problem is the Moon in Scorpio.",
            "url": "https://www.yourtango.com/2022352149/zodiac-signs-rough-horoscopes-friday-july-8-2022",
            "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiac-signs-rough-horoscopes-friday-july-8-2022.png?itok=Q9noCGl3",
            "publishedAt": "2022-07-08T03:06:35Z",
            "content": "Today may try our patience, as we have a few unnerving transits hovering on high. These transits are sort of hellbent on undoing us. With our Moon in Scorpio, we'll feel both snobby and aggressive.\r\n… [+4510 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Sports Staff",
            "title": "2022 NHL draft tracker: Start time, draft order, latest NHL mock draft, news, trades, rumors, top prospects - Yahoo Canada Sports",
            "description": "Here's everything you need to know about the 2022 NHL draft, including the latest news and trades.",
            "url": "https://ca.sports.yahoo.com/news/2022-nhl-draft-tracker-start-time-draft-order-latest-nhl-mock-draft-news-trades-top-prospects-140159195.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/JgGV2eK_mWEZ28HL3HDUVg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2022-07/b8b3a2c0-fe4d-11ec-bfef-797ee452ae93",
            "publishedAt": "2022-07-08T02:41:46Z",
            "content": "The Montreal Canadiens selected Slovakian forward Juraj Slafkovsky with the first overall selection in the 2022 NHL draft. via Getty Images)\r\nIt's shaping up to be a wild first round of the NHL draft… [+13038 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Dave Lawler",
            "title": "Putin says his Ukraine operation has hardly even started - Axios",
            "description": "“We are hearing that they want to defeat us on the battlefield. Let them try.”",
            "url": "https://www.axios.com/2022/07/07/putin-says-russia-invasion-just-started",
            "urlToImage": "https://images.axios.com/uK4RlJkbmy551DfHMVYgle_OXww=/0x0:5184x2916/1366x768/2022/07/07/1657223578518.jpg",
            "publishedAt": "2022-07-08T02:24:33Z",
            "content": "Russian President Vladimir Putin offered a warning Thursday to those hoping Russia will be defeated militarily in Ukraine: \"Largely speaking, we havent even yet started anything in earnest.\"\r\nWhat he… [+3110 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Arelis R. Hernández",
            "title": "Abbott tests feds by urging Texas troopers to return migrants to border - The Washington Post",
            "description": "Texas Gov. Greg Abbott signed an order authorizing state authorities to return migrants to the border – testing how far states can go in enforcing U.S. immigration law.",
            "url": "https://www.washingtonpost.com/nation/2022/07/07/texas-abbott-immigration-enforcement/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZH4XKOX6GYI6ZM45OEYJC2ABJM.jpg&w=1440",
            "publishedAt": "2022-07-08T02:14:02Z",
            "content": "Comment on this story\r\nTexas Gov. Greg Abbott ordered state National Guard soldiers and law enforcement officers Thursday to apprehend and return migrants suspected of crossing illegally back to the … [+9442 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Bevan Hurley",
            "title": "Derek Chauvin sentenced to 21 years in federal prison for murder of George Floyd - The Independent",
            "description": "Ex-cop will be transferred from state to federal prison to serve remainder of sentence",
            "url": "https://www.independent.co.uk/news/world/americas/crime/derek-chauvin-george-floyd-sentencing-b2118165.html",
            "urlToImage": "https://static.independent.co.uk/2022/04/27/12/newFile-14.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-07-08T01:59:26Z",
            "content": "Derek Chauvin has been sentenced to 21 years in federal prison for the murder of George Floyd.\r\nThe sentence means Chauvin, 46, will leave a state prison where he has been kept in solitary confinemen… [+5224 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jack Guy, Luke McGee and Ivana Kottasová, CNN",
            "title": "Boris Johnson: UK Prime Minister resigns after mutiny in his party - CNN",
            "description": "Boris Johnson's turbulent tenure as Britain's Prime Minister came to an end Thursday after a historic party revolt over a series of ethics scandals forced him to step down.",
            "url": "https://www.cnn.com/2022/07/07/europe/boris-johnson-resignation-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220606041406-02-boris-johnson-060622-file-super-tease.jpg",
            "publishedAt": "2022-07-08T01:42:00Z",
            "content": "September 9, 2019\r\nSuspends Parliament\r\nTwo months into his premiership, Boris Johnson prorogues -- or suspends -- Parliament for five weeks ahead of an October 31 deadline to leave the European Unio… [+3418 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Zavier Ong",
            "title": "Asset manager names his top stocks trading at a 'sizable discount' right now - CNBC",
            "description": "The companies are trading at a \"pretty substantial\" discount to the rest of the market, according to asset manager Jack Ablin.",
            "url": "https://www.cnbc.com/2022/07/08/stock-picks-asset-manager-names-companies-trading-at-a-sizable-discount.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106972429-16364108192021-11-08t215634z_1516855190_rc2jqq9dbnhe_rtrmadp_0_usa-stocks.jpeg?v=1636410879&w=1920&h=1080",
            "publishedAt": "2022-07-08T00:39:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "Baker Mayfield passes physical, becomes a Panther - NBC Sports",
            "description": "The first pick in the 2018 draft is officially a member of the Carolina Panthers.Joe Person of TheAthletic.com reports that quarterback Baker Mayfield has passed his entry physical. That makes the trade from the Browns official.Mayfield had surgery in January…",
            "url": "https://profootballtalk.nbcsports.com/2022/07/07/baker-mayfield-passes-physical-becomes-a-panther/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/07/GettyImages-1360849365-e1657240422795.jpg",
            "publishedAt": "2022-07-08T00:34:00Z",
            "content": "The first pick in the 2018 draft is officially a member of the Carolina Panthers.\r\nJoe Person of TheAthletic.com reports that quarterback Baker Mayfieldhas passed his entry physical. That makes the t… [+707 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Brett Chase",
            "title": "Highland Park Fourth of July mass shooting left Cooper Roberts, 8, in critical condition, his spinal cord sev - Chicago Sun-Times",
            "description": "The sports-loving boy’s mother Keely Roberts — Zion Elementary School District 6’s superintendent — also was wounded, as was his twin brother, who was hit by shrapnel.",
            "url": "https://chicago.suntimes.com/2022/7/7/23198901/highland-park-parade-mass-shooting-cooper-roberts-keely-fourth-july",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/869164d/2147483647/strip/true/crop/3024x1726+0+1153/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fd4f2Mz_Vt83mW1zzvL1_7Ije4DE%3D%2F0x0%3A3024x4032%2F3024x4032%2Ffilters%3Afocal%281512x2016%3A1513x2017%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F23707110%2FIMG_5779_1_.JPEG",
            "publishedAt": "2022-07-08T00:19:00Z",
            "content": "An 8-year-old boy remains in critical condition after a bullet from the mass shooting at Highland Parks Fourth of July parade severed his spine.\r\nCooper Roberts was described Thursday as being in cri… [+3057 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Zoe Christen Jones",
            "title": "James Caan, \"The Godfather\" actor, dies at 82 - CBS News",
            "description": "The actor was best known for his role as Sonny Corleone in \"The Godfather,\" and won a new generation of fans in \"Elf.\"",
            "url": "https://www.cbsnews.com/news/james-caan-dead-age-82-the-godfather-actor/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/07/07/61c9f936-2c2b-439a-af0e-2b67145200a7/thumbnail/1200x630/d8041986ed512f77e8f78081681be40f/james-caan.jpg",
            "publishedAt": "2022-07-08T00:16:00Z",
            "content": "Actor James Caan, known for his roles in \"The Godfather\" and other films over a long career, has died at 82, his family confirmed Thursday. \r\n\"It is with great sadness that we inform you of the passi… [+4524 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Erin Keller",
            "title": "What Elon Musk has said about parenting his 10 children - New York Post ",
            "description": "“I think babies are super cool and really people need to have more babies because, it sounds obvious, but if people don’t have enough babies, humanity will disappear.”",
            "url": "https://nypost.com/article/what-elon-musk-has-said-about-his-many-children/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/07/elon-musk-x.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-07-08T00:08:00Z",
            "content": "Elon Musk has many job titles including CEO of Tesla and CEO and chief engineer at SpaceX, among others but he also has played the role of dad to 10 kids. \r\nThe 51-year-old billionaire first experien… [+6502 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Skull and Bones Release Date Announced - IGN Daily Fix - IGN",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DswtdPxlQexg",
            "urlToImage": null,
            "publishedAt": "2022-07-08T00:02:49Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Jim Cramer explains why he's not throwing in the towel on tech stocks just yet - CNBC Television",
            "description": "CNBC's Jim Cramer explained his thoughts on tech stocks and why he believes they could have staying power in the market on Thursday's episode of \"Mad Money.\"",
            "url": "https://www.youtube.com/watch?v=R-s_dO7Snx0",
            "urlToImage": "https://i.ytimg.com/vi/R-s_dO7Snx0/hqdefault.jpg",
            "publishedAt": "2022-07-07T23:48:25Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Dark matter: search for the invisible begins in an old gold mine - The Guardian",
            "description": "Scientists know that it makes up most of the universe’s mass, but they don’t know what it is … or exactly how to find it",
            "url": "https://amp.theguardian.com/science/2022/jul/07/dark-matter-science-mine-south-dakota",
            "urlToImage": null,
            "publishedAt": "2022-07-07T23:35:00Z",
            "content": "ScienceScientists know that it makes up most of the universes mass, but they dont know what it is or exactly how to find it\r\nIn a former gold mine a mile underground, inside a titanium tank filled wi… [+5513 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "RiverheadLOCAL"
            },
            "author": "Denise Civiletti",
            "title": "Two more monkeypox cases confirmed in Suffolk, as health officials launch education campaign and county plans pop-up vaccine clinics - RiverheadLOCAL",
            "description": "Two additional confirmed cases of monkeypox have been identified in Suffolk County, according to the New York State Department of Health, bringing the total number of cases in Suffolk to three.",
            "url": "https://riverheadlocal.com/2022/07/07/two-more-monkeypox-cases-confirmed-in-suffolk-as-health-officials-launch-education-campaign-and-county-plans-pop-up-vaccine-clinics/",
            "urlToImage": "https://riverheadlocal.com/wp-content/uploads/2022/07/2022_0707_monkeypox-rash.jpeg",
            "publishedAt": "2022-07-07T23:28:05Z",
            "content": "Two additional confirmed cases of monkeypox have been identified in Suffolk County, according to the New York State Department of Health, bringing the total number of cases in Suffolk to three.\r\nTher… [+3477 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 88)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News