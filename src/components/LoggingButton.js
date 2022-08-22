//Handling Event
import React from "react";
class LoggingButton extends React.Component {
   constructor(props) {
      super(props)
      this.state = {status: true}
      //this.handleClick = this.handleClick.bind(this);
    
   }
   handleClick = () => {
      this.setState(p => ({
         status : !p.status
      }))
   }
   deleteRow(id) {

   }

   render() {
      return (
         <div>
            <button onClick={()=> this.handleClick()}>{this.state.status? 'CLICK ME' : 'ALREADY CLICK'}</button>
            <button onClick={this.handleClick.bind(this)}>{this.state.status? 'CLICK ME' : 'ALREADY CLICK'}</button>
         </div>
      )
   }
}

export default LoggingButton;