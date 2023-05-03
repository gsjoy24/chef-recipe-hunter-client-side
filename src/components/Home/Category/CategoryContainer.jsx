import React from 'react';
import Category from './Category';

const CategoryContainer = ({ categories }) => {
	return (
		<div className='bg-slate-100 py-16 md:px-24'>
			<div className='text-center mb-16 px-5 max-w-3xl mx-auto'>
				<h3 className='mb-4 text-2xl md:text-3xl font-semibold uppercase'>
					Discover Our Delicious Thai Recipes by Category
				</h3>
				<p>
					Explore our extensive collection of mouth-watering Thai recipes, sorted by categories such as curry dishes,
					noodle dishes, soups, and more. Find your next favorite dish today!
				</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
				{categories.map((category) => (
					<Category key={category.id} category={category} />
				))}
			</div>
		</div>
	);
};

export default CategoryContainer;
