import React from 'react'
import 'tachyons'
import './Object.css'
function Object({objects}) {
  return (
     (objects.length)?
     <div className='pa3 ma3'>
         
         <table className='br3 ba b--green pa2' >
  <tr  className='br3'>
    <th className='br3 ba b--green pa2' >Object Name</th>
    <th className='br3 ba b--green pa2' >Probability</th>
  </tr>
  
 { objects.map((object) => {
        return  <tr className='grow mt '>
              <td className='br3 ba b--green pa2'>{object.name}</td>
              <td className='br3 ba b--green pa2'>{object.value}</td>
          </tr>
    }
  )}
</table>
     </div>
     :<></>
  )
}

export default Object