import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store';

import './index.css';

export const RemindMe = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    );
};
