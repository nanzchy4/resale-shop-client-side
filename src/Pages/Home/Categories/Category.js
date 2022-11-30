import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({category}) => {
    const{img,about,categoryName,_id} = category;
    //category card
    return (
        <div className="card w-72 bg-base-100 shadow-xl ">
            <figure><img src={img}  alt="furniture" className='img-sizing w-full'/></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${_id}`}><button className="btn btn-primary">See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;