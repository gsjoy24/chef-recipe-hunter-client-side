import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className='w-full min-h-[80vh] flex items-center justify-center'>
				<button className='btn btn-primary loading'>loading</button>
			</div>
		);
	}
	if (!user) {
		return <Navigate state={{ from: location }} to='/sign_in' replace />;
	}

	return <div>{children}</div>;
};

export default PrivateRoute;
