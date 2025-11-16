import React from 'react';


const Products = () => {
    return (
        <div className='flex flex-col justify-around gap-12 sm:gap-2 text-start py-20  text-xs sm:text-sm md:text-base text-gray-700'>
            <div className="inline-flex gap-2 text-center text-4xl items-center mx-10 mb-3">
                <p className="text-gray-500">CHECK OUR <span className="text-gray-700 font-medium">PRODUCTS</span></p>
                <p className="w-8 sm:w-12 bg-gray-700"></p>
            </div>
            <div className='p-4'>
                <img src="./ISR.jpg" className='w-1/5 mb-5 float-start m-6' alt="" />
                <p className='font-semibold text-2xl m-6 '>Advanced ISR Capabilities</p>
                <p className='text-gray-400'>VyomGarud drones are equipped with high-precision EO/IR sensors, real-time tracking, and long-range zoom modules that deliver mission-critical intelligence. They operate effectively in low-light, fog, and extreme environments, ensuring ground forces always have accurate situational awareness.</p>
            </div>

            <div className='p-4'>
                <img src="./Enduracne.jpg" className='w-1/5 float-end m-6' alt="" />
                <p className='font-semibold text-2xl m-6'>Stealth & Mission-Endurance Engineering</p>
                <p className='text-gray-400'>Built with low-noise rotors, RF-shielded electronics, and a stealth-optimized frame, VyomGarud achieves minimal detectability during high-risk operations. Extended flight time and rugged battery systems allow uninterrupted missions across borders, conflict zones, and hostile terrains.</p>
            </div>

            <div className='p-4'>
                <img src="./Security.jpg" className='w-1/5 m-6 float-start ' alt="" />
                <p className='font-semibold text-2xl m-6'>Secure Military-Grade Communication Link</p>
                <p className='text-gray-400'>VyomGarud uses encrypted long-range communication channels for interference-free command and control, even in GPS-denied or jamming-heavy environments. Multi-band redundancy ensures continuous data flow, making it reliable for critical reconnaissance and defense missions.</p>
            </div>
        </div>
    )
}

export default Products;