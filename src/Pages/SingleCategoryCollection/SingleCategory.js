import React from 'react';

const SingleCategory = ({product}) => {
    const {categoryName,img,location,usedTime,buyingPrice,sellingPrice,description,sellerName,postTime} =product;
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-8 w-9/12">
            <figure className='ml-6'><img src={img} alt="Sofa" className='w-96 h-80 ' /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p>Location: {location} </p>
                <p>Buying Price: {buyingPrice}</p>
                <p>Selling Price: {sellingPrice}</p>
                <p>Years Used: {usedTime}</p>
                <p>Posted at {postTime}</p>
                <p>Posted by {sellerName}</p>
                <p>"{description}"</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;