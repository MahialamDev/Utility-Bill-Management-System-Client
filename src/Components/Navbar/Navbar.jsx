import React from 'react';
import { Link, useNavigate } from 'react-router';
import MyLink from '../../Style/MyLink';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { CreditCard } from 'lucide-react';


const Navbar = () => {

  const { user, logOutUser, setLoading, loading } = useAuth();
  const navigate = useNavigate();


  // const location = useLocation();


  console.log('Your User', user)


  const links =
    <>
      <li>
        <MyLink to='/'>Home</MyLink>
      </li>
      <li>
        <MyLink to='/bills'>Bills</MyLink>
      </li>

      {user &&
        <>
          <li>
            <MyLink to='/contact'>Contact</MyLink>
          </li>
          <li>
            <MyLink to='/my-pay-bills'>My Pay Bills</MyLink>
          </li>
        </>
      }
        

    </>;
  
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast("Logout SUccessfull");
        navigate('/')
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  


    return (
        <div className="navbar bg-base-100 shadow-sm px-5 py-4 text-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
        
       
      </ul>
    </div>
    <a
  className="flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-[#2841C5] transition-colors"
>
  <CreditCard size={28} className="text-[#2841C5]" />
  Pay <span className="text-[#1d74ff]">Bills</span>
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
      
    </ul>
  </div>
  <div className="navbar-end">
          {loading? <ClipLoader color="#4052D6"size={20}/> : user?
            <div className='flex items-center gap-5'>
              <div className='w-10 h-10 rounded-full border-3 border-blue-200'>
                <img className='mx-auto rounded-full object-cover w-full h-full' src={user?.photoURL} referrerPolicy='no-referrer' alt="" />
              </div>
              <button onClick={handleLogOut} className='btn p-6 bg-[#2840BF] border hover:bg-transparent hover:text-[#2840BF] text-white shadow-xl'>Logout</button>
            </div> :
            <div className='flex items-center gap-4'>
              <Link to='/login'><button className='btn p-6 hover:text-white hover:bg-[#2840BF] border bg-transparent text-[#2840BF]'>LogIn</button></Link>
              <Link to='/registar'><button className='btn p-6 hidden md:flex text-white bg-[#2840BF] border hover:bg-transparent hover:text-[#2840BF]'>Registar</button></Link>
            </div>
    }
  </div>
</div>
    );
};

export default Navbar;