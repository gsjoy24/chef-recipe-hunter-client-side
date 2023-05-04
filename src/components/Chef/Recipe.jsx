import React from 'react';
import { FaAngleDown, FaAngleRight, FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Recipe = ({ recipe }) => {
	const { name, ingredients, method, rating } = recipe;

	const addToFavorite = (event) => {
		toast.success('added to favorite', {
			position: 'top-center',
			autoClose: 1500,
			hideProgressBar: true,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'light'
		});
		event.currentTarget.disabled = true;
	};
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
				{/* add to favorite button */}
				<button onClick={addToFavorite} className='btn btn-primary '>
					<FaHeart className='text-2xl' />
				</button>
			</div>
			<ToastContainer
				position='top-center'
				autoClose={1500}
				hideProgressBar
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme='light'
			/>
			<hr className='bg-slate-300 h-px my-4' />
			<h3 className='text-lg font-medium '>ingredients</h3>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient} className='flex items-end gap-2'>
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
