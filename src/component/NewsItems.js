import React, { Component } from 'react'

export class NewsItems extends Component {
 

  render() {
     let {tittle,discription,imageurl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://cdn.pixabay.com/photo/2016/04/20/21/17/png-1342113_640.png":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{tittle}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{source}</span></h5>
    <p className="card-text">{discription}...</p>
    <p className="card-text"><small className="text-body-secondary">By{!author?"XYZ":author} on { new Date(date).toUTCString()}</small></p>
    <a  rel="noreferal"href={newsUrl}target='_blank' className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
