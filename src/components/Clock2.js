import React, {useEffect, useState} from "react"

function Clock() {
   const [date, setDate] = useState(new Date());

   function refreshClock() {
      setDate(new Date())
   }
   
   useEffect(() => {
      const timerId = setInterval(refreshClock, 1000)
      return function cleanup() {
         clearInterval(timerId);
      }
   }, []);
   return (
      <div>
         <h1>Hello World</h1>
         <h2>It is {date.toLocaleTimeString()}</h2>
      </div>
   )
}

export default Clock;