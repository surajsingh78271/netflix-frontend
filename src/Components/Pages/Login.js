import "./Css/Login.css"
import {useState} from "react"
import Signupform from "./Signupform";


 const Login = () => {
  const  [signin, setSignin] = useState(false);
  return (
    <div className="login">
        <div className="login-navbar">
              <h1 className="navbar-logo">NETFLIX</h1>
              <button className="navbar-button" onClick = {() => setSignin(true)}>Sign In</button>
              
        </div>
        <div className="login-body">

          
          {
            signin?(<Signupform setSignin= {setSignin} />):(
              <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <form action="/" method="post" className="login-form" >
                <input type="text" placeholder="Email Address" />
                <button type="submit"onClick = {() => {  setSignin(true)}}>Get Started </button>
                 </form>
              </>
            )
            
           
           
          }
          
          

        </div>
        <div className="login-gradient"> </div>
        
        
    </div>
  )
}
export default Login;
