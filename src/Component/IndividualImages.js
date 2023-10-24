import React, { useState } from 'react'
import MyModal from './MyModal'
const IndividualImages = ({image}) => {

    const [visible,setVisible] =useState(false)

  return (
    <>  
    <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
         <div className='card' style={{width:"18rem",marginBottom:"10px"}}>
            
      <img className="card-img-top" src={image.urls.thumb} onClick={()=>setVisible(true)}/><br/>
      <span>Likes: {image.likes}</span><br/>
      <span>User: {image.user.username}</span>
    </div>
    {
        visible && <MyModal image={image} setVisible={setVisible}/>
    }
    </div></div>
    </>
   
  )
}

export default IndividualImages
