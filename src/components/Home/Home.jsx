import React, { useContext } from 'react';
import Hero from './Hero';
import { useLoaderData } from 'react-router-dom';
import CardContainer from './CardContainer';
import { AuthContext } from '../../Providers/AuthProvider';
import CategoryContainer from './Category/CategoryContainer';
import Tutorial from './Tutorial';

const Home = () => {
	const { chefs } = useContext(AuthContext);
	const categories = useLoaderData();
	return (
		<div>
			<Hero />
			<CardContainer chefs={chefs} />
			<CategoryContainer categories={categories} />
			<Tutorial />
		</div>
	);
};

export default Home;
