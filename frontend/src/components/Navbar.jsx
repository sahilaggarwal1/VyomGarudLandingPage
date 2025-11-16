import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            {/* Logo */}
            <Link to="/">
                <div className='w-24 font-extrabold text-2xl'>VyomGarud</div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex gap-5 text-sm">
                <NavLink to="/" className="flex flex-col items-center gap-1 p-4">
                    <p>HOME</p>
                </NavLink>
                <NavLink to="/" className="flex flex-col items-center gap-1 p-4">
                    <p>PRODUCTS</p>
                </NavLink>
                <NavLink to="/" className="flex flex-col items-center gap-1 p-4">
                    <p>ABOUT</p>
                </NavLink>
                <NavLink to="/" className="flex bg-orange-400 p-4 text-white flex-col items-center gap-1 border rounded-full">
                    <p>CONTACT</p>
                </NavLink>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
                {open ? "✖" : "☰"}
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-5 gap-4 sm:hidden text-sm z-50">

                    <NavLink to="/" onClick={() => setOpen(false)}>
                        HOME
                    </NavLink>

                    <NavLink to="/" onClick={() => setOpen(false)}>
                        PRODUCTS
                    </NavLink>

                    <NavLink to="/" onClick={() => setOpen(false)}>
                        ABOUT
                    </NavLink>

                    <NavLink to="/" onClick={() => setOpen(false)} className="bg-orange-400 px-6 py-2 text-white rounded-full">
                        CONTACT
                    </NavLink>

                </ul>
            )}

        </div>
    );
};

export default Navbar;
