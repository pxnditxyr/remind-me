import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { RemindMeRoutes } from '../remind-me/routes/RemindMeRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth/*" element={ <AuthRoutes /> } />
                <Route path="/*" element={ <RemindMeRoutes /> } />
            </Routes>
        </BrowserRouter>
    );
};
