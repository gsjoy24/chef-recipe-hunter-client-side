import React from 'react';
import Recipe from './Recipe';

const RecipeContainer = ({ recipes }) => {
	return (
		<div className='py-12'>
			{/* section title */}
			<div className='text-center mb-16 px-5 max-w-3xl mx-auto'>
				<h3 className='mb-4 text-2xl md:text-3xl font-semibold uppercase'>best recipes of this legend</h3>
				<p>
					Looking to learn how to cook authentic Thai cuisine? Check out our YouTube tutorials, featuring step-by-step
					instructions and tips from expert Thai chefs. Start cooking like a pro today!
				</p>
			</div>

			<div>
				{recipes.map((recipe) => (
					<Recipe key={recipe.recipe_id} recipe={recipe} />
				))}
			</div>
		</div>
	);
};

export default RecipeContainer;
