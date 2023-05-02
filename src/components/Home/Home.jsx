import React from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from './Hero';
import { useLoaderData } from 'react-router-dom';
import CardContainer from './CardContainer';

const Home = () => {
	const chefs = useLoaderData();
	return (
		<div>
			<Hero />
			<CardContainer chefs={chefs} />
		</div>
	);
};

export default Home;
