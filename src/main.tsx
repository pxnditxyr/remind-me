import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RemindMe } from './RemindMe';


createRoot( document.getElementById( 'root' )! ).render(
    <StrictMode>
        <RemindMe />
    </StrictMode>
);
