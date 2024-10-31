import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithEmailAndPassword, 
    signInWithPopup } from "firebase/auth";
    
import { auth } from "./firebase";
// Function to create a user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential; // Return the user credential
    } catch (error) {
        console.error("Error Code:", error.code); // Log the error code
        throw new Error(getErrorMessage(error.code)); // Throw a custom error
    }
};

// Function to sign in with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential; // Return the user credential
    } catch (error) {
        console.error("Error Code:", error.code); // Log the error code
        throw new Error(getErrorMessage(error.code)); // Throw a custom error
    }
};
// Function to sign in with Google
export const doSignInWithGoogleAccount = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result; // Return the result
    } catch (error) {
        console.error("Error Code:", error.code); // Log the error code
        throw new Error(getErrorMessage(error.code)); // Throw a custom error
    }
};

// Function to sign out
export const doSignOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Error signing out:", error.message); // Log sign-out error
        throw new Error("Error signing out: " + error.message); // Handle sign-out error
    }
};

// Function to map Firebase error codes to custom messages
const getErrorMessage = (code) => {
    switch (code) {
        case 'auth/invalid-email':
            return 'The email address is not valid.';
        case 'auth/user-disabled':
            return 'This user has been disabled.';
        case 'auth/user-not-found':
            return 'No user found with this email.';
        case 'auth/wrong-password':
            return 'The password is incorrect.';
        case 'auth/operation-not-allowed':
            return 'This operation is not allowed.';
        case 'auth/too-many-requests':
            return 'Too many requests. Please try again later.';
        case 'auth/weak-password':
            return 'The password is too weak.';
        case 'auth/invalid-credential':
            return 'The provided credentials are invalid. Please check and try again.';
        default:
            return `An unexpected error occurred: ${code}. Please try again.`; // Include the error code
    }
};