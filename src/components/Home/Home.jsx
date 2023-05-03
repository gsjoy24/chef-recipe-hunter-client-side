import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from './Hero';
import { useLoaderData } from 'react-router-dom';
import CardContainer from './CardContainer';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {
	const { chefs } = useContext(AuthContext);
	return (
		<div>
			<Hero />
			<CardContainer chefs={chefs} />
		</div>
	);
};

export default Home;
