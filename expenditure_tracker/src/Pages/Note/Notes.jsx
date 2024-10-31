import React from 'react'
import DisplayNote from './DisplayNote'
import CreateNote from './CreateNote'
import "../expenditure/home.css"
import NavBar from '../../Components/ui/NavBar'
import TopNavbar from '../../Components/ui/TopNavBar'
function Notes() {
  return (
    <div className='home-page-container'>
      {/* this is the actual note page rendering the notes seen on the screen */}
      <TopNavbar />
     <DisplayNote />
     <CreateNote /> 
     <NavBar />
    </div>
  )
}

export default Notes
