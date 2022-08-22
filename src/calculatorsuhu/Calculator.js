import React from "react";
import BoilingVerdict, { toKelvin, toReamur } from "./Konversi";
import TemperatureInput from "./TemperaturInput";
import { tryConvert, toCelsius, toFahrenheit} from "./Konversi";

export default class Calculator extends React.Component {
   constructor(props) {
      super(props);    
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
      this.handleKelvinChange = this.handleKelvinChange.bind(this)
      this.handleReamurChange= this.handleReamurChange.bind(this)
      this.state = {temperature: '', scale: 'c'}
   }

   handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature})

   }
   handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature})
   }

   handleKelvinChange(temperature) {
      this.setState({scale: 'k', temperature})
   }

   handleReamurChange(temperature) {
      this.setState({scale: 'r', temperature})
   }
   

   render() {
      
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      let celsius;
      let fahrenheit;
      let kelvin;
      let reamur;

      if(scale === "f") {
         celsius = tryConvert(temperature, toCelsius, scale)
         kelvin = tryConvert(temperature, toKelvin, scale)
         reamur = tryConvert(temperature, toReamur, scale)
      } else if(scale === "c") {
         fahrenheit = tryConvert(temperature, toFahrenheit, scale)
         kelvin = tryConvert(temperature, toKelvin,scale)
         reamur = tryConvert(temperature, toReamur,scale)
      } else if (scale === "k") {
         fahrenheit = tryConvert(temperature, toFahrenheit,scale)
         celsius = tryConvert(temperature, toCelsius,scale)
         reamur = tryConvert(temperature, toReamur,scale)
      } else if (scale === "r") {
         fahrenheit = tryConvert(temperature, toFahrenheit, scale)
         celsius = tryConvert(temperature, toCelsius, scale)
         kelvin = tryConvert(temperature, toKelvin, scale)
      } else {
         celsius = temperature
         fahrenheit = temperature
         kelvin = temperature
         reamur = temperature
      }
      
      return (           
         <div>  
            <TemperatureInput 
            scale="c"
            temperature = {celsius}
            onTemperatureChange = {this.handleCelsiusChange}/>

            <TemperatureInput 
            scale="f"
            temperature = {fahrenheit}
            onTemperatureChange = {this.handleFahrenheitChange}/>

            <TemperatureInput 
            scale="k"
            temperature = {kelvin}
            onTemperatureChange = {this.handleKelvinChange}/>

            <TemperatureInput 
            scale="r"
            temperature = {reamur}
            onTemperatureChange = {this.handleReamurChange}/>

            <BoilingVerdict
            celsius={parseFloat(celsius)}/>
         </div>
      
      
      )
   }
}