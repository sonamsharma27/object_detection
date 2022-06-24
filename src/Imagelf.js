import React, {useState} from 'react';
import 'tachyons';
import axios from 'axios';
import './Imagelf.css';
import './App.css'
import Object from './Object'
import ImageRecognition from './ImageRecognition';
const Imagelf =({url,updateurl})=>
{
	const [objects, setObjects] = useState([]);
	const [selectedFile, setSelectedFile] = useState(null);
const onFileChange = (event) => {
    
		setSelectedFile({ selectedFile: event.target.files[0] });
	  
	  }
	const  onFileUpload = () => {
    
		// Create an object of formData
		const formData = new FormData();
	  
		// Update the formData object
		formData.append(
			"file",
		  selectedFile,
		  selectedFile.name
		);
	  
		// Details of the uploaded file
		console.log(selectedFile);
	  
		// Request made to the backend api
		// Send formData object
		// axios.post("api/uploadfile", formData);
		fetch('http://localhost:3005/image',{
       method: 'post',
    // headers: {'Content-Type': 'application/json'},
    headers: {'Content-Type': 'multipart/form-data'},
 
    body: JSON.stringify({
      url: "",
	  img:  new FormData(formData)
    })
  })
   .then(response => response.json())
   .then(res=>{
	console.log(res)
	   setObjects([])
	   setObjects((res.outputs[0].data.concepts))
	
	})
 .catch(err=> console.log(err));

	  };
	const onButtonSubmit=()=>{
		console.log("to detect", url)
	
		fetch('http://localhost:3005/image',{
       method: 'post',
    headers: {'Content-Type': 'application/json'},
    // headers: {'Content-Type': 'multipart/form-data/application/json'},
 
    body: JSON.stringify({
      url: url,
	  img:  null
    })
  })
   .then(response => response.json())
   .then(res=>{
	console.log(res)
	   setObjects([])
	   setObjects((res.outputs[0].data.concepts))
	
	})
 .catch(err=> console.log(err))
	}
  return( 
  	<div clasName='container flex container1'>
  		 {/* <p className ='f3 center auto'> Enter url to detect objects!</p>                                                                                 */}
  		<div className = ' center  '>
  			<div className='shadow-5  form  center  pa4 ph3  br3  '>
				<input 
					type= 'text' 
					placeholder='Enter image url' 
					value={url}
					className='bg-light-blue w-70 center ba pv1 b--blue br2 bw1 pa3' 
					onChange = {(e)=>updateurl(e)}
					/>
				 {/* <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                  Upload!
                </button> */}
				<button className='grow br1 b i ph2 pv2 shadow-3 bg-light-blue ba b--blue bw1 w-30 br pa1 '
				onClick = {onButtonSubmit}
				>Detect</button>

			</div>
			</div>
				<div className='flex container content '>

				<ImageRecognition imageurl={url}/>
					<Object objects={objects}/>
					
				</div>
			
	</div>
    );
}

export default Imagelf;