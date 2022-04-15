import React, {useState} from 'react'
import 'tachyons'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const history = useNavigate();
    const updateUser =(e)=>{
        setUser({...user,[e.target.name]:e.target.value });
    }
    const onSubmitSignup = ()=>{
        console.log("Submitted")
     // eslint-disable-next-line no-lone-blocks
     {   (user.name.length===0||user.email.length===0||user.password.length===0)?alert("Invalid details"):
        fetch('http://localhost:3005/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
        
                name:user.name,
                email: user.email,
                password: user.password
                
            }) 
        })
        .then(response =>{  response.json(); 
            // alert(response);
          if(response.status===200)
            history("/home")
            else
            alert("Unable to register\nInvalid or Duplicate data")        
        })}
    }


  return (
    <>
                <article className=" br1 card ba dark-gray bw1 ph3 pv2 center shadow-5 b--black-10 mv4  w-100 w-50-m w-25-l mw5 center">
                    <div className="pa4 black-80">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0 ">Signup</legend>

                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={user.name}
                                        onChange={(e)=>updateUser(e)}
                                    />
                                </div>
    

                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                                        type="email"
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
                                            value="Signup"
                                            onClick = {onSubmitSignup} 
                                        />
                                    </div>
    
                                 <label className="pa0 ma0 lh-copy f6 pointer" />
    
                                    </fieldset>
                                   
    
                                </div>
                        </div>
                </article>
        
    </>
  )
}

export default Signup