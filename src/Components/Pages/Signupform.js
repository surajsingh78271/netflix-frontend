import "./Css/Login.css"
import {useState} from "react"
import { useDispatch} from "react-redux"
import {login  } from "../../features/userSlice"
import UserSignup from "./UserSignup";

function Signupform(props) {
  const [email,setEmail] =  useState(null);
   const [password,setPassword] = useState(null);
  const [userSignup,setUserSignup] = useState(false);
  const [statuses, setStatuses] = useState("")
   const dispatch = useDispatch();
  //  const user =  useSelector(selectUser);


  const Loginhandler = async (e) =>{
       e.preventDefault();
       

       if( email && password ){

        const response = await fetch("https://netflix-clone-backend-78271.onrender.com/form/login",{
         method: "POST",
          headers: {
          'Accepted': 'application/json',
          'Content-Type':"application/json"
         },
        body: JSON.stringify({ email , password}),
         mode: "cors"
    });
    
      const data = await response.json();
     
      


    if ( (data.email === email) && (data.password === password )) {
        dispatch(login({ email , password }))
        setStatuses(" login succesfully.")
    } else if( response.status === 201 ){
      setStatuses("email and password are incorrect")
      }
      else if( response.status === 202 ){
        setStatuses("Email is not Registered. Go to Sign Up.");

      }
    
       }else{
        setStatuses("all fields are mandatory to fill.")
       }
      
    };
   
  return (
     userSignup?(<UserSignup setUserSignup = {setUserSignup}/>):
    (<div className="signup">
       <div className="userloginpclose" onClick={()=>{props.setSignin(false)}}><span>X</span></div>
       <form  method="POST" className="signup-form" onSubmit={(e)=>{Loginhandler(e)}} >
        <h1>Login</h1>
        <input type="email" placeholder="Enter your email" name="email" id="signupemail" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="Enter your password" name="password" id="signuppassword" onChange={(e)=>{setPassword(e.target.value)}} />
        <button type="submit"  >Sign In</button>
        <h4>New to Netflix ?<span onClick={()=>{setUserSignup(true)}}> Sign Up Now.</span></h4>
        
       </form>
       <div className= {(statuses === "registered Succesfully."? "loginstatusindicationgreen" : "loginstatusindicationred" )} >{statuses}</div>

    </div>)
  )
}
  


export default Signupform