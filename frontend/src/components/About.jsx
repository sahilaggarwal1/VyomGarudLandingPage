import React from 'react';

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t"></div>

            <div className="my-10 flex flex-col md:flex-row gap-16">

                {/* IMAGE */}
                <img
                    className="w-full md:w-1/6 mx-auto rounded-lg object-contain"
                    src="./Drone System.jpg"
                    alt="Drone System"
                />

                {/* TEXT SECTION */}
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <b className="text-gray-800 text-2xl">Our Vision</b>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae earum ab tempora sit nemo error vel.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolores officiis nobis, amet totam quae fugiat perspiciatis laudantium.
                    </p>

                    <b className="text-gray-800 text-2xl">Our Mission</b>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo quasi atque officiis minus perferendis.
                    </p>
                </div>

            </div>

            <div className="text-xl py-4"></div>
        </div>

    )
}
export default About;