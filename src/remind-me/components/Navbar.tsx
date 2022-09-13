import { useAppDistpach } from '../../store';
import { startSignOut } from '../../store/auth';

export const Navbar = () => {

    const dispatch = useAppDistpach();

    const onSignOut = () => {
        console.log( 'signing out' );
        dispatch( startSignOut() );
    };

    return (
        <nav>
            <ul>
                <li> @yuki </li>
                <li> Insert </li>
            </ul>
            <div>
                <button onClick={ onSignOut }> Sign Out </button>
            </div>
        </nav>
    )
}
