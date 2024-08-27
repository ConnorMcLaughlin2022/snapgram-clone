import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUplaoder = () => {
    const [fileUrl, setFileUrl] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
            <input {...getInputProps()} className='curson-pointer' />
            {
                fileUrl ? (
                    <div>
                        test 1
                    </div>
                ) : (
                    <div>
                        test 2
                    </div>
                )

            }
        </div>
    )
}

export default FileUplaoder