import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';

const MyModal = ({image,setVisible}) => {
  return (
    <div>
      <div className='modal-wrapper'>
                <FontAwesomeIcon icon={faTimes} onClick={()=>setVisible(false)}/>
                    <img src={image.urls.regular} className='modal-img rounded' alt="image"/><br/>
                    <div>
                        <img src={image.user.profile_image.small} style={{width:"80px",height:"80px",marginTop:"7px",borderRadius:"100%"}}/>
                        <span className='userName'>{image.user.username}</span><br/>
                        <FontAwesomeIcon icon={faInstagram} style={{marginLeft:"70px",marginTop:"0px"}}/><span>{image.user.instagram_username}</span>
                        <FontAwesomeIcon icon={faTwitter} style={{marginLeft:"10px"}}/><span>{image.user.twitter_username}</span>
                        <FontAwesomeIcon icon={faThumbsUp} style={{marginLeft:"80%"}}/><span>{image.likes}</span>
                    </div>
                </div>
    </div>
  )
}

export default MyModal
