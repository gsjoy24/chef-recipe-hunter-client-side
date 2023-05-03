import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/google.png';
import githubLogo from '../../assets/github.png';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [photoURL, setPhotoURL] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const { emailPasswordSignUp, setNameAndPhoto, googleSignUp, githubSignUp } = useContext(AuthContext);

	// sign up with email and password
	const handleEmailSignUp = (event) => {
		event.preventDefault();
		emailPasswordSignUp(email, password)
			.then(() => {
				setNameAndPhoto(name, photoURL)
					.then()
					.catch((error) => {
						setError(error.message);
					});
				event.target.reset();
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	// sign up with google
	const handleGoogleSignup = () => {
		googleSignUp()
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	// sign up with github
	const handleGithubSignup = () => {
		githubSignUp()
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className='flex justify-center items-center min-h-[90vh] py-12'>
			<div>
				<form
					onSubmit={handleEmailSignUp}
					className='p-7 bg-slate-50 min-w-[300px] sm:min-w-[500px] max-w-lg rounded-md border border-1 border-stone-200'>
					<h2 className='text-2xl font-bold mb-3'>Register Here</h2>
					<hr />
					{/* name field */}
					<div className='form-control w-full mt-5'>
						<label className='label'>
							<span className='label-text'>Your Name</span>
						</label>
						<input
							onChange={(event) => setName(event.target.value)}
							type='text'
							placeholder='Name'
							name='name'
							className='p-3 rounded-md text-sm bg-slate-100 focus:outline-none focus:bg-violet-100 w-full'
							required
						/>
					</div>
					{/* Photo url field */}
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Photo URL</span>
						</label>
						<input
							onChange={(event) => setPhotoURL(event.target.value)}
							type='link'
							placeholder='Photo URL'
							name='photo_url'
							className='p-3 rounded-md text-sm bg-slate-100 focus:outline-none focus:bg-violet-100 w-full'
							required
						/>
					</div>
					{/* email field */}
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Email Address</span>
						</label>
						<input
							onChange={(event) => setEmail(event.target.value)}
							type='text'
							placeholder='Email'
							name='email'
							className='p-3 rounded-md text-sm bg-slate-100 focus:outline-none focus:bg-violet-100 w-full'
							required
						/>
					</div>
					{/* password field */}
					<div className='form-control w-full  '>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<input
							onChange={(event) => setPassword(event.target.value)}
							type='password'
							placeholder='Password'
							name='password'
							className='p-3 rounded-md text-sm bg-slate-100 focus:outline-none focus:bg-violet-100 w-full'
							required
						/>
					</div>
					{/* error message */}
					<p className='text-red-600 text-xs mt-2'>{error}</p>

					<input type='submit' value='Register' className='btn btn-primary w-full btn-sm mt-4' />
					<p className='text-xs mt-3'>
						Already have an account?{' '}
						<Link to='/sign_in' className='text-violet-600 ml-2'>
							Login here
						</Link>
					</p>
				</form>
				<div className='flex items-center justify-center my-4 text-slate-400'>
					<div className='w-1/4 h-px bg-slate-400 mr-3'></div>or<div className='w-1/4 h-px bg-slate-400 ml-3'></div>
				</div>
				{/* register with google and github */}
				<div className='flex flex-col md:flex-row justify-between mt-7'>
					{/* google sign up */}
					<div
						onClick={handleGoogleSignup}
						className='flex items-center bg-slate-100 justify-between px-5 py-1 rounded-full w-60 cursor-pointer font-semibold mx-auto mb-5 md:mb-0'>
						<img src={googleLogo} className='w-10' /> <p>Continue with Google</p>
					</div>
					{/* github sign up */}
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

export default Register;
