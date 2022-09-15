
export const fileUpload = async ( file : File ) => {

    if ( !file ) throw new Error( 'No file found' );

    const cloudUrl = 'https://api.cloudinary.com/v1_1/pxndxs/upload';

    const formData = new FormData();
    formData.append( 'upload_preset', 'remind-me' );
    formData.append( 'file', file );

    try {
        const response = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( !response.ok ) throw new Error( 'Error uploading file' );

        const cloudResponse = await response.json();

        return cloudResponse.secure_url;

    } catch ( error : any ) {
        throw new Error( error.message );
    }
}
