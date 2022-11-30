import React from 'react';

const SingleCategory = ({product,setSelectedItem}) => {
    //product property destructure
    const {categoryName,img,location,usedTime,buyingPrice,sellingPrice,description,sellerName,postTime} =product;
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-8 md:w-9/12">
            <figure className='ml-6'><img src={img} alt="Sofa" className='w-96 h-80 ' /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p><span className='text-xl font-semibold '>Location:</span> {location} </p>
                <p><span className='text-xl font-semibold '>Buying Price:</span> {buyingPrice}</p>
                <p><span className='text-xl font-semibold '>Selling Price:</span> {sellingPrice}</p>
                <p><span className='text-xl font-semibold '>Years Used:</span> {usedTime}</p>
                <p><span className='text-xl font-semibold '>Posted at:</span> {postTime}</p>
                <p><span className='text-xl font-semibold '>Posted by:</span> {sellerName}</p>
                <p>"{description}"</p>
                <div className="card-actions justify-end">
                    <label htmlFor="booking-modal"
                     className="btn btn-primary"
                     onClick={() => setSelectedItem(product) }
                     >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;