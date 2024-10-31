import React from 'react'
import '../Pages/signup-page/SignUp.css'
function ButtonSignUP({img,title,onClick}) {
  return (
    <div className="sign-with-thirdPart">
      <button onClick={onClick} className="btn-google">
              <img src={img} alt="" />
            {title}
            </button>
    </div>
  )
}

export default ButtonSignUP
