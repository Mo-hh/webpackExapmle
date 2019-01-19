import React from 'react';
// import React from 'prop-types';


export   class BlogpostData extends React.Component {

render () {

  return (

<div className ="card-header">
<h4 className ="display-4" >{this.props.person}   wrote on</h4>


</div>

  )
}

}


export   class  BlogpostContent extends React.Component{


  render() {


    return (
      <div className ="card-body">
      <h3 className ="display-2" >How i survievd in {this.props.city} during christmas</h3>
    {this.props.isSeen && <img src={this.props.image} className="rounded mx-auto d-block"  style={{width:'70vw',height:'40vw'} }/>}
      <p  className="lead"> alomost killed my self</p>
      </div>
    )
  }
}

export  class BlogPost extends React.Component{

  render() {

   const today = new Date();
  return(

    <div className ="card">
    {this.props.children[1]}
    {this.props.children[0]}
    <div className ="card-footer">

    <span className={this.props.makeBig?"display-1": "display-4"} >Published on {today.getDate()+ "/" + (today.getMonth()+1)+"/" +today.getFullYear()}</span>
    </div>

    </div>
  )
  }
}
