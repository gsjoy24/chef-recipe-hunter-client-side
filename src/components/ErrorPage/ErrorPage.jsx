import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import errImg from '../../assets/error.svg';

const ErrorPage = () => {
	return (
		<>
			<Navigation />
			<div className='min-h-[85vh] flex justify-center items-center'>
				<div>
               <img className='w-full max-w-lg block' src={errImg} alt='' />
               <h3 className='text-2xl font-bold text-center my-4'>Uffs! Page not found</h3>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ErrorPage;
