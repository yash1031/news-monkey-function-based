import React,{useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{
  const capital=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // document.title=`${this.capital(props.category)} - NewsMonkey `
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(false)
  let[page,setPage]=useState(1)
  // let page=1;
  const[totalResults,setTotalResults]=useState(0)
  const updatefun = async ()=>{
    props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.size}&page=${page}`
    setLoading(true)   
    let data= await fetch(url);    
    props.setProgress(50)
    let parseddata =  await data.json();    
    props.setProgress(70)
    setArticles(parseddata.articles)
    setLoading(false)
    setTotalResults(parseddata.totalResults)  
    props.setProgress(100)
    // console.log("rafjfk;kf =km, l,l lml, lm,l, ,l, ")
  }
  const fetchMoreData = async ()=>{
    // console.log(page)
    setPage(page=page+1)
    // console.log(page)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.size}&page=${page}`
    let data= await fetch(url);
    // this.setState({loading:true})   
    let parseddata =  await data.json();
    setArticles(articles.concat(parseddata.articles))
    setLoading(false)
  }
  useEffect(()=>{   //instead of coponentdidmount
    updatefun()
  },[])
    return (
      <>
          <h2  className='text-center my-4' style={{paddingTop:"50px"}}>NewsMonkey - Top  {capital(props.category)} Headlines</h2>
            {loading&&<Spinner/>}
            {/* {console.log("adfasdfasdfsaf")} */}
            {/* {console.log(articles.length,totalResults)} */}
            <InfiniteScroll dataLength={articles.length} hasMore={articles.length!=totalResults} next={fetchMoreData} loader={<Spinner/>}>
            <div className="container my-2 ">
              <div className="row" >
                {articles.map((element)=>{
                    return <div  key={element.url}>
                      <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>   
                    </div>
                })}      
              </div>
           </div>
          </InfiniteScroll>
       </>
   )
}

export default News


News.defaultProps ={
  country:'in',
  category:'general',
  size:10
}
News.propTypes = {
  country:PropTypes.string,
  category:PropTypes.string,
  size:PropTypes.number,
}

  // next and previous buttons code 

  // handleprevious =async()=>{
  //      console.log("previous")
  //      this.setState({page:this.state.page-1})
  //      this.updatefun()
  // }

  // handlenext = async()=>{
    //      console.log("Next")
    //      this.setState({page:this.state.page+1})       
  //     this.updatefun()
  // }

{/* <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" onClick={this.handleprevious} className="btn btn-primary" > &larr;Previous</button>
    <button disabled={this.state.page >= this.state.totalResults/props.size} type="button" onClick={this.handlenext} className="btn btn-primary" >Next&rarr;</button>
</div> */}