import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout';

export const SignUpPage = () => {
    return (
        <AuthLayout title={ 'Sign Up' }>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    />
                <input
                    type="date"
                    name="birthday"
                    />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    />
                <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    />
                <button type="submit"> Sign Up </button>
            </form>
            <Link to="../signin"> Already have an account? </Link>
        </AuthLayout>
    );
};
