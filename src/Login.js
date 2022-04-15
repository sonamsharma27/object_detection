import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'tachyons';
import './App.css';

function Login() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const history = useNavigate();
    const updateUser =(e)=>{
        setUser({...user,[e.target.name]:e.target.value });
    }
    const onSubmitLogin = () =>{
            // console.log("Login");
            fetch('http://localhost:3005/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
            
                    email: user.email,
                    password: user.password
                    
                }) 
            })
            .then(response =>{  response.json(); 
                
                console.log(response.status)
                
                    console.log("home history")
                    if(response.status===200)
                     history("/home")
                
               
            })
            
    }

  return (
    <article className=" pack card-1 mt2 br1 ba dark-gray bw1 ph3 pv2 shadow-5 b--black-10 mv4  w-100 w-50-m w-25-l mw5 center" 

      //style={{backgroundImage:"linear-gradient(315deg, #ffffff 0%, #96e4df 74%);", backgroundColor:"4dccc6"}}
      >
                    <div className="pa4 black-80">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Login</legend>

                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="email"
                                        required
                                        id="email"
                                        value={user.email}
                                        onChange={(e)=>updateUser(e)}
                                    />
                                </div>

                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Password</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        value={user.password}
                                        onChange={(e)=>updateUser(e)}
                                    />
                                    
                                </div>
                                <div className="mt3">
                                        <input
                                            className=" ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                            type="submit"
                                            value="Login"
                                            onClick = {onSubmitLogin} 
                                        />
                                    </div>
                                    <p>Don't have an account? 
                                        <button className='black' type="submit"  onClick={(e)=>history("/signup")} >Register here</button>
                                        </p>
    
                                 <label className="pa0 ma0 lh-copy f6 pointer" />
    
                                    </fieldset>
                                  
                                  {/* <Link className="" to={"/home"}>home</Link> */}
                                </div>
                        </div>
                </article>
        
  )
}

export default Login