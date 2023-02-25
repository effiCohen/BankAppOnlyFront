import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className='absolute z-[0] w-[60%] h-[60%]  rounded-full b__gradient -left-[50%]'/>

      <div className={`${layout.sectionImgReverse} relative`}>
        <img
          src="https://zylo.com/wp-content/uploads/2021/09/complete-SaaS-visibility-hero@2x-1024x853.png"
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden"/> billing invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Libero, error. Ipsa blanditiis, molestias adipisci iure quod voluptatem placeat
            reiciendis deleniti  tempora ad minima!</p>
            <div className="flex flex-row flex-wrap  mt-5 justify-around  ">
            <img src={apple} alt="google_play"  className=" w-[128px] h-[42px] object-contain mr-5 cursor-pointer "/>
            <img src={google} alt=""  className=" w-[128px] h-[42px] object-contain mr-5 cursor-pointer "/>
            <a href="https://github.com/effiCohen">
            <img src="https://mutata.io/assets/github-badge.png"  alt="github"  className=" w-[130px] h-[42px] object-contain  cursor-pointer"  />
            </a>
            </div>
      </div>
    </section>
  );
};

export default Billing;
