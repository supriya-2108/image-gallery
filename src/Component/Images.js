import React from 'react'
import IndividualImages from './IndividualImages'

const Images = ({images}) => {
  return( 
    <>
    <div className='container'>
        <div className='row'>
            { 
                images.map((image)=>( 
                
                <div className='col-md-3' key={image.id}>
                <IndividualImages image={image} alt="image"/>
                </div>
                
                ))
            } 
            </div>
        </div>
</>
)
}

export default Images
