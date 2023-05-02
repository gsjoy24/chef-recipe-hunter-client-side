import React from 'react';
import Card from './Card';

const CardContainer = ({ chefs }) => {
	return (
		<div>
			<div className='text-center pt-14 px-5'>
				<h3 className='mb-4 text-2xl md:text-3xl font-semibold uppercase'> These are the best in town</h3>
				<p>Thai chefs are highly skilled in the art of balancing flavors, textures, and aromas in their dishes.</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-16 px-4 md:px-14'>
				{chefs.map((chef) => (
					<Card key={chef.id} chef={chef} />
				))}
			</div>
		</div>
	);
};

export default CardContainer;
