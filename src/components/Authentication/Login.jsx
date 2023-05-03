import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const handleSignIn = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		console.log(email, password);
	};
	return (
		<div className='flex justify-center items-center min-h-[90vh]'>
			<form
				onSubmit={handleSignIn}
				className='p-7 bg-slate-50 min-w-[300px] max-w-lg rounded-md border border-1 border-stone-200'>
				<h2 className='text-2xl font-bold mb-3'>Login Here</h2>
				<hr />
				{/* email field */}
				<div className='form-control w-full max-w-xs'>
					<label className='label'>
						<span className='label-text'>Email Address</span>
					</label>
					<input
						type='text'
						placeholder='Email'
						name='email'
						className='p-3 rounded-md text-sm bg-slate-100 focus:outline-none focus:bg-violet-100 w-full max-w-xs'
					/>
				</div>
				{/* password field */}
				<div className='form-control w-full max-w-xs'>
					<label className='label'>
						<span className='label-text'>Password</span>
					</label>
					<input
						type='password'
						placeholder='Password'
						name='password'
						className='p-3 rounded-md text-sm bg-slate-100 focus:outline-none focus:bg-violet-100 w-full max-w-xs'
					/>
				</div>
				<input type='submit' value='Login' className='btn btn-primary w-full btn-sm mt-4' />
				<p className='text-xs mt-3'>
					<Link to='/register' className='text-violet-600'>
						forgot password?
					</Link> <br />
					New here?
					<Link to='/register' className='text-violet-600 ml-2'>
						Register here
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
