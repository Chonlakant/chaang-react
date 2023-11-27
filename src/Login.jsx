import React, { useState } from 'react'
import axios from 'axios';
import  './Login.css'
import user_icon from './Assets/person.png'
import { useNavigate} from "react-router-dom";
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'




function Login() {
const navigate = useNavigate();
const [inputs,setInputs] = useState({});


const handleChange = (event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values,[name]: value}))
}


  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(inputs)
   // navigate('/home', { state: { responseData: "1234"} });


    let data = JSON.stringify({
      "technicial_code": "001c",
      "password": "123456"
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://apichaang.psi.co.th/api/TechnicialSignin',
      headers: { 
        'username': 'PsiTDC', 
        'password': 'GwROBxrhCu4rrpUV', 
        "Access-Control-Allow-Origin": "*",
        'secretkey': 'rso9Dw', 
        'function': 'TechnicialSignin', 
        'Content-Type': 'application/json', 
        'Cookie': 'ci_session=eo1q4c95fkcvj5a62u4omodr92h5j4o3'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    


}

const [action,setAction] = useState("Login");

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='container'>
      

      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underlind'></div>
      </div>
    
       <div className='inputs'>

    
        <div className='input'>
          <img className='input_img' src={email_icon}alt=""/>
          <input type='text' name='code'placeholder='รหัสช่าง'
          value={inputs.code || ""} onChange={handleChange}
          />
        </div>
        <div className='input'>
          <img  className='input_img' src={password_icon} alt=""/>
          <input type='password' name='password' 
          id='password' placeholder='Password'
          value={inputs.password || ""} onChange={handleChange}/>
        </div>
        </div>
     
        <div className='submit-container'>
        
          <input type='submit'/>
        </div>

  

    </div>

      </form>

    </div>
    
  )
}

export default Login
