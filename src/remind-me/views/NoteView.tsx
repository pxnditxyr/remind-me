import { Gallery } from '../components';

export const NoteView = () => {
    return (
        <div>
            <div>
                <p> { JSON.stringify( new Date() ) } </p>
            </div>
            <div>
                <textarea />
                <textarea />
            </div>
            <Gallery />
        </div>
    );
};
