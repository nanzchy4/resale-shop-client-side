import React from 'react';
import './Category.css';

const Category = ({category}) => {
    const{img,about,categoryName} = category;
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src={img}  alt="Shoes" className='img-sizing w-full'/></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Category;