import React, {useState} from 'react';
import 'tachyons';
import './Imagelf.css';
import './App.css'
import Object from './Object'
import ImageRecognition from './ImageRecognition';
const Imagelf =({url,updateurl})=>
{
	const [objects, setObjects] = useState([]);

	const onButtonSubmit=()=>{
		console.log("to detect", url)
	
		fetch('http://localhost:3005/image',{
       method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      url: url
    })
  })
   .then(response => response.json())
   .then(res=>{
	console.log(res)
	   setObjects([])
	   setObjects((res.outputs[0].data.concepts))
	
	})
 .catch(err=> console.log(err));
	}
  return( 
  	<div clasName='container flex center'>
  		 <p className ='f3 center auto'> Enter url to detect objects!</p>                                                                                
  		<div className = ' center  '>
  			<div className='shadow-5  form  center  pa4 ph3  br3  '>
				<input 
					type= 'text' 
					placeholder='Enter image url' 
					value={url}
					className='bg-light-green w-70 center ba pv1 b--green bw1 pa3' 
					onChange = {(e)=>updateurl(e)}
					/>
				<button className='grow ph2 pv2 shadow-3 bg-light-blue ba b--blue bw1 w-30 br pa1 '
				onClick = {onButtonSubmit}
				>Detect</button>
			</div>
			</div>
			<div className='flex container content'>

			<ImageRecognition imageurl={url}/>
				<Object objects={objects}/>
				
			</div>
			
	</div>
    );
}

export default Imagelf;