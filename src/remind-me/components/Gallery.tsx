interface IGalleryProps {
    imageUrls: string[] | undefined;
    title: string;
};

export const Gallery = ( { imageUrls, title } : IGalleryProps ) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full overflow-y-auto p-4">
            {
                imageUrls?.map( imageUrl => (
                    <picture
                        key={ imageUrl }
                        className="w-full h-48 bg-gray-200 rounded-xl"
                    >
                        <img
                            src={ imageUrl }
                            alt={ title } 
                            className="w-full h-full object-cover rounded-xl"
                            
                        />
                    </picture>
                ))
            }
        </div>
    );
};
