import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/Currency.png'

const NavBar = () => {
    return (
        <div>
            <div className="navbar w-10/12 mx-auto my-5 p-3">
        <div className="flex-1">
          <a className=" text-xl">
            <img className='w-12' src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center  gap-3">
          <span>60000000000000</span>
          <span>Coin</span>
          <img src={dollarImg}  alt="" />
        </div>
      </div>
        </div>
    );
};

export default NavBar;