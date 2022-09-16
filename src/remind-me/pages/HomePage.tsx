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
            <h1
                className="text-3xl font-bold text-gray-800"
            > Remind Me </h1>
            {
                ( activeMemory )
                    ? ( <MemoryView /> )
                    : ( <NothingSelected /> )
            }
            <div>
                <button 
                    onClick={ onClickNewMemory }
                    disabled={ isSaving }
                > + </button>
            </div>
        </RemindMeLayout>
    );
};
