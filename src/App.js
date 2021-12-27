import React from 'react';

//import from component
import Navbar from './components/Navbar/Navbar';
import CTA from './components/CTA/CTA';
import Brand from './components/Brand/Brand';



//import from containers
import Blog from './containers/Blog/Blog';
import Header from './containers/Header/Header';
import WhatGPT3 from './containers/WhatGPT3/WhatGPT3';
import Possibilities from './containers/Possibilities/Possibilities';
import Footer from './containers/Footer/Footer';
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