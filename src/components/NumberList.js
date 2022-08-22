function NumbersList () {
   const data = [
      {id : 1, name : "yosep", url : 'http://www.youtube.com'},
      {id : 2, name : "riski", url : 'http://instagram/risskivanni'}
   ]
   const outData = data.map((output) => 
   <li key={output.id.toString()}>
      <a href={output.url}>
         {output.name}
      </a>
   </li>
   )

   return (
      <ul>{outData}</ul>
   )
}

export default NumbersList;