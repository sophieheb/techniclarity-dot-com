import React, {useEffect} from 'react';
import SignUp from './SignUp';
import '../styles/app.css';
import styles from '../styles/home.module.css';

const Home = () => {
  useEffect(() => {
    window.fd('form', {
      formId: '5ec65ba7b9c153002b5acf95',
      containerEl: '#fd-form-5ec65ba7b9c153002b5acf95'
    });
  });

  return (<div>
    <section className={`${styles.homeBackground} p-sm-5 p-3 container-fluid`}>
      <h1 className="text-wrap p-sm-5 py-3 ">Techniclarity</h1>
      <h2 className="text-wrap p-sm-5 py-3 ">
        Online education that teaches Female Founders the tech
        know-how they need to launch their businesses.
      </h2>
    </section>
    ,
    <div className="p-5 container">
      <div id="mc_embed_signup">
        <div id="fd-form-5ec65ba7b9c153002b5acf95"></div>
      </div>
    </div>
  </div>)
};

export default Home;
