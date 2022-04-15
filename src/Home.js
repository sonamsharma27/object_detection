import React,{useState} from 'react'
import Imagelf from './Imagelf'
import ImageRecognition from './ImageRecognition'
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
    history("/login")
  }
  return (
    <div className=''> <button type="submit" onClick= {(e)=>logout(e) } className="btn btn-success log" >Logout</button>
    <div className=' d-flex '>
      
       <Imagelf url={imageurl} updateurl={updateurl}/>
      
    </div>
    </div>
  )
}

export default  Home