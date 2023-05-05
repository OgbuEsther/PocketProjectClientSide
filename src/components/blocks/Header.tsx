import React from "react";
import pic from "../../assets/three.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
<div className="w-[100vw] h-[15vh] bg-white flex justify-center items-center shadow-md">
<div className=" w-[80vw] h-[15vh] text-white flex justify-between items-center">
        <div className="text-black font-bold shadow-indigo-700 text-[25px]">logo</div>
        <button className="text-black font-bold shadow-indigo-700 text-[15px] bg-fuchsia-400 ">
            <Link to ="/book-now">
            Book Now</Link>
        </button>
    </div>
</div>
       
    
  );
};

export default Header;

// bg-fuchsia-400
  {/* <div className='mt-[70px] ml-[50px]'>
              <h1>Lorem ipsum dolor <br /> sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio vel ipsa?</p>
                <button className='text-black h-[40px] w-[120px] mt-[10px]  bg-orange-500'>Continue</button>
            </div> */}
       
        {/* <div className="h-[70vh] flex text-white w-[50vw] bg-fuchsia-400">
     
        <div className='w-[400px] h-[400px]'>
            <img src={pic} alt="" />
        </div>
        </div> */}