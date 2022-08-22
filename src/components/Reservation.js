import React  from "react";

export default class Reservation extends React.Component {
   constructor (props) {
      super(props)
      this.state = {
         isGoing : true,
         numberOfGuest: 2
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      
   }

   handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }


   render() {
      return (
         <form>
            <label>
               Is going:
               <input 
               name="isGoing"
               type="checkbox"
               checked={this.state.isGoing}
               onChange={this.handleInputChange}>
               </input>
            </label>
            <br/>
            <label>
               Number of guests:
               <input
               name="numberOfGuest"
               type="number"
               value={this.state.numberOfGuest}
               onChange={this.handleInputChange}>
               </input>
            </label>
         </form>
      )
   }
}

