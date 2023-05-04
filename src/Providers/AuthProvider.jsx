import React, { createContext, useEffect, useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	GithubAuthProvider,
	updateProfile,
	signInWithPopup,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	const [user, setUser] = useState(null);
	const [chefs, setChefs] = useState([]);
	const [loading, setLoading] = useState(true);

	// fetching chefs information
	useEffect(() => {
		fetch('https://chef-recipe-hunter-server-side-alpha.vercel.app/chefs')
			.then((data) => data.json())
			.then((chefs) => setChefs(chefs))
			.catch((error) => {
				console.log(error.message);
			});
	}, []);

	// for sign up
	const emailPasswordSignUp = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// for sign in
	const emailPasswordSignIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// for sign in
	const signOutMethod = () => {
		setLoading(true);
		return signOut(auth);
	};

	const googleSignUp = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const githubSignUp = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};
	const setNameAndPhoto = (name, photoURL) => {
		setLoading(true);
		return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
	};

	// observing the user state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			setUser(loggedInUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const authInfo = {
		user,
		loading,
		emailPasswordSignUp,
		signOutMethod,
		setNameAndPhoto,
		googleSignUp,
		githubSignUp,
		emailPasswordSignIn,
		chefs
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
