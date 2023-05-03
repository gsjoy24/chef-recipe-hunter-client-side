import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import App from '../App';
import SignIn from '../components/Authentication/SignIn';
import Register from '../components/Authentication/Register';

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
				path: 'register',
				element: <Register />
			},
			{
				path: 'sign_in',
				element: <SignIn />
			}
		]
	}
]);
export default router;
