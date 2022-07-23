
interface IAuthLayoutProps {
    children: JSX.Element | JSX.Element[];
    title: string;
};

export const AuthLayout = ( { children, title } : IAuthLayoutProps ) => {
    return (
        <div>
            <h1> { title } </h1>
            { children }
        </div>
    );
};
