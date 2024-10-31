import React, { useState,useEffect } from 'react'
import "./note.css"
import axios from 'axios'
function Note({title,content}) {
    const [noteIsOpen, setNoteIsOpen] = useState(false)
    const [isEdit,setIsEdit] = useState(false)
   const handleNoteClick=()=>{
    setNoteIsOpen(!noteIsOpen);
    }
    const handleChange =()=>{
        console.log("handleChange")
    }
    const handleEdit =()=>{
        setIsEdit(true)
    }
    const handleUpdate =()=>{
        setNoteIsOpen(false)
        setIsEdit(false)
        console.log("handleUpdate")
    }
   
  return (
    <div>
        {
            !isEdit &&
        <section className='note-item' onClick={handleNoteClick}>
      <h1 className='title '>{title}</h1>

      <p className='content '>{content}</p>
      
      {
        noteIsOpen &&
      <>
      <button onClick={handleEdit} className='edit-btn note-btn'>Edit</button>
      <button className='delete-btn note-btn'>Delete</button>
      </>
        }
        </section>
      }
      {
        isEdit &&
      <form action="">
        <textarea style={{marginTop:"5%"}} className='updateNote' type='text' placeholder='update Note' name='Update' onChange={handleChange}></textarea>
        <button className='update-note-btn' onClick={handleUpdate}>update</button>
      </form>
       }
    </div>
  )
}

export default Note
