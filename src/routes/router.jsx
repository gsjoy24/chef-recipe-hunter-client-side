import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import App from '../App';
import SignIn from '../components/Authentication/SignIn';
import Register from '../components/Authentication/Register';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Chef from '../components/Chef/ChefContainer';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
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
			},
			{
				path: 'chef/:id',
				element: <Chef />,
				loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-side-alpha.vercel.app/chef/${params.id}`)
			}
		]
	}
]);
export default router;
