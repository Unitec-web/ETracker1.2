import React,{useState} from 'react';
import './Login.css';
import login_gif_icon from '../../Icons/login.gif';
import google from '../../Icons/googleButton.png';
import facebook from '../../Icons/FacebookButton.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useAuth } from '../../context/context';
import { doSignInWithEmailAndPassword,doSignInWithGoogleAccount } from '../../Firebase/auth';
import { Navigate } from 'react-router-dom';
function Login () {
    const {isloggedIn} = useAuth()
    const [isSigningIn,setIsSigningIn] = useState(false)
    const [formData,setFormData]=useState({
        email:'',
        password:'',
        rememberMe:false,
    })

    const handleChange =(e)=>{
        const {name,value,checked, type} = e.target
        setFormData(prevData=>{
            return {...prevData,[name]:type ==="checkbox"?checked:value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // here you would normally send the data to your server for authentication
        // in a real-world application, you would also want to handle errors and display messages to the user
        // this is just a mockup
    }
    const handleClickGoogleLogin = async (e) => {
        e.preventDefault();
        if(!isSigningIn){
            setIsSigningIn(true);
        try {
            await doSignInWithGoogleAccount();
           
        } catch (error) {
            setIsSigningIn(false)
            
            console.error(error);
        }
    }}
    const handleLoginWithEmailAndPassword = async(e)=>{
        e.preventDefault()
        
        if(!isSigningIn){
            setIsSigningIn(true)
            const trimmedPassword = formData.password.trim()
            const trimmedEmail= formData.email.trim()
            try{
            await doSignInWithEmailAndPassword(trimmedEmail,trimmedPassword)
            setFormData({
                email:'',
                password:'',
                rememberMe:false,
            })
            }
            catch(err){
                
                setIsSigningIn(false)
                alert(`Login failed: ${err.message}`);
                console.error(err)
            }
        }
    }
    
    return(
        <div className="container text-center ">
        {/* take user to home page if they are already signed in */}
       { isloggedIn && (<Navigate to={"/homepage"} replace ={true} />)} {/*i need to decide the page the user goes to when then log in from any of the two radio buttons clicked */}
            <div className="logindiv row">
            <div className='Login-image col'>
                <img src={login_gif_icon} alt="Login GIF" className="img-fluid" />
            </div>
            <div className='Login col shadow p-3 mt-2 mb-2 bg-body-tertiary rounded'>
                <div className='header'>
                    Unity <br />Money Management
                </div>
                <div className='underline'> </div>
                <form onSubmit={(e)=>{handleSubmit(e)}} className='inputs'>
                    <input onChange={handleChange} value={formData.email} className='logininput  ' type="email" placeholder='Email' name='email'/>
                    <input onChange={handleChange} value={formData.password} className='logininput' type="password" placeholder='Password' name='password'/>
                    
                <section className='rememberme'>
                    <input onChange={handleChange} checked={formData.rememberMe} type="checkbox" name='rememberMe' />
                    <>Remember Me !</>
                </section>
                <p className='terms'>By clicking Login, you agree to our <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a></p>
                
                    <button disabled={isSigningIn} onClick={(e)=>{handleLoginWithEmailAndPassword(e)}} className='submit login_button' type='submit'>Login</button>
              
                </form>
                {/* this button will direct you to the page to handle forgotten passwords */}
                <div className='forgotten_password'>Forgotten Password?</div>
                <div className='underline'></div>
                <div className='row'>
                  {/* the authentication logic will be applied on this 2 buttons */}
                    <div className='col'><button type='submit' disabled={isSigningIn} onClick={(e)=>{
                        handleClickGoogleLogin(e)
                    }}><img className='autologin' src={google} alt="" /></button></div>
                    <div className='col'><button><img className='autologin' src={facebook} alt="" /></button></div>
                </div>
                <div>
                    <p className='register'>Don't have an account?</p>
                    <Link to ='/register' style={{textDecoration:'none'}}><button className='submit '  type='submit'>Create One</button> </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login

