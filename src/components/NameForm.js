import React from "react";

class NameForm extends React.Component {
   constructor (props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.input = React.createRef();
   }
   handleSubmit(e) {
      alert('Sebuah nama telah dikirim: ' + this.input.current.value);
      e.preventDefault();
   }
   
   render () {
      return (
         <form>
            <label>Nama:
               <input type="text" ref={this.input}/>
            </label>
            <input type="submit" value="Kirim"></input>
         </form>
      )
   }
}

export default NameForm;