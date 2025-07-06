import './App.css';
import React, { useState, createContext, useEffect } from 'react'
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Header from './components/Header';
import Slide from './components/Slide'
import Input from './components/Input';
import Loginpage from './Loginpage';
import Foot from './components/Foot';
import Profile from './components/Profile';
export const GlobalUserContext = createContext();

//bg-[#66A5AD] dark:bg-[#002C54]
function App() {

  const [UserData, setUserData] = useState({
    IsLoggedIn: null,
      Username: "",
      Name : "",
  
  })
  const {IsLoggedIn , Username } = UserData
   function onCorrectData(obj) {
    const myobj = {
      IsLoggedIn: true,
      Username: obj.Username,
      Name : obj.Name,
    }
     setUserData(myobj)
     printGlobalState()
  }
  function printGlobalState() {
    console.log(`Printing Global State \n `)
    console.log(UserData)
  }
  console.log(UserData);
  
  function onLogOut() {
    setTimeout(()=>{      
      setUserData({
      IsLoggedIn: false,
      Username: null,
      Name : null
    })   
  },1000)
  }

  const AllData = {
    UserData,
    onCorrectData,
    printGlobalState,
    onLogOut,
  }
  useEffect(()=>{
    
      const data = JSON.parse(localStorage.getItem("UserData"))
      if(data !==null){
        if(data.IsLoggedIn !== null){
            setUserData(data)
        }
      }
   
  },[])
  useEffect(()=>{
    if(UserData.IsLoggedIn !== null){
      localStorage.setItem("UserData" , JSON.stringify(UserData))
    }
    
  },[IsLoggedIn , Username , UserData ])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Navbar /><Input /><Slide /><Home /><Foot/></>
    },
    {
      path: "/About",
      element: <><Navbar /><About /></>
    },
    {
      path: "/Profile",
      element: <><Navbar /><Profile /></>
    }
    ,
    {
      path:  "/LogIn" ,
      element:   <><Navbar /><Loginpage /></>
    },
  ])
  return (
    <div className={`dark`} id='App'>

      <GlobalUserContext.Provider value = {AllData}>
      <RouterProvider router={router} />
      </GlobalUserContext.Provider>
    </div>
  );
}
export default App;