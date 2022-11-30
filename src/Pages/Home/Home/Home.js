import React from 'react';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';

const Home = () => {
    //loading all home components
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
        </div>
    );
};

export default Home;