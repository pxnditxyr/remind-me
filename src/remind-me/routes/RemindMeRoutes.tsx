import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../pages';

export const RemindMeRoutes = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="auth/*" element={ <Navigate to="/" /> } />
                <Route path="/*" element={ <NotFoundPage /> } />
            </Routes>
        </div>
    );
};
