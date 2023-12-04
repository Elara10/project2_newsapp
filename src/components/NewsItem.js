import React, { Component } from 'react'
export  class NewsItem extends Component {

  render() {
   let {title , description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="my-3"></div>
         <div  className="card" style={{width: "18rem"}}>
           <img src={!imageUrl?"https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif":imageUrl} className="card-img-top" alt="..."/>
             <div  className="card-body">
           <h5  className="card-title">{title}...</h5>
           <p  className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
      </div>
     </div>    
    </div>
    )
  }
}
export default NewsItem