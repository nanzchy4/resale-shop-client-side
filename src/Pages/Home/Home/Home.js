import React from 'react';
import About from '../About/About';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';

const Home = () => {
    //loading all home components
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;