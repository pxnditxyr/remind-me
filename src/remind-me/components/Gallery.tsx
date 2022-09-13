interface IGalleryProps {
    imageUrls: string[] | undefined;
    title: string;
};

export const Gallery = ( { imageUrls, title } : IGalleryProps ) => {

    return (
        <div>
            {
                imageUrls?.map( imageUrl => (
                    <picture key={ imageUrl }>
                        <img src={ imageUrl } alt={ title } />
                    </picture>
                ))
            }
        </div>
    );
};
