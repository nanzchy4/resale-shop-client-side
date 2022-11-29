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
        <div className='max-w-5xl mx-auto grid grid-cols-3 gap-2 mt-20'>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;