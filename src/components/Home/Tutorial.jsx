import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const Tutorial = () => {
	return (
		<div className='py-16'>
			{/* section title */}
			<div className='text-center mb-16 px-5 max-w-3xl mx-auto'>
				<h3 className='flex items-center justify-center mb-4 text-2xl md:text-3xl font-semibold uppercase'>
					<span>Watch our tutorials on youtube</span> <FaYoutube className='ml-3 text-red-500' />
				</h3>
				<p>
					Looking to learn how to cook authentic Thai cuisine? Check out our YouTube tutorials, featuring step-by-step
					instructions and tips from expert Thai chefs. Start cooking like a pro today!
				</p>
			</div>
			{/* youtube iframe */}
			<div className='flex justify-center max-w-2xl mx-auto bg-slate-400'>
				<iframe
					className='w-full h-48 sm:h-64 md:h-72'
					src='https://www.youtube.com/embed/F86GfZIph8o'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div>
		</div>
	);
};

export default Tutorial;
