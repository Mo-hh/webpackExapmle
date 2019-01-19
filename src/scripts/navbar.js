import React from 'react';




export  class Navbar extends React.Component{

  render(){
    const listitems = [
          {li: 'contact',links:'#section1'},
         {li: 'home',links:'#section2'},
         {li: 'Address',links:'#section3'},
          {li: 'about us',links:'#section4'}
        ];



  return     <ul>{listitems.map((item,index)=> <li key={index}><a href={item.links}>{item.li}</a></li>   )}</ul> ;

          // return <ul> {listitems.map((item,index)=> <li key={index}> <a href={item.links}>{item.li}</a> </li>)} </ul>;

  }

}
