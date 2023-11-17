import React, { Component } from 'react'


export  class NewsItem extends Component {
  render() {
   let {title , description}=this.props;
    return (
      <div>
         <div  className="card" style={{width: "18rem"}}>
           <img src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/10B48/production/_131742486_gettyimages-483386686-1.jpg"  className="card-img-top" alt="..."/>
             <div  className="card-body">
           <h5  className="card-title">{title}</h5>
           <p  className="card-text">{description}</p>
            <a href="/newsdetail"  className="btn btn-primary">Go somewhere</a>
      </div>
     </div>    
    </div>
    )
  }
}

export default NewsItem