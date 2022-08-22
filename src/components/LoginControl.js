//Materi Conditional Rendering
import React from "react";
import {LogoutButton, LoginButton, Greeting} from "./LoginItem.js"
class LoginControl extends React.Component {
   constructor (props) {
      super(props)
      this.state = {isLoggedIn: false};

      this.handleLoginClick = this.handleLoginClick.bind(this)
      this.handleLogoutClick = this.handleLogoutClick.bind(this)
   }
   
   handleLoginClick() {
      this.setState({isLoggedIn : true})
   }

   handleLogoutClick(){
      this.setState({isLoggedIn : false})
   }

   render () {
      const isLoggedIn = this.state.isLoggedIn;
      let button;

      if(isLoggedIn) {
         button = <LogoutButton onClick={this.handleLogoutClick}/>;
      } else {
         button = <LoginButton onClick={this.handleLoginClick}/>;
      }

      return (
         <div>
            <Greeting isLoggedIn = {isLoggedIn}/> {button}
         </div>
      )
         
      }
}

export default LoginControl;