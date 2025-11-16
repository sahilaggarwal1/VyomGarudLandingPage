import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border'>
            {/* Hero Left Side */}
            <div className='w-full sm:w-full flex items-center justify-center p-10  sm:py-0 bg-gray-800 text-white'>
                <div>
                    <div className='flex gap-2'>

                        <p className='font-medium text-2xl md:text-md  sm:text-sm'>Sky Superiority, Mission Certainty</p>
                    </div>
                    <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leadning-relaxed'>DEPLOY NOW</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-2xl md:text-md  sm:text-sm '>Unmanned. Unseen. Unstoppable.</p>
                        <p className='w-8 md:w-11  '></p>
                    </div>
                </div>
            </div>
            {/* Hero Right Side */}
            <img className="w-full sm:w-1/2" src='./dron.jpeg' alt="Hero Image" />

        </div>
    )
}

export default Hero;