import React from "react";

class FlavorForm extends React.Component {
   constructor(props) {
      super(props)
      this.state = {value : "Pilihlah"}

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleSubmit (e) {
      alert("Pilihan Buah anda adalah " + this.state.value)
      e.preventDefault();
   }

   handleChange (e) {
      this.setState ({value : e.target.value})
   }

   render () {
      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               <select value={this.state.value} onChange={this.handleChange}>   
                  <option value="Grapefruit">Grapefruit</option>
                  <option value="Lime">Lime</option>
                  <option value="Coconut">Coconut</option>
                  <option value="Mango">Mango</option>
               </select>
            </label>
            <input type="submit" value="Submit"></input>
         </form>

      )
   }
}

export default FlavorForm;