import '../styles/main.scss';
console.log('webpack woeked');

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {InstaBox} from './instabox';
import {Navbar} from './navbar';
import {BlogpostData,BlogpostContent,BlogPost} from './blogs.js'


// class Title extends React.Component {
// render(){
//
//
//   const framework ='React';
//
//       return (
//              <div>
//                   <img src="./images/CMS_Creative_164657191_Kingfisher.jpg"/>
//                   <h1  className ="green big"> This is from {framework} </h1>
//
//               </div>
//
// );
//
// }
//
//
//
// }








    class App extends React.Component{
      render(){

        const instaArray =[
        { identifier:'section1', title:'many of cars',imageSource:'./images/images5.jpeg', description :'this foto'} ,
        { identifier:'section4', title:'Hallow world',imageSource:'./images/images6.jpeg', description :'this foto2'} ,
        { identifier:'section3', title:'swimming with bear',imageSource:'./images/images3.jpg', description :'this foto3'} ,
        { identifier:'section2', title:'water',imageSource:'./images/images1.jpeg', description :'this foto4'}

                               ]

     return (

// <React.Fragment>
//   <BlogPost makeBig={false}>
//     < BlogpostContent city ="Aleppo" image ="./images/images-2.jpg" isSeen={true} />
//     <BlogpostData person="Mohamad"/>
// </BlogPost>
// <BlogPost  makeBig={false}>
//   < BlogpostContent city ="Damascus" image ="./images/images-2.jpg" isSeen={false} />
// <BlogpostData person="Murhaf"/>
// </BlogPost>
// <BlogPost  makeBig={true}>
//   < BlogpostContent city ="Hamburg" image ="./images/images6.jpeg" isSeen={true} />
// <BlogpostData person="Omar"/>
// </BlogPost>
//
//
// </React.Fragment>


<React.Fragment>
  <Navbar/>

{instaArray.map((item,index) =><InstaBox
 key={index}
 identifier={item.identifier}
 title={item.title}
 imageSource={item.imageSource}
 description={item.description} />)}

{/*<InstaBox    identifier="section1"   title="Hallo" imageSource="./images/images5.jpeg" description ="this foto" />
//   <InstaBox    identifier="section4"  title="Hallo" imageSource="./images/images6.jpeg" description ="this foto"/>
//   <InstaBox    identifier="section3"   title="Hallo" imageSource="./images/images3.jpg" description ="this foto"/>
//   <InstaBox    identifier="section2"   title="Hallo" imageSource="./images/images1.jpeg" description ="this foto"/>*/}
</React.Fragment>

)
}
}

ReactDOM.render(<App/>,document.getElementById('app'));




//
//
//
// )
//
//       }
//     }
//






// class LM extends React.Component{
//
//   calculateGoalsRatio(caps, goals) {
//    return goals / caps;
//  }
//  render(){
//    const playersCaps =this.props.caps;
//    const playersGoals=this.props.goals;
//    const Name =this.props.firstName;
//    const secondName =this.props.lastName;
//    return <h2>{Name}{secondName} scored {this.calculateGoalsRatio(playersCaps,playersGoals)};
//
//  }
//
// }

// class FootballPlayer extends React.Component {
//
//  calculateGoalsRatio(caps, goals) {
//   return caps/goals;
// }
//
//  render() {
//   const playerCaps =  this.props.caps;
//   const playerGoals = this .props.goals;
//   const secondName =  this.props.lastName;
//   const Name       =  this.props.firstName;
//   return <h2>{Name} {secondName} scored{this.calculateGoalsRatio(playerGoals, playerCaps)} goals this year</h2>;
// }
// }
//
// FootballPlayer.PropTypes={
//   firstName:PropTypes.string.isRequired,
//   lastName:PropTypes.string.isRequired,
//   caps:PropTypes.number.isRequired,
//   goals:PropTypes.number.isRequired
// }
//
//
//
//
//
//  class Conditional extends React.Component {
//   render() {
//     const isSeen = false;
//     return isSeen && <h2>Now you see me</h2>;
//   }
// }
//
//  class Menu extends React.Component {
//
//    render() {
//
//      const foodStock = [
//       {product: 'Milk', quantity: 5},
//       {product: 'Beer', quantity: 12},
//       {product: 'Bread', quantity: 0},
//       {product: 'Sausage', quantity: 4}
//     ];
//
//
//
//      return <ul>{ foodStock.map((item,index) => item.quantity>0 &&<li key={index}>{item.product}</li>) }</ul>;
//   }
//
//
//  }
//
//
//
//
//
// ReactDOM.render(<Conditional />, document.getElementById('conditional'));
// ReactDOM.render(<Menu />, document.getElementById('menu'));
// ReactDOM.render(<FootballPlayer firstName="Cristiano" lastName="Ronaldo" caps={50} goals={65}/>, document.getElementById('ronaldo'));
// ReactDOM.render(<FootballPlayer firstName="Lio" lastName="Messi" caps={50} goals={200}/>, document.getElementById('Messi'));
// ReactDOM.render(<FootballPlayer firstName="Omar" lastName="Soma" caps={50} goals={25}/>, document.getElementById('Soma'));
