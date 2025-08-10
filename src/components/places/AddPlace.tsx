'use client';

import React, { useState } from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from '@/actions'
// import { useCoffeeContext } from '@/context/CoffeeContext'
import { CldUploadWidget } from 'next-cloudinary';
import { redirect } from 'next/navigation'


const AddPlace = () => {
    // const { setOpenAddModal } = useCoffeeContext();
    const [image, setImage] = useState<string | undefined>(undefined)

    const handleSubmit = () => {
        redirect(`/`);
    }

    return (
        <Form action={actions.createdPlace} onSubmit={handleSubmit}>
            <div className="flex justify-center flex-col items-center gap-2 px-6">
                <Input name='name' type='text' placeholder='Name' />
                <Input name='location' type='text' placeholder='location' />
                <Input name='type' type='text' placeholder='type' />
                <Input name='cuisine' type='text' placeholder='cuisine' />
                <div className="border-2 w-full flex justify-center flex-col items-center h-60 p-5">
                    <CldUploadWidget
                        uploadPreset="upload"
                        onSuccess={(results, { widget }) => {
                            if (results?.info) {
                                if (typeof results?.info !== "string") {
                                    setImage(results?.info?.url)
                                }
                                widget.close();
                            }
                        }}
                    >
                        {({ open }) => {
                            return (
                                <Button
                                    type='button'
                                    text={image ? "Upload A Different Image" : "Upload Image"}
                                    onClick={() => open()}
                                    bgColor='bg-red-400'
                                    actionButton />
                            );
                        }}
                    </CldUploadWidget>
                    {image ? (<img src={image} alt={''} className='h-full' />) : (<span>No Image selected</span>)}
                    <Input name='inputImage' value={image} type='hidden'></Input>
                </div>
                <div className="flex flex-row">
                    <Button type='submit' text="Add" bgColor='bg-blue-600' />
                    {/* <Button type='button' onClick={() => setOpenAddModal(false)} text="Cancel" bgColor='bg-red-600' /> */}
                </div>
            </div>
        </Form>
    )
}

export default AddPlace