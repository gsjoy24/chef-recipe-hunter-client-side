import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const emailPasswordSignUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
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

	const authInfo = { emailPasswordSignUp,setNameAndPhoto, googleSignUp, githubSignUp };
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
