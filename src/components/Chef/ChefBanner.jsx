import React from 'react';
import { FaCalendarCheck, FaWpforms, FaUserAlt, FaThumbsUp } from 'react-icons/fa';
const ChefBanner = ({ chef }) => {
	const { picture, name, years_of_experience, number_of_recipes, number_of_likes, bio } = chef;
	return (
		<div className='flex flex-col md:flex-row justify-around items-center py-12 px-2 md:px-20 bg-slate-100'>
			<div className='hero-img'>
				<img src={picture} className='w-full h-[350px] max-h- block rounded-lg' alt='heroImg' />
			</div>
			<div className='hero-text max-w-lg p-8'>
				<h1 className='font-bold text-2xl mb-3'>Chef. {name} </h1>
				<p className='flex mb-2'>
					<FaUserAlt className='mr-2 w-40 mt-2' />
					<span>{bio}</span>
				</p>
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
			</div>
		</div>
	);
};

export default ChefBanner;
