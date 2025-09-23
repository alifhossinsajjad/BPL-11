import React from 'react';
import bannerImg from '../../assets/banner-main.png'
import bannerShadow from '../../assets/bg-shadow.png'

const Banner = () => {
    return (
        <div className='max-w-10/12 mx-auto flex justify-center items-center bg-black py-18 rounded-xl bg-cover' style={{ backgroundImage: `url(${bannerShadow})`}}>
            <div >
                <div className='text-center' >
                <div className='flex justify-center items-center'>
                    <img className=' mb-4' src={bannerImg} alt="" />
                </div>
                <h1 className='font-bold text-white text-2xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='mt-3 text-white'>Beyond Boundaries Beyond Limits</p>

                <button className="btn rounded-xl bg-[#E7FE29] mt-3 border-0">Claim Free Credit</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;