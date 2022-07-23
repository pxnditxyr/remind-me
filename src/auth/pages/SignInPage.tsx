import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout';

export const SignInPage = () => {
    return (
        <AuthLayout title={ 'Sign In' }>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    />
                <button type="submit"> Sign In </button>
            </form>
            <Link to="../signup">  Don't have an account? Sign Up </Link>
            <button> Sign In with Google </button>
        </AuthLayout>
    );
};
