import React from "react";


const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
                <div>
                    <div className="w-24 font-extrabold text-2xl mb-2">VyomGarud</div>
                    <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quaerat ullam totam sint necessitatibus consequuntur aliquid ut, tenetur quae nesciunt molestias deserunt quis ab?</p>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+91-1234567890</li>
                        <li>contact@testEcommerce.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 tet-sm text-center"> Copyright 2025@Ecommerc.com - All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;