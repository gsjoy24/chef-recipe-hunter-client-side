import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaWpforms, FaUserAlt, FaThumbsUp } from 'react-icons/fa';

const Card = ({ chef }) => {
	const { id, picture, name, years_of_experience, number_of_recipes, number_of_likes, bio } = chef;
	return (
		<div className='card min-w-[320px] max-w-[400px] bg-base-100 shadow-xl mx-auto'>
			<figure>
				<img className='h-52 w-full object-cover object-top' src={picture} alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title font-bold'> {name}</h2>
				<p className='flex items-center'>
					<FaCalendarCheck className='mr-2' />
					<span>{years_of_experience} years of experience.</span>
				</p>
				<p className='flex items-center'>
					<FaWpforms className='mr-2' />
					<span>{number_of_recipes} recipes</span>
				</p>
				<p className='flex items-center'>
					<FaThumbsUp className='mr-2' />
					<span>{number_of_likes} people</span>
				</p>
				<div className='card-actions justify-end'>
					<Link to={`/chef/${id}`} className='btn btn-primary btn-sm'>
						View Recipes
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
