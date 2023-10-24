import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Images from './Component/Images'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
 const [images,setImages]=useState([])
 const [search,setSearch]=useState('')

  const GetImages=async()=>{
      const response =await axios.get(`https://api.unsplash.com/search/photos?query=${search}&client_id=IQwC3HFh-EmH_mahi2Ftr01wQsMvLsUalzXj-3NGkj8`)
      const data= await response.data.results
      setImages(data)
    }

    const changeValue=(event)=>{
      setSearch(event.target.value)
    }

    const imagesDisplay=async()=>{
      const response=await axios.get('https://api.unsplash.com/photos/?client_id=IQwC3HFh-EmH_mahi2Ftr01wQsMvLsUalzXj-3NGkj8')
      const data= await response.data
      setImages(data)
    }


    useEffect(()=>{
      imagesDisplay();
    },[])
  return (
    <div>
      <div className='d-flex justify-content-center p-5'>
      <input name='search' value={search} placeholder='SEARCH IMAGE' style={{width:"300px"}} className="form-control rounded" type='text' onChange={changeValue}/>
      <button onClick={GetImages} className='btn btn-success'>Search</button>
      </div>
      {
        images.length>0&&(
          <Images images={images}/>
        )
      }
    </div>
  )
}

export default App
