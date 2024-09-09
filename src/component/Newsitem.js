import React from 'react'
const Newsitem=(props)=> {
    let {title,description,imageUrl,newsUrl,author,date}=props
    return ( 
      title==="[Removed]"? <></>:
      <div className='mb-3'  >
         <div className="roww" >
           <div className="image" >
             <img src={imageUrl?imageUrl: "https://indian-shtabdi-news.netlify.app/No_Image_Available.jpg"} className="img-fluid rounded-start" alt="Re"/>
           </div>
            <div className="card-body ">
               <h5 className="card-title">{title}...</h5>
               <p className="card-text">{description}...</p>
               <p className="card-text"><small className="text-body-secondary">By  {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
               <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>
       </div>
      )
  }
  
  export default Newsitem
