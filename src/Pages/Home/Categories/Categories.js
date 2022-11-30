import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    //react query to load all category data
    const{data:categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
        .then(res => res.json())

    })

    return (
        <div className='w-9/12 lg:w-full md:max-w-4xl lg:max-w-5xl  mx-auto mt-20'>
            <h1 className='text-2xl text-center font-semibold'>Choose By Category</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12'>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
        </div>
    );
};

export default Categories;