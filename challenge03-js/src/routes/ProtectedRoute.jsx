import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';

const ProtectedRoute = ({ children }) => {
    // const [ user ] = useAuthState(auth)
    const user = true

    return user ? children : <Navigate to='/'/>
};

export default ProtectedRoute