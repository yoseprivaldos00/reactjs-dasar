import React from "react"


const scaleNames = {
   c: 'Celcius',
   f: 'Fahrenheit',
   k: 'Kelvin',
   r: 'Reamur'
}

export default class TemperatureInput extends React.Component {
   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature:""}
   }

   handleChange(e){
      this.props.onTemperatureChange(e.target.value)
      this.setState({temperature:e.target.value})
   }

   render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
         <fieldset>
            <legend>Masukkan temperatur dalam skala {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={this.handleChange}/>
         </fieldset>
      )

   }
}