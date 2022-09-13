import { IMemory } from '../../interfaces';
import { useAppDistpach } from '../../store';
import { setActiveMemory } from '../../store/remind-me';

// interface IMemoryProps {
//     memories: IMemory;
// }

export const SidebarItem = ( { id, title, description, date, imageUrls } : IMemory ) => {

    const dispatch = useAppDistpach();

    const onClickMemory = () => {
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
            onClick={ () => onClickMemory() }>
            <img src={ `https://picsum.photos/200/200?month=${ date }` } alt={ title } />
            <section>
                <span> { title } </span>
                <p> { description } </p>
            </section>
        </article>
    );
};
