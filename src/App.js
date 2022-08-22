import React from "react";
//import Blog from "./components/Blog";
// import Welcome from "./components/Welcome";
//import Clock from "./components/Clock2.js";
// import Toggle from "./components/Toggle";
// import LoggingButton from "./components/LoggingButton";
//import LoginControl from "./components/LoginControl";
//import NumbersList from "./components/NumberList";
// import NameForm from "./components/NameForm";
// import EssayForm from "./components/EssayForm";
// import FlavorForm from "./components/FlavorForm"; 
// import Reservation from "./components/Reservation";
import Calculator from "./calculatorsuhu/Calculator";
import SplitPane from "./composition/SplitPane";
import FilterableProductTable from "./productapp/FilterableProductTable";

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from NPM'}
// ]

const PRODUCTS = [
  {category : 'Sporting Goods', price : '$49.99', stocked: true, name : 'Football'},
  {category : 'Sporting Goods', price : '$9.99', stocked: true, name : 'Baseball'},
  {category : 'Sporting Goods', price : '$29.99', stocked: false, name : 'Basketball'},
  {category : 'Electronics', price : '$99.99', stocked: true, name : 'iPod Touch'},
  {category : 'Electronics', price : '$399.99', stocked: false, name : 'iPhone 5'},
  {category : 'Electronics', price : '$199.99', stocked: true, name : 'Nexus 7'}
]
function Contacts(){
  return <div className="Contacts"></div>
}
function Chat() {
  return <div className="Chat"></div>
}
class App extends React.Component {
  render (){
    return (
    <div>
      <Calculator/>
      <SplitPane
        left={
          <Contacts/>
        }
        right={
          <Chat/>
        }/>
      <FilterableProductTable products={PRODUCTS}/>
    </div>
    )
  }
}

export default App;
