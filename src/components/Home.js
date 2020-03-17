import React from 'react';
import SignUp from './SignUp';
import '../styles/app.css';
import styles from '../styles/home.module.css';

const Home = () => (
  <div>
    <section className={`${styles.homeBackground} p-5 container-fluid`}>
      <h1 className="text-wrap">Techniclarity</h1>
      <h2>
        Online education that equips aspiring entrepreneurs with the technical
        know-how they need to launch their businesses.
      </h2>
      <section className="row justify-content-around">
        <section className={`${styles.customerJourneyContainer} col-sm p-4 m-5 box-shadow`}>
          <h3 className="text-center">Before Techniclarity</h3>
          <ul className={styles.before}>
            <li className={`${styles.listItem} p-2`}>Technology is creating a barrier for you and your business.</li>
            <li className={`${styles.listItem} p-2`}>You feel daunted by the first steps you should take to get your business off the ground.</li>
            <li className={`${styles.listItem} p-2`}>You don’t know what technical skills you need, let alone how to learn about them.</li>
            <li className={`${styles.listItem} p-2`}>You are putting off starting your business.</li>
            <li className={`${styles.listItem} p-2`}>Your business is stalling</li>
          </ul>
        </section>
        <section className={`${styles.customerJourneyContainer} col-sm p-4 m-5 box-shadow`}>
          <h3 className="text-center">After Techniclarity</h3>
          <ul className={styles.after}>
            <li className={`${styles.listItem} p-2`}>Technology is a part of your business that you understand and feel in control of.</li>
            <li className={`${styles.listItem} p-2`}>You have a clear plan of action to launch your business.</li>
            <li className={`${styles.listItem} p-2`}>You feel empowered to continue learning about technology.</li>
            <li className={`${styles.listItem} p-2`}>You feel confident that with your new knowledge you can work through exciting technical projects.</li>
            <li className={`${styles.listItem} p-2 ${styles.thriving}`}>Your business is thriving</li>
          </ul>
        </section>
      </section>
    </section>
    ,
    <div className="p-5 container">
      <div id="mc_embed_signup">
        <h2 className="m-0">Join our mailing list to be the first in the know when we launch</h2>
        <SignUp styles={styles.homeMailchimp} />
      </div>
    </div>
  </div>
);

export default Home;
