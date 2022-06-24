import React,{useState} from 'react'
import Imagelf from './Imagelf'
// import ImageRecognition from './ImageRecognition'
import 'tachyons'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Home() {
    const history = useNavigate();

  const [imageurl, setImageurl]= useState("");
  const updateurl =(e)=>{
    setImageurl(e.target.value)
    
  }
  const logout =(e)=>{
    e.preventDefault()
    history("/")
  }
  const handle_webcam = () =>{
    history("/web_cam");
  }
  return (
    <div className='container1'> 
    
    <button type="submit" onClick= {(e)=>logout(e) } className="btn btn-info log" >Logout</button>
    <button className="web_cam_button" onClick={(e)=>handle_webcam()} >Click here for live object detection</button>

    <div className=' d-flex '>
      
       <Imagelf url={imageurl} updateurl={updateurl}/>
    </div>
    </div>
  )
}

export default  Home