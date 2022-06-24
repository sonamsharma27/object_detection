import React from 'react';
import 'tachyons';
// import './ImageRecognition.css';
const ImageRecognition =({imageurl})=>
{
  return( 
 <div className={' center ma2 mv8'} >
 <div className={' mt2'}>
 	<img id =''alt=''src={imageurl} style={{width:'400px', height: 'auto'}}/>
 	</div>
 	</div>
    );
}


export default ImageRecognition;