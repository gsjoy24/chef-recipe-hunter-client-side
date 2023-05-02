import React from 'react';

const Card = ({ chef }) => {
	const { picture, name, years_of_experience, number_of_recipes, number_of_likes, bio } = chef;
	return (
		<div className='card min-w-[320px] max-w-[400px] bg-base-100 shadow-xl mx-auto'>
			<figure>
				<img className='h-52 w-full object-cover object-top' src={picture} alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Chef: {name}</h2>
				<p>Years of experience: {years_of_experience}</p>
				<p>Number Of Recipes: {number_of_recipes}</p>

				<p>Likes:{number_of_likes}</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary btn-sm'>View Recipes</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
