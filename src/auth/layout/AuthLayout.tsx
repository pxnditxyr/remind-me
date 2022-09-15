
interface IAuthLayoutProps {
    children: JSX.Element | JSX.Element[];
    title: string;
};

export const AuthLayout = ( { children, title } : IAuthLayoutProps ) => {
    return (
        <div className="bg-white flex flex-col gap-6 justify-center items-center px-4 py-8 rounded-3xl w-96">
            <h1 className="text-3xl font-semibold font-serif text-gray-800"> { title } </h1>
            { children }
        </div>
    );
};
