import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import SingleCategory from './SingleCategory';

const SingleCategoryCollection = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    //loading all products data
    const products = useLoaderData();

    return (
        <div>
            <div className='md:w-9/12 lg:max-w-5xl mx-auto mt-6'>
                {/* getting a single product */}
                {
                    products.map(product => <SingleCategory key={product._id} product={product} setSelectedItem={setSelectedItem}></SingleCategory>)
                }
            </div>
            {   selectedItem && 
                <BookingModal key={selectedItem._id} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></BookingModal>

            }
        </div>
    );
};

export default SingleCategoryCollection;