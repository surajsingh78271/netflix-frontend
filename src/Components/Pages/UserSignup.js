import {useState} from "react"
import "./Css/UserSignup.css"

function UserSignup(props) {
    const [name,setName] = useState(null)
    const [email,setEmail] =  useState(null);
    const [password,setPassword] = useState(null);
    const [confirmpassword,setConfirmPassword] = useState(null);
     const [statuses, setStatuses] = useState("")

    const Signuphandler = async (e) =>{
        e.preventDefault();
        if( name && email && password && confirmpassword){
          if(password === confirmpassword){

           const response = await fetch("https://netflix-clone-backend-78271.onrender.com/form/signup",{
           method: "POST",
           headers: {
             'Accepted': 'application/json',
             'Content-Type':"application/json"
           },
           body: JSON.stringify({name,email,password,confirmpassword}),
           mode: "cors"
         });
         const data = await response.json();
         console.log(data)
         if( response.status === 200 ){
            setStatuses("registered Succesfully. Go to Login.");
         }
         if( response.status === 201 ){
          setStatuses("emails are already registered")
         }
         if( response.status === 202 ){

            setStatuses("error are present")
            console.log(response)
         }
         


          }else{
            setStatuses("password and re-enter password doesn't match");
          }
        


        }else{
          setStatuses("all fields are mandatory to fill.")
        }


         };

  return (<div className="usersignup">
    <div className="usersignupclose" onClick={()=>{props.setUserSignup(false)}}><span>X</span></div>
  <form  method="POST" className="usersignup-form" onSubmit={(e)=>{Signuphandler(e)}} >
   <h1>Sign Up</h1>
   <input type="name" className="input" placeholder="Enter your name" name="name" id="usersignupname" onChange={(e)=>{setName(e.target.value)}} />
   <input type="email" className="input" placeholder="Enter your email" name="email" id="usersignupemail" onChange={(e)=>{setEmail(e.target.value)}} />
   <input type="password" className="input" placeholder="Enter your password" name="password" id="usersignuppassword" onChange={(e)=>{setPassword(e.target.value)}} />
   <input type="password" className="input" placeholder="Re-Enter your password" name="password" id="usersignupconfirmpassword" onChange={(e)=>{setConfirmPassword(e.target.value)}} />
   <div>
   <button type="submit"  >Sign Up</button>
   
   </div>
   
   
  </form>
  <div className= {(statuses === "registered Succesfully."? "statusindicationgreen" : "statusindicationred" )} >{statuses}</div>
 
  

</div>
  )
}

export default UserSignup