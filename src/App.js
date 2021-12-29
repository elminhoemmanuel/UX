import React from 'react';

//import from component
import Navbar from './components/navbar/Navbar';
import CTA from './components/cta/CTA';
import Brand from './components/brand/Brand';



//import from containers
import Blog from './containers/blog/Blog';
import Header from './containers/header/Header';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
import Possibilities from './containers/possibilities/Possibilities';
import Footer from './containers/footer/Footer';
import Feature from './containers/Feature/Feature';




import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
                <Brand />
                <WhatGPT3 />
                <Feature/>
                <Possibilities />
                <CTA />
                <Blog />               
                <Footer />
        </div>
    )
}

export default App
