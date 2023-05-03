import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import App from '../App';
import Card from '../components/Home/Card';
import Login from '../components/Authentication/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('https://chef-recipe-hunter-server-side-alpha.vercel.app/chefs')
			},
			{
				path: 'login',
				element: <Login />
			}
		]
	}
]);
export default router;
