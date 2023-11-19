import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
  articles=[
    {"source":{"id":"bbc-sport","name":"BBC Sport"},"author":null,"title":"I don't like to use the R-word - Broad","description":"England great Stuart Broad says he is steering clear of referring to himself as a retired cricketer.","url":"http://www.bbc.co.uk/sport/cricket/67440747","urlToImage":"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/10B48/production/_131742486_gettyimages-483386686-1.jpg","publishedAt":"2023-11-16T17:07:24.8229276Z","content":"Stuart Broad retired after the final Ashes Test at The Oval last summer, with his total of 604 wickets the sixth highest in history\r\nEngland great Stuart Broad says he is steering clear of referring … [+4145 chars]"},{"source":{"id":"news-com-au","name":"News.com.au"},"author":"Andrew McMurtry","title":"Australia makes brutal semi selection call","description":"Welcome to news.com.au’s live blog of the Cricket World Cup semi-final between Australia and South Africa from Eden Gardens, Kolkata.","url":"https://www.news.com.au/sport/cricket/world-cup/cricket-world-cup-2023-australia-vs-south-africa-live-stoinis-dropped-for-semi/news-story/0830cfbac57c0e9f96bcd2ff830d1bb5","urlToImage":"https://content.api.news/v3/images/bin/2c7a6e5669a59a4f49bbbb5295142062","publishedAt":"2023-11-16T08:33:00Z","content":"Welcome to news.com.au’s live blog of the Cricket World Cup semi-final between Australia and South Africa from Eden Gardens, Kolkata.\r\nAustralia have romped into the semi-finals on the back of seven … [+1934 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }
]
  constructor()
  {
    super();
    console.log("Hello I am a constructor from News component");
    this.state={
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      <div className="container my-3">
    <h2>NewsMonkey-Top Headlines</h2>
    <div className="row">
    {this.state.articles.map((element)=>{
      return <div className="col md-4"  key={element.url}>
        <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,67)} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
       })}

        
        
        </div>
       </div>
    )
  }
}

