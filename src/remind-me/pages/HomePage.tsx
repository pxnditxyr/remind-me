import { RemindMeLayout } from '../layout';
import { NothingSelected, NoteView } from '../views';

export const HomePage = () => {
    return (
        <RemindMeLayout>
            <h1> Remind Me </h1>
            {/* <NoteView /> */}
            <NothingSelected />
        </RemindMeLayout>
    );
};
