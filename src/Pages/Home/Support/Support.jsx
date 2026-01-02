import React from 'react';
import supportBannerImg from '../../../assets/support.png'
import redriconImg from '../../../assets/redericon.png'
import suppotationImg from '../../../assets/suppoticon.png'
import paymentImg from '../../../assets/payment.png'
import paionImg from '../../../assets/payicon.png'


const Support = () => {
    return (
        <div className='my-8 py-8'>
            <div className='flex items-center justify-between gap-5 flex-col lg:flex-row'>
                <div className='flex-1'>
                    <img src={supportBannerImg} alt="" />
                </div>
                <div className='flex flex-col flex-1'>
                    <div>
                        <h1 className='font-bold text-2xl md:text-5xl mb-3'>Enjoy our Speacial <span className='inline md:block'>supports</span></h1>
                        <p className='text-[18px] leading-8'>There are many variations of passages of Lorem Ipsum available, but the have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-3 gap-5 md:gap-10'>
                        <div className=' text-primary hover:text-[#2841C5] hover:shadow-sm border border-gray-200 rounded-xl transition hover:-translate-y-2 duration-500 h-[200px] flex items-center justify-center flex-col gap-4 bg-white'>
                            <img src={redriconImg} alt="" />
                            <p className='font-semibold text-2xl'>Secure Payment</p>
                        </div>
                        <div className=' text-primary hover:text-[#2841C5] hover:shadow-sm border border-gray-200 rounded-xl transition hover:-translate-y-2 duration-500 h-[200px] flex items-center justify-center flex-col gap-4 bg-white'>
                            <img src={suppotationImg} alt="" />
                            <p className='font-semibold text-2xl'>Refer & Earn</p>
                        </div>
                        <div className=' text-primary hover:text-[#2841C5] hover:shadow-sm border border-gray-200 rounded-xl transition hover:-translate-y-2 duration-500 h-[200px] flex items-center justify-center flex-col gap-4 bg-white'>
                            <img src={paymentImg} alt="" />
                            <p className='font-semibold text-2xl'>Trust pay</p>
                        </div>
                        <div className=' text-primary hover:text-[#2841C5] hover:shadow-sm border border-gray-200 rounded-xl transition hover:-translate-y-2 duration-500 h-[200px] flex items-center justify-center flex-col gap-4 bg-white'>
                            <img src={paionImg} alt="" />
                            <p className='font-semibold text-2xl'>24X7 Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;