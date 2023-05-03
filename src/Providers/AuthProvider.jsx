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

	// for sign up
	const emailPasswordSignUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// for sign in
	const emailPasswordSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	// for sign in
	const signOutMethod = () => {
		return signOut(auth);
	};

	const googleSignUp = () => {
		return signInWithPopup(auth, googleProvider);
	};
	const githubSignUp = () => {
		return signInWithPopup(auth, githubProvider);
	};
	const setNameAndPhoto = (name, photoURL) => {
		return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
	};

	// observing the user state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			setUser(loggedInUser);
			// setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	// fetching chefs information
	useEffect(() => {
		fetch('https://chef-recipe-hunter-server-side-alpha.vercel.app/chefs')
			.then((data) => data.json())
			.then((chefs) => setChefs(chefs))
			.catch((error) => {
				console.log(error.message);
			});
	}, []);
	
	const authInfo = {
		user,
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
