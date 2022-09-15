import { Navbar, Sidebar } from '../components';

interface IRemindMeLayoutProps {
    children: JSX.Element | JSX.Element[];
};

export const RemindMeLayout = ( { children } : IRemindMeLayoutProps ) => {
    return (
        <div className="w-full h-full">
            <Navbar />
            <Sidebar />
            <main>
                { children }
            </main>
        </div>
    );
};
