// Materi Conditional Rendering

function Greeting(props) {
   const isLoggedIn = props.isLoggedIn;
   if(isLoggedIn) {
      return (
         <h1>Welcome Back</h1>
      )
   }
   return <h1> Please sign up.</h1>

}
function LoginButton(props) {
   return (
      <button onClick={props.onClick}>Login</button>
   )
}

function LogoutButton(props) {
   return (
      <button onClick={props.onClick}>Logout</button>
   )
}

export {LogoutButton, LoginButton, Greeting};