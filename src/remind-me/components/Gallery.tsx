
const images = [
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        title: 'Image 1',
    },
    {
        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        title: 'Image 2',
    },
];

export const Gallery = () => {

    return (
        <div>
            {
                images.map( image => (
                    <picture>
                        <img src={ image.src } alt={ image.title } />
                    </picture>
                ))
            }
        </div>
    );
};
