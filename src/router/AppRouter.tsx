import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks';
import { RemindMeRoutes } from '../remind-me/routes/RemindMeRoutes';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {

    const { status } = useCheckAuth();

    if ( status === 'checking' )
        return ( <CheckingAuth /> );


    return (
        <BrowserRouter>
            <Routes>
                { 
                    ( status === 'authenticated' )
                        ? <Route path="/*" element={ <RemindMeRoutes /> } />
                        : <Route path="auth/*" element={ <AuthRoutes /> } />
                }
                <Route path="/*" element={ <Navigate to="/auth/signin" /> } />
                
            </Routes>
        </BrowserRouter>
    );
};
