import { Routes, Route, Navigate } from 'react-router-dom';
import { SignInPage, SignUpPage } from '../pages';

export const AuthRoutes = () => {
    return (
        <div className="h-screen bg-emerald-700 flex items-start justify-center py-8 px-5 overflow-scroll md:py-0 md:items-center">
            <Routes>
                <Route path="signin" element={ <SignInPage /> } />
                <Route path="signup" element={ <SignUpPage /> } />

                <Route path="/*" element={ <Navigate to="signin" /> } />
            </Routes>
        </div>
    );
};
