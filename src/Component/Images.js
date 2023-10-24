import React from 'react'
import IndividualImages from './IndividualImages'

const Images = ({images}) => {
  return( 
    <>
    <div className='container'>
        <div className='row'>
            { 
                images.map((image)=>( 
                <>
                <div className='col-md-3'>
                <IndividualImages image={image} key={id} alt="image"/>
                </div>
                </>
                ))
            } 
            </div>
        </div>
</>
)
}

export default Images
