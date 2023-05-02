import React from 'react';
import heroImg from '../../assets/hero-img.png';

const Hero = () => {
	return (
		<div className='flex flex-col-reverse md:flex-row justify-between items-center py-12 px-2 md:px-20 bg-slate-100'>
			<div className='hero-text max-w-md p-8'>
				<h1 className='text-2xl lg:text-4xl font-bold mb-4'>
					Experience the Flavors of Thailand: Authentic Thai Recipes for Every Palate
				</h1>
				<p>
					From mouth-watering curries to zesty salads, our Thai recipe website offers a wide range of dishes to satisfy
					your cravings. Experience the rich flavors of Thailand with our simple, yet authentic recipes
				</p>
			</div>
			<div className='hero-img'>
				<img src={heroImg} className='w-full min-w-[250px] max-w-md block ml-3' alt='heroImg' />
			</div>
		</div>
	);
};

export default Hero;
