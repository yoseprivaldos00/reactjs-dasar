export default function BoilingVerdict (props) {
   if (props.celsius >= 100) {
      return <p>Air akan mendidih</p>
   } 
   return <p>Air tidak akan mendidih</p>
}

export function toCelsius (suhu, skala) {   
      if (skala === "f"){
         return (suhu -32 ) * 5 / 9; 
      } else if (skala ==="k") {
         return (suhu - 273)
      } else if (skala === "r") {
         return (suhu * 5/4)
      }
}
export function toFahrenheit (suhu, skala) {
      if(skala === "c") {
         return (suhu * 9 /5) + 32;
      } else if (skala === "k") {
         return ((suhu - 273) * 9 / 5  ) + 32
      } else if (skala === "r") {
         return (suhu * 2.25) + 32;
      }
}

export function toKelvin (suhu, skala) {
      if(skala === "c") {
         return (suhu + 273)
      } else if (skala === "f") {
         return (suhu + 459.67) * 5/9
      } else if (skala === "r") {
         return (suhu * 5/4 ) + 273
      }
}

export function toReamur (suhu, skala) {
     if (skala ==="c") {
         return (suhu * 4/5)
     } else if (skala === "k"){
         return (suhu - 273 ) * 4/5
     } else if(skala === "f") {
         return (suhu-32) * 4/9
     }
}

export function tryConvert (temperature, convert, skala) {
   const input = parseFloat(temperature);
   
   if (Number.isNaN(input)){
      return ''
   }
   const output = convert(input, skala);
   const rounded = Math.round(output);
   return rounded.toString();
}