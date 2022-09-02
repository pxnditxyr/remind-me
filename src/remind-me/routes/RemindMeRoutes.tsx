import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../pages';

export const RemindMeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="auth/*" element={ <Navigate to="/" /> } />
            <Route path="/*" element={ <NotFoundPage /> } />
        </Routes>
    );
};
