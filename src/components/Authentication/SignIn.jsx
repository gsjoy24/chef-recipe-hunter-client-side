import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/google.png';
import githubLogo from '../../assets/github.png';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
	const { googleSignUp, githubSignUp } = useContext(AuthContext);

	// sign in with google
	const handleGoogleSignup = () => {
		googleSignUp()
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	// sign in with github
	const handleGithubSignup = () => {
		githubSignUp()
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const handleSignIn = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		console.log(email, password);
	};
	return (
		<div className='flex justify-center items-center min-h-[90vh]'>
			<div>
				<form
					onSubmit={handleSignIn}
					className='p-7 bg-slate-50 min-w-[300px] sm:min-w-[500px] max-w-lg rounded-md border border-1 border-stone-200'>
					<h2 className='text-2xl font-bold mb-3'>Login Here</h2>
					<hr />
					{/* email field */}
					<div className='form-control w-full mt-5'>
						<label className='label'>
							<span className='label-text'>Email Address</span>
						</label>
						<input
							type='text'
							placeholder='Email'
							name='email'
							className='p-3 rounded-md text-sm bg-slate-100 focus:outline-none focus:bg-violet-100 w-full '
						/>
					</div>
					{/* password field */}
					<div className='form-control w-full '>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Password'
							name='password'
							className='p-3 rounded-md text-sm bg-slate-100 focus:outline-none focus:bg-violet-100 w-full '
						/>
					</div>
					<input type='submit' value='Login' className='btn btn-primary w-full btn-sm mt-4' />
					<p className='text-xs mt-3'>
						<Link to='/register' className='text-violet-600'>
							Forgot password?
						</Link>{' '}
						or New here?
						<Link to='/register' className='text-violet-600 ml-2'>
							Register
						</Link>
					</p>
				</form>
				<div className='flex items-center justify-center my-4 text-slate-400'>
					<div className='w-1/4 h-px bg-slate-400 mr-3'></div>or<div className='w-1/4 h-px bg-slate-400 ml-3'></div>
				</div>
				{/* register with google and github */}
				<div className='flex flex-col md:flex-row justify-between mt-7 '>
					{/* google authentication */}
					<div
						onClick={handleGoogleSignup}
						className='flex items-center bg-slate-100 justify-between px-5 py-1 rounded-full w-60 cursor-pointer font-semibold mx-auto mb-5 md:mb-0'>
						<img src={googleLogo} className='w-10' /> <p>Continue with Google</p>
					</div>
					{/* github authentication */}
					<div
						onClick={handleGithubSignup}
						className='flex items-center bg-slate-100 justify-between px-5 py-1 rounded-full w-60 cursor-pointer font-semibold mx-auto'>
						<img src={githubLogo} className='w-10' /> <p>Continue with Github</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
