import { useAppDistpach } from '../../store';
import { startSignOut } from '../../store/auth';

export const Navbar = () => {

    const dispatch = useAppDistpach();

    const onSignOut = () => {
        dispatch( startSignOut() );
    };

    return (
        <nav className="w-full bg-emerald-800 py-2 text-white flex px-3 md:px-5">
            <ul className="w-full flex items-center gap-3 font-semibold md:text-xl">
                <li> RemindMe </li>
                <li className="text-gray-300 text-sm md:text-lg"> @yuki </li>
            </ul>
            <div className="w-full flex items-center justify-end">
                <button 
                    onClick={ onSignOut }
                    className="bg-red-700 rounded-md font-semibold px-4 py-2 hover:bg-red-600 text-sm md:text-lg"
                > Sign Out </button>
            </div>
        </nav>
    )
}
