import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className='navbar bg-base-100 px-3 md:px-14 shadow-lg sticky top-0 right-0 left-0 w-full z-50'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-x-2'>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/blog'>Blog</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li>
							<NavLink to='/register'>Register</NavLink>
						</li>
					</ul>
				</div>
				<Link to='/' className='btn btn-ghost normal-case text-xl'>
					ThaiZest
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 gap-x-3'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/blog'>Blog</NavLink>
					</li>
					<li>
						<NavLink to='/about'>About</NavLink>
					</li>
					<li>
						<NavLink to='/register'>Register</NavLink>
					</li>
				</ul>
			</div>
			<div className='navbar-end'>
				<img
					src='https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
					className='w-12 h-12  rounded-full mr-3'
				/>
				<Link to='/sign_in' className='btn btn-primary btn-sm sm:btn-md'>
					Sign in
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
