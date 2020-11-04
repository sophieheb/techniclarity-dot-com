import React, {useEffect, useState} from 'react';

import axios from 'axios';

import instagramLogo from '../assets/instagramLogo.svg'
import {  isMobile
} from "react-device-detect";

function Instagram() {
    const [token, setToken] = useState(null)
    const [instagramData, setInstagramData] = useState([])
    useEffect(()=>{
        const fetchToken = async () => {
          const result = await axios.get('https://techniclarity-instagram-widget.herokuapp.com/token.json')
          setToken(result.data.token);
        };
     
        fetchToken();
    
      }, [])
    
      useEffect(()=>{
        const fetchInstagramData = async () => {
          try {
          const result = await axios.get(`https://graph.instagram.com/me?fields=media.limit(${isMobile? 4: 5}){thumbnail_url,media_url,permalink}&access_token=${token}`)
          setInstagramData(result.data.media.data)
        } catch {}
        };
        if(token){
          fetchInstagramData()
        }
      }, [token])
  return (
    <div className="container-fluid py-xl-5 p-3 bg-yellow">
      { instagramData.length > 1 ?
        <>
          <div className="row justify-content-center ">
            <div className="col text-center">
              <img
                src={instagramLogo}
                alt="Instagram logo"
                className="pb-3"
              />
              <h3>the.techniclarity</h3>
              <a href="https://instagram.com/the.techniclarity">
                <p>Join us on Instagram</p>
              </a>
            </div>
          </div>
          <div className="row justify-content-center">

            {instagramData.map(post =>{
              return <a className="col-md-2 col-6 pt-3" href={post.permalink}>
                <img className="img-fluid" src={post.media_url}/>
              </a>
            })}
          </div>
        </>
      : null }
    </div>

  );
}

export default Instagram;

