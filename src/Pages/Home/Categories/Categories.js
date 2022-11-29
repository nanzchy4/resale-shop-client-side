import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    const{data:categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
        .then(res => res.json())

    })

    return (
        <div className='max-w-5xl mx-auto mt-20'>
            <h1 className='text-2xl text-center font-semibold'>Choose By Category</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-12'>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
        </div>
    );
};

export default Categories;