import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={` flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}
      >
        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-blue-50"> 20% </span>
            Discount for <span className="text-blue-50">1 Month</span>
            Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins ss:text-[72px] text-[52px] text-blue-50 ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
             {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted/>
          </div>
        </div>
        <h1  className=" font-poppins ss:text-[65px] text-[52px] text-blue-50 ss:leading-[100px] leading-[75px] w-full">
        Pyment  Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum
           dolor sit amet consectetur adipisicing elit. 
           Culpa earum quidem, quam esse natus dolorem quisquam
          </p>
      </div>
      <div className={`flex-1 ${styles.flexCenter } flex md:my-0 my-10 relative`}>
        <img src={robot} alt="Billing"
        className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient"></div>
      </div>
      <div className={`ss:hidden ${styles.flexStart} `}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;
