import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefContainer = () => {
	const recipes = useLoaderData();
	const id = useParams();

	console.log(id.id);
	return (
		<div>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, perspiciatis? Accusamus nesciunt placeat error
			voluptatum beatae vel odio. Expedita, eaque illo blanditiis tempora qui repellendus ratione at quas sapiente quam.
		</div>
	);
};

export default ChefContainer;
