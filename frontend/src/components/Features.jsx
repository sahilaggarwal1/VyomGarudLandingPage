import React from 'react';

const Features = () => {
    return (
        <div className="mt-10">
            <div className="flex flex-col md:flex-row text-sm mb-20 text-center">

                <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center gap-5">
                    <img className="w-12 mx-auto" src='eye-solid-full.svg' />
                    <b className="text-center">Advanced ISR Capabilities</b>
                    <p className="text-gray-600 text-center">
                        VyomGarud drones are equipped with high-precision EO/IR sensors,
                        real-time tracking, and long-range zoom modules that deliver mission-critical intelligence.
                    </p>
                </div>

                <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center gap-5">
                    <img className="w-12 mx-auto" src='eye-solid-full.svg' />
                    <b className="text-center">Stealth & Mission-Endurance Engineering</b>
                    <p className="text-gray-600 text-center">
                        Built with low-noise rotors, RF-shielded electronics, and a stealth-optimized frame,
                        VyomGarud achieves minimal detectability during high-risk operations.
                    </p>
                </div>

                <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col items-center gap-5">
                    <img className="w-12 mx-auto" src='eye-solid-full.svg' />
                    <b className="text-center">Secure Military-Grade Communication Link</b>
                    <p className="text-gray-600 text-center">
                        VyomGarud uses encrypted long-range communication channels for interference-free command and control,
                        even in GPS-denied or jamming-heavy environments.
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            </div>
        </div>
    );
}

export default Features;
