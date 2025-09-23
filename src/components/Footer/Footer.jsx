import React from 'react';
import logoImg from '../../assets/logo.png'
const Footer = () => {
    return (
        <div>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-black pt-32 pb-10">

                <div className='flex justify-center items-center mb-12'>
                    <img className='w-32 h-32' src={logoImg} alt="" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h2 className='text-white text-2xl'>About US</h2>
                        <p className="text-sm/7 mt-6 text-gray-500 w-66">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="flex flex-col lg:items-center lg:justify-center">
                         <h2 className="font-bold text-2xl mb-5 text-white">Quick Links</h2>
                        <div className="flex flex-col text-sm  list-disc">
                            <li className="hover:text-slate-600 transition">Home</li>
                            <li className="hover:text-slate-600 transition">Service</li>
                            <li className="hover:text-slate-600 transition">About</li>
                            <li className="hover:text-slate-600 transition">Contact Us</li>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl mb-5 text-white">Subscribe to our newsletter</h2>
                        <div className="text-sm space-y-6 max-w-sm">
                            <p>Subscribe to our newsletter for the latest updates.</p>
                            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">
                                <input className="focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2" type="email" placeholder="Enter your email" />
                                <button className="bg-indigo-600 px-4 py-2 text-white rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="py-4 text-center border-t mt-22 border-slate-200">
                    @2024 Your Company All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;