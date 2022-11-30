import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const SingleCategoryCollection = () => {
    
    //loading all products data
    const products = useLoaderData();

    return (
        <div className='md:w-9/12 lg:max-w-5xl mx-auto mt-6'>
            {/* getting a single product */}
            {
                products.map(product => <SingleCategory key={product._id} product={product}></SingleCategory>)
            }
        </div>
    );
};

export default SingleCategoryCollection;