import React from 'react';

const SingleCategory = ({product}) => {
    const {categoryName,img,location,usedTime,buyingPrice,sellingPrice,description,sellerName,postTime} =product;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Sofa" className='w-64 h-64' /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;