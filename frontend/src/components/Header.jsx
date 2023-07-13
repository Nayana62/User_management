import React from 'react'

const Header = () => {
  return (
    <div className='h-[100px] w-full flex items-center justify-between px-20'>
        <img className='w-[200px] h-[100px]' src="https://shunyeka.com/img/icons/logo.svg" alt="logo" />
        
        <div className='flex font-semibold gap-20 text-[#435962] text-[18px] mt-5'>
            <div className='flex flex-col justify-center items-center'>
                <p className=' cursor-pointer'>Dashboard</p>
                <p className=' w-3 h-3 rounded-full bg-[#4fd8af] m-1'></p>
            </div>
            <div>
                <p className='cursor-pointer'>Services</p>
            </div>
        </div>
    </div>
  )
}

export default Header