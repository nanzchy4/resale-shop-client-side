import React from 'react';
import img1 from '../../../Images/img-1.jpg';
import img2 from '../../../Images/img-2.jpg';
import img15 from '../../../Images/img-15.jpg';
import img16 from '../../../Images/img-16.jpg';
import  './Slider.css';


const Slider = () => {
    return (
        <div className="carousel w-full max-w-5xl mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
               <img alt="" src={img1} className="w-full h-[450px] rounded-md"/>
                <div className="absolute left-5 top-[50px] ml-6">
                    <h1 className='text-5xl  text-lime-800 font-semibold'>
                        Want to furnish your house<span className='text-orange'>?</span>
                    </h1>
                </div>
                <div className="absolute  left-12 top-1/4 w-1/2">
                    <p className='text-2xl font-bold text-yellow-400'><i>
                        <b>Recycled Finds</b> help you find your desired set of furnitures at low cost without compromising on quality</i></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt="" src={img2} className="w-full h-[450px] rounded-md" />
                <div className="absolute left-5 top-[50px] ml-6">
                    <h1 className='text-5xl  text-lime-800 font-semibold'>
                        Want to furnish your house<span className='text-orange'>?</span>
                    </h1>
                </div>
                <div className="absolute  left-12 top-1/4 w-1/2">
                    <p className='text-2xl font-bold text-red-600'><i>
                        <b>Recycled Finds</b> help you find your desired set of furnitures at low cost without compromising on quality</i></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide3" className="carousel-item relative w-full">
                <img alt="" src={img15} className="w-full h-[450px] rounded-md slider-img" />
                <div className="absolute left-5 top-[50px] ml-6">
                    <h1 className='text-5xl  text-lime-800 font-semibold'>
                        Want to furnish your house<span className='text-orange'>?</span>
                    </h1>
                </div>
                <div className="absolute  left-12 top-1/4 w-1/2">
                    <p className='text-2xl font-bold text-red-600 '><i>
                        <b>Recycled Finds</b> help you find your desired set of furnitures at low cost without compromising on quality</i></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> */}
            <div id="slide4" className="carousel-item relative w-full">
                <img alt="" src={img16} className="w-full h-[450px] rounded-md" />
                <div className="absolute left-5 top-[50px] ml-6">
                    <h1 className='text-5xl  text-lime-800 font-semibold'>
                        Want to furnish your house<span className='text-orange'>?</span>
                    </h1>
                </div>
                <div className="absolute  left-12 top-1/4 w-1/2">
                    <p className='text-2xl font-bold text-yellow-400'><i>
                        <b>Recycled Finds</b> help you find your desired set of furnitures at low cost without compromising on quality</i></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;