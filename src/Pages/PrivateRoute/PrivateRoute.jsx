import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children

    }
    // <Navigate to={'/login'} replace></Navigate>;
    return (
        <div></div>
    )

};

export default PrivateRoute;