


import { useState } from 'react';






type ImagePreviewProps = {
    previewContext?: string;
};


const ImagePreview = ({ previewContext }: ImagePreviewProps) => {
    const [imageUrl, setImageUrl] = useState(null);
    console.log(previewContext)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const tempUrl = URL.createObjectURL(file);
        setImageUrl(tempUrl);

        // console.log(tempUrl)


    };

    return (

        <>

            {/* Cover Image */}
            <div>
                <input type="file" onChange={handleFileChange} name="media" />

                {/* Show previewContext only if no selected image */}
                {!imageUrl && previewContext && (
                    <div className="mt-2">
                        <p>Image from context:</p>
                        <img src={previewContext} alt="From Context" className="w-64 rounded" />
                    </div>
                )}

                {/* Show selected file preview */}
                {imageUrl && (
                    <div className="mt-2">
                        <p>Preview of selected image:</p>
                        <img src={imageUrl} alt="Preview" className="w-64 rounded" />
                    </div>
                )}
            </div>



        </>

    )

}

export default ImagePreview