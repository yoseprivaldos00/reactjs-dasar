import React from 'react'
class EssayForm extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         value : ''
      };

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange(e) {
      this.setState({value : e.target.value})
   }
   handleSubmit(e) {
      alert('User Submit Essay: ' + this.state.value)
      e.preventDefault()
      this.setState({value: ""})
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               Essay
               <textarea value={this.state.value} onChange={this.handleChange} placeholder="ketik sesuatu"/>
            </label>
            <input type="submit" value ="Submit"/>
         </form>
      )
   }

}

export default EssayForm;