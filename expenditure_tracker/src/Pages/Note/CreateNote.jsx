import React,{useEffect, useState} from 'react'
import "./note.css"
import NoteAddIcon from '@mui/icons-material/NoteAdd';


import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function CreateNote() {
  const navigate=useNavigate()
  const [note, setNote] =useState({title: '', content: ''})
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const handleChange =(event) => {
    const {name, value} = event.target
    setNote({...note, [name]: value})
  }
  const handleSubmit =(e)=>{
    
      if(!note.title && !note.content){
        alert("Title or content must be specified")
        return 
      }
      else{
      axios.post('http://localhost:2010/createNote',note)
      setNote({title: '', content: ''})
      // navigate('/')
      }
  
    console.log(note)
  }
  const handleCreateNote =()=>{
    setIsCreatingNote(!isCreatingNote)
  }
  
  return (
    <div>
      <div >
        {!isCreatingNote &&

          <button onClick={handleCreateNote} className='createNote'>
        <NoteAddIcon  fontSize='inherit' />
        </button>
        }
       {isCreatingNote &&

      <form onSubmit={(e)=>{handleSubmit(e)}}   className='create-note-form'>
          <input className='create-note-title' type="text" placeholder='Title' name='title' onChange={handleChange} value={note.title}/> <br />
          <textarea className='create-note-content' type="text" placeholder='Note' name='content' onChange={handleChange} value={note.content}/>
          <button  ><NoteAddIcon fontSize='inherit' /></button>

      </form>
         } 
      </div>
    </div>
  )
}

export default CreateNote
