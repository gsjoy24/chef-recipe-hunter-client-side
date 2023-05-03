import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navigation />
			<div className='min-h-[80vh]'>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;
