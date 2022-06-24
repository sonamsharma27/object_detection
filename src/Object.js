import React from 'react'
import 'tachyons'
import './Object.css'
function Object({objects}) {
  return (
     (objects.length)?
     <div className='pa3 ma3  br5 tablescroll'>
         
         <table className='br3 ba b--blue pa2 mb4' >
  <tr  className='br3'>
    <th className='br3 ba b--blue pa2' >Object Name</th>
    <th className='br3 ba b--blue pa2' >Probability</th>
  </tr>
  
 { objects.map((object) => {
        return  <tr className='grow mt '>
              <td className='br3 ba b--blue pa2'>{object.name}</td>
              <td className='br3 ba b--blue pa2'>{object.value}</td>
          </tr>
    }
  )}
</table>
     </div>
     :<></>
  )
}

export default Object