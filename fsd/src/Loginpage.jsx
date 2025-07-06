import React, {  useState , useContext, useEffect } from 'react'
import Login from './components/Login'
import { GlobalUserContext } from './App'
import Signup from './components/Signup'
import { useNavigate } from 'react-router-dom'
const Loginpage = () => {
  const [loginstr , setloginstr] = useState("Login")
  function change(){
    loginstr==="Login" ?setloginstr("Signup") :setloginstr("Login")
  }
  const AllData = useContext(GlobalUserContext);
  const navigate = useNavigate()
  useEffect(()=>{
    if(AllData.UserData.IsLoggedIn){
      navigate("Profile")
    }
  },[])
  return (
    <>
      <div className='dark:text-white flex justify-center '>
      {/* <Login loginstr= {loginstr} />
      <Signup loginstr= {loginstr} /> */}
      {loginstr==="Login" ? <Login loginstr= {loginstr}  fun = {change} /> : <Signup loginstr= {loginstr}  fun = {change}  /> } 
    </div> 
    </>
  )
}

export default Loginpage
