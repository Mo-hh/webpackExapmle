import React from 'react';
import PropTypes from 'prop-types';




export  class InstaBox extends React.Component{
  render() {


return (

  <section id={this.props.identifier}>
     <h3>{this.props.title}</h3>
     <img src ={this.props.imageSource} />
     <p>{this.props.description}</p>
     </section>
)

  }
}


InstaBox.propTypes ={
  identifier:PropTypes.string.isRequired,
  title:PropTypes.string,
  imageSource:PropTypes.string.isRequired,
  description:PropTypes.string

}
