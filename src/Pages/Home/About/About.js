import React from 'react';
import img from '../../../Images/about.jpg'

const About = () => {
    return (
        <div className="hero  bg-base-200 md:w-9/12 lg:max-w-5xl mx-auto mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt='deal' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">About</h1>
                    <p className="py-6"><span className="text-2xl">Recycled Finds</span> is a platform on which you can buy and sell almost everything! Use the location selector to find deals close to you or check out ads to have items delivered directly to you with 100% buyer protection.Please note that we carefully review every ad before it is published to ensure that the quality is up to our standards. </p>
                </div>
            </div>
        </div>
    );
};

export default About;