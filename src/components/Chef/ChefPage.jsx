import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import ChefBanner from './ChefBanner';
import RecipeContainer from './RecipeContainer';

const ChefPage = () => {
	const recipes = useLoaderData();
	const { chefs } = useContext(AuthContext);
	const { id } = useParams();
	const chef = chefs.find((chf) => chf.id === id);

	if (!chef) {
		return (
			<div className='w-full min-h-[80vh] flex items-center justify-center'>
				<button className='btn btn-primary loading'>loading</button>
			</div>
		);
	}

	return (
		<div>
			<ChefBanner chef={chef} />
			<RecipeContainer recipes={recipes} />
		</div>
	);
};

export default ChefPage;
