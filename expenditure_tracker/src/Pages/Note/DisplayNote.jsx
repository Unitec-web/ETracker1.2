import React, { useState,useEffect } from 'react'
import Note from './Note'

import axios from 'axios'
function DisplayNote() {
  const [note,setNote] =useState([])
   //fetch sample note data
   useEffect(()=>{
    axios.get('http://localhost:2010/')
    .then((response)=>{
      setNote(response.data)
    })
  },[])
  return (
    <div>
        {/* loop in the database and display all the notes */}
     { note.map((dat,key)=>(
       <Note key={key} title={dat.title} content={dat.content}/>))
      }
     
    </div>
  )
}

export default DisplayNote
