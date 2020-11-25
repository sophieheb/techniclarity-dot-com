import React, { useEffect, useState, useRef } from 'react';

import axios from 'axios';

import { isMobile } from 'react-device-detect';
import instagramLogo from '../assets/instagramLogo.svg';

import useOnScreen from '../shared/onScreen';

function Instagram() {
  const [token, setToken] = useState(null);
  const [instagramData, setInstagramData] = useState([]);
  const ref = useRef();
  const instagramOnScreen = useOnScreen(ref, isMobile ? '100px' : '300px');

  useEffect(() => {
    const fetchToken = async () => {
      const result = await axios.get('https://techniclarity-instagram-widget.herokuapp.com/token.json');
      setToken(result.data.token);
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const result = await axios.get(`https://graph.instagram.com/me?fields=media.limit(${isMobile ? 4 : 5}){thumbnail_url,media_url,permalink}&access_token=${token}`);
        setInstagramData(result.data.media.data);
      } catch {}
    };
    if (token && instagramOnScreen) {
      fetchInstagramData();
    }
  }, [token, instagramOnScreen]);

  return (
    <div ref={ref} className="container-fluid py-xl-5 p-3 bg-yellow">
      { instagramData.length > 1 && instagramOnScreen
        ? (
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

              {instagramData.map((post) => (
                <a className="col-md-2 col-6 pt-3" href={post.permalink}>
                  <img className="img-fluid" src={post.media_url || post.thumbnail_url} alt="social-media-post" />
                </a>
              ))}
            </div>
          </>
        )
        : null }
    </div>

  );
}

export default Instagram;
