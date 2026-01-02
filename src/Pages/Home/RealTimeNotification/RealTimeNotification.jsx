
import notificationBanner from '../../../assets/real-time-notification-banner.png'
import { IoNotifications } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';

const RealTimeNotification = () => {
    return (
        <div className='my-8 py-8'>
            <div className='flex lg:flex-row flex-col-reverse items-center justify-around gap-10'>
                <div className='space-y-4 text-[18px]'>
                    <p className=' text-2xl bg-[#2840BF] rounded-full w-10 h-10 text-white flex items-center justify-center'> <IoNotifications /> </p>
                    <p className='text-secondary text-xl md:text-2xl font-bold' >Smart Banking</p>
                    <h1 className='font-bold text-2xl md:text-5xl'>Real time Notifications</h1>
                    <p className=' leading-7 md:leading-loose '>Your customer stay informed in real time with everything that's  happening on his account: payments, transfer, advice. Get visibility on your customers' flows to anticipate their needs.</p>
                    <div className='font-medium space-y-3 mt-4'>
                        <p className='flex items-center gap-3'><span className='text-secondary md:w-6 md:h-6 p-1 border flex items-center justify-center rounded-full'><FaCheck /></span> Cards that work all across the world.</p>
                        <p className='flex items-center gap-3'><span className='text-secondary md:w-6 md:h-6 p-1 border flex items-center justify-center rounded-full'><FaCheck /></span> No ATM fees. No minimum balance. No overdrafts.</p>
                    </div>
                </div>

                <div>
                    <img src={notificationBanner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RealTimeNotification;