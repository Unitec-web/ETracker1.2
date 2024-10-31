import React from 'react'
import '../Pages/signup-page/SignUp.css'
function LabledButton({type,id,lable,placeholder,name,onChange,myvalue}) {
  return (
    <div>
      <label className="label" htmlFor={id}>{lable}</label>
      <input onChange={onChange} name={name} type={type} className="input" id={id}  placeholder={placeholder} value={myvalue} />
    </div>
  )
}

export default LabledButton
