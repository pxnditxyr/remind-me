import { useState } from 'react';
import { useAppSelector } from '../../store';
import { SidebarItem } from './';

export const Sidebar = () => {

    const { auth,remindMe } = useAppSelector( state => state );
    const { displayName } = auth;
    const { memories } = remindMe;

    const [ isSidebarOpen, setIsSidebarOpen ] = useState( false );
    const onAsideClicked = () => setIsSidebarOpen( !isSidebarOpen );
    const onAsideItemClicked = () => setIsSidebarOpen( false );

    return (
        <aside className={ `w-full text-white flex px-3 py-3 sm:w-2/5 lg:w-1/3 xl:w-1/4 ${ isSidebarOpen ? 'bg-emerald-800 flex flex-col py-0' : '' } sm:bg-emerald-800 sm:flex` }
        >
            <div className={ `w-full ${ isSidebarOpen ? 'flex justify-end' : 'grid place-items-center' } sm:hidden` }>
                <button 
                    className={ `font-semibold px-4 py-2 bg-emerald-600 text-sm md:text-lg rounded-md` }
                    onClick={ () => onAsideClicked() }
                >
                    { isSidebarOpen ? 'X' : 'My Memories' }
                </button>
            </div>
            <div className={ `w-full flex flex-col ${ !isSidebarOpen ? 'hidden' : '' } sm:flex overflow-y-auto` }>
                <div className="w-full flex font-semibold md:text-xl p-3">
                    <span className="text-orange-200"> { displayName } </span>
                </div>
                <div className="flex flex-col w-full sm:overflow-y-auto">
                    {
                        memories.map( ( memory ) => (
                            <SidebarItem 
                                key={ memory.id }
                                onItemClicked={ onAsideItemClicked }
                                { ...memory }
                            />
                        ))
                    }
                </div>
            </div>
            
        </aside>
    );
};
