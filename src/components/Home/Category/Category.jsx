import React from 'react';

const Category = ({ category }) => {
	const { category_image, category_name } = category;
	return (
		<div className='text-center'>
			<img className='w-40 h-40 rounded-full border-4 border-violet-200 block m-auto hover:rotate-3 hover:scale-105 duration-200 ' src={category_image} alt={category_name} />
			<p className='font-semibold mt-3'>{category_name}</p>
		</div>
	);
};

export default Category;
