import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const SingleCategoryCollection = () => {
    
    const products = useLoaderData();

    return (
        <div className='max-w-5xl mx-auto mt-6'>
            
            {
                products.map(product => <SingleCategory key={product._id} product={product}></SingleCategory>)
            }
        </div>
    );
};

export default SingleCategoryCollection;