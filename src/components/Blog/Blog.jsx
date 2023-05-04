import React, { useRef } from 'react';
import propTypeImg from '../../assets/propType.png';
import Pdf from 'react-to-pdf';
import { FaDownload } from 'react-icons/fa';

const Blog = () => {
	const ref = useRef(null);
	return (
		<div className='max-w-3xl mx-auto p-5'>
			{/* pdf download button */}
			<div className='fixed top-20 right-5 z-10'>
				<Pdf targetRef={ref} filename='code-example.pdf'>
					{({ toPdf }) => (
						<button onClick={toPdf} className='btn btn-primary'>
							{' '}
							<FaDownload className='mr-2' /> Pdf
						</button>
					)}
				</Pdf>
			</div>

			<div ref={ref} className='p-5'>
				<h1 className='text-3xl font-bold my-9 text-center'>Questions and answers</h1>

				{/* first question */}
				<div className='bg-slate-100 p-6 rounded-lg mb-6'>
					<h2 className='text-2xl font-semibold mb-5'>
						What is the differences between uncontrolled and controlled components?
					</h2>
					<p>
						A controlled component is a component that is controlled by React state. It receives its current value from
						a state and also updates it via a callback. <br />
						On the other hand, uncontrolled component is a component that maintains its own internal state. when a user
						interacts with the component, it updates its own state, which in turn updates the component's value.
					</p>
				</div>

				{/* second question */}
				<div className='bg-slate-100 p-6 rounded-lg mb-6'>
					<h2 className='text-2xl font-semibold mb-5'>How to validate React props using PropTypes?</h2>
					<p>First, we have to install PropsTypes using</p>
					<div className='mockup-code max-w-[300px] sm:max-w-sm my-4'>
						<pre data-prefix='$'>
							<code>npm install prop-types --save</code>
						</pre>
					</div>
					<p>After that we have to import it into our project</p>
					<div className='mockup-code max-w-sm my-4'>
						<pre data-prefix='$'>
							<code>import PropTypes from 'prop-types';</code>
						</pre>
					</div>
					<p className='mb-3 font-medium text-xl'>The validators for the basic data types:</p>
					<ul className='list-disc list-inside'>
						<li>PropTypes.any: The prop can be of any data type</li>
						<li>PropTypes.bool: The prop should be a Boolean</li>
						<li>PropTypes.number: The prop should be a number</li>
						<li>PropTypes.string: The prop should be a string</li>
						<li>PropTypes.func: The prop should be a function</li>
						<li>PropTypes.array: The prop should be an array</li>
						<li>PropTypes.object: The prop should be an object</li>
						<li>PropTypes.symbol: The prop should be a symbol</li>
					</ul>
					<p>
						Then we can use PropTypes. <br /> For Example:
					</p>
					<div className='mockup-code max-w-sm my-4 bg-[#282C34]'>
						<pre data-prefix='$'>
							<img className='ml-5' src={propTypeImg} alt='' />
						</pre>
					</div>
				</div>

				{/* third question */}
				<div className='bg-slate-100 p-6 rounded-lg mb-6'>
					<h2 className='text-2xl font-semibold mb-5'>What is the difference between nodejs and express js?</h2>
					<p>
						Node.js is a platform for building the i/o applications which are server-side event-driven and made using
						JavaScript. It is built on Google’s V8 engine.
						<br />
						<br />
						On the other hand, Express.js is a framework based on Node.js which is used for building web-application
						using approaches and principles of Node.js event-driven architecture. It has more features than Node.js. It
						also requires less coding time then Node.js.
					</p>
				</div>

				{/* fourth question */}
				<div className='bg-slate-100 p-6 rounded-lg mb-6'>
					<h2 className='text-2xl font-semibold mb-5'>What is a custom hook, and why will you create a custom hook?</h2>
					<p>
						A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other
						hooks.
						<br />
						<br />
						It has many advantages, such as reusability, readability, testability and more. It reduce the coding time
						and boosts the performance also.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
