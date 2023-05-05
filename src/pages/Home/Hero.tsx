import React from "react";
import pic from "../../assets/three.png"
const Hero = () => {
  return (
    <div>
      <div className="w-100%  bg-gradient-to-r from-indigo-500 flex justify-center items-center">
        <div className="w-[500px]">
          <h1>Lorem ipsum <br /> dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            perspiciatis provident laborum.
          </p>
          <button className="text-[15px] font-bold cursor-pointer 
          mt-[20px]
          hover:scale-105 
          hover:bg-black
          hover:text-white
          hover:font-semibold
          ease-in-out duration-300 uppercase mx-4" >Continue</button>
        </div>
        <div  className="w-[450px] ml-[130px] ">
            <img  src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
