import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import App from '../App';
import Card from '../components/Home/Card';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Card />
	}
]);
export default router;
