import { IMemory } from '../../interfaces';
import { useAppDistpach } from '../../store';
import { setActiveMemory } from '../../store/remind-me';

interface SidebarItemProps extends IMemory {
    onItemClicked: () => void;
};

export const SidebarItem = ( { id, title, description, date, imageUrls, onItemClicked } : SidebarItemProps ) => {

    const dispatch = useAppDistpach();

    const onClickMemory = () => {
        onItemClicked();
        dispatch( setActiveMemory({
            id,
            title,
            description,
            date,
            imageUrls
        }) )
    };

    return (
        <article
            className="w-full flex p-3 cursor-pointer hover:bg-emerald-700 gap-3"
            onClick={ () => onClickMemory() }
        >
            <img
                src={ `${ imageUrls ? imageUrls[ 0 ] : 'https://picsum.photos/200/200?month=${ id }' }` }
                alt={ title } 
                className="w-20 h-20 rounded-xl"
                />
            <section
                className="w-full flex flex-col gap-1 items-start justify-start py-2 overflow-hidden"
            >
                <span
                    className="font-semibold text-sm md:text-lg truncate w-full hover:text-clip"
                > { ( title ) ? title : 'Untitled' } </span>
                <p
                    className="text-gray-300 text-xs md:text-sm w-full truncate hover:text-clip"
                > { ( description ) ? description : 'No description' } </p>
            </section>
        </article>
    );
};
