import { useAppDistpach, useAppSelector } from '../../store';
import { startNewMemory } from '../../store/remind-me';
import { RemindMeLayout } from '../layout';
import { NothingSelected, MemoryView } from '../views';

export const HomePage = () => {

    const dispatch = useAppDistpach();
    const { isSaving, activeMemory } = useAppSelector( state => state.remindMe );

    const onClickNewMemory = () => {
        dispatch( startNewMemory() );
    }

    return (
        <RemindMeLayout>
            <h1 className="text-3xl font-bold text-gray-800 p-4"> Remind Me </h1>
            {
                ( activeMemory )
                    ? ( <MemoryView /> )
                    : ( <NothingSelected /> )
            }
            <div>
                <button 
                    onClick={ onClickNewMemory }
                    disabled={ isSaving }
                    className="px-4 py-2 text-white bg-emerald-400 rounded-full hover:bg-emerald-600 fixed bottom-4 right-4 text-2xl font-bold"
                > + </button>
            </div>
        </RemindMeLayout>
    );
};
