import { useAppSelector } from '../../store';
import { SidebarItem } from './';

export const Sidebar = () => {

    const { auth,remindMe } = useAppSelector( state => state );
    const { displayName } = auth;
    const { memories } = remindMe;

    return (
        <aside>
            <div>
                <span> { displayName } </span>
            </div>
            <div>
                {
                    memories.map( ( memory ) => (
                        <SidebarItem key={ memory.id } { ...memory } />
                    ))
                }
            </div>
        </aside>
    );
};
