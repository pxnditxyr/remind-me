import { useAppDistpach } from '../../store';
import { startSignOut } from '../../store/auth';

export const Navbar = () => {

    const dispatch = useAppDistpach();

    const onSignOut = () => {
        dispatch( startSignOut() );
    };

    return (
        <nav className="w-full bg-emerald-800 py-2 text-white flex px-3">
            <ul className="w-full flex items-center gap-3 font-semibold">
                <li> RemindMe </li>
                <li className="font-light text-gray-300"> @yuki </li>
            </ul>
            <div className="w-full flex items-center justify-end">
                <button 
                    onClick={ onSignOut }
                    className="bg-red-700 rounded-md font-semibold px-4 py-2 hover:bg-red-600 text-sm"
                > Sign Out </button>
            </div>
        </nav>
    )
}
