import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='max-w-10/12 mx-auto flex justify-center items-center border p-3'>
            <div className='text-center '>
                <img className='w-full mb-4' src={bannerImg} alt="" />
                <h1 className='font-bold text-2xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='mt-3'>Beyond Boundaries Beyond Limits</p>

                <button className="btn rounded-xl bg-[#E7FE29] mt-3">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;