import React, { useState } from 'react'
import { doSignOut } from '../../Firebase/auth';
import { useAuth } from '../../context/context';
import { Navigate } from 'react-router-dom';
import NavBar from '../../Components/ui/NavBar';
import TopNavbar from '../../Components/ui/TopNavBar';
import CreateNote from '../Note/CreateNote';
import "./home.css"
import DisplayNote from '../Note/DisplayNote';
import Note from '../Note/Note';
import List from './List'

function Expenditure() {
  const [isLoggingOut,setIsLoggingOut]=useState(false)
  const {isloggedIn} = useAuth()
  const handleClick = (e)=>{
    e.preventDefault();
if(!isLoggingOut){
  setIsLoggingOut(true);
  doSignOut()
}
  }
  return (
    <div className='home-page-container'>
      <TopNavbar />
      {/* this is just to test code. feel free to comment the code below and work */}
    {!isloggedIn && (<Navigate to={"/"} replace={true} />)}
    <div>
    <List />
    </div>
     <NavBar />
    </div>
  )
}
export default Expenditure
