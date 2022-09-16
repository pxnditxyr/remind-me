import { Navbar, Sidebar } from '../components';

interface IRemindMeLayoutProps {
    children: JSX.Element | JSX.Element[];
};

export const RemindMeLayout = ( { children } : IRemindMeLayoutProps ) => {

    return (

        <div className="w-full h-screen flex flex-col">
            <Navbar />
            <div className="w-full h-full sm:flex sm:overflow-hidden">
                <Sidebar />
                <main className="w-full">
                    { children }
                </main>
            </div>
        </div>
    );
};
