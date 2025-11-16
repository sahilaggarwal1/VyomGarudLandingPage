import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features'
import About from '../components/About';
import Products from '../components/Products';
import Join from '../components/Join';

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <About />
            <Products />
            <Join />
        </div>
    )
}

export default Home;