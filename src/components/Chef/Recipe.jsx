import React from 'react';
import { FaAngleDown, FaAngleRight, FaBookmark } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Recipe = ({ recipe }) => {
	const { name, ingredients, method, rating } = recipe;
	return (
		<div className='max-w-2xl md:mx-auto bg-slate-100 p-8 md:p-14 rounded-md mb-7 mx-2'>
			{/* header */}
			<div className='flex justify-between mb-4'>
				<div>
					<h1 className='font-semibold text-xl'>{name}</h1>
					<div className='flex gap-3 mt-2'>
						<Rating style={{ maxWidth: 100 }} value={rating} readOnly /> <span>{rating}</span>
					</div>
				</div>
				<button>
					<FaBookmark />
				</button>
			</div>
			<hr className='bg-slate-300 h-px my-4' />

			<h3 className='text-lg font-medium '>ingredients</h3>
			<ul>
				{ingredients.map((ingredient) => (
					<li className='flex items-end gap-2'>
						<FaAngleRight />
						{ingredient}
					</li>
				))}
			</ul>

			<h3 className='text-lg font-medium mt-7'>
				Next Process <FaAngleDown />
			</h3>
			<p>{method}</p>
		</div>
	);
};

export default Recipe;
