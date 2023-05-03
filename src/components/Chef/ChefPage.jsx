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

	return (
		<div>
			<ChefBanner chef={chef} />
			<RecipeContainer recipes={recipes} />
		</div>
	);
};

export default ChefPage;
