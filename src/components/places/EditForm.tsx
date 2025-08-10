'use client';
import React, { useState } from 'react'
import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import * as actions from "@/actions"
import { useCoffeeContext } from '@/context/CoffeeContext';
import { placeProps } from '@/types'
import { CldUploadWidget } from 'next-cloudinary';
import { redirect } from 'next/navigation'

const EditForm = ({ place }: { place: placeProps }) => {
    const { setOpenEditModal } = useCoffeeContext();
    const [newName, setNewName] = useState<string>(place?.name || '');
    const [newLocation, setNewLocation] = useState<string>(place?.location || '')
    const [newType, setNewType] = useState<string>(place?.type || '')
    const [newCuisine, setNewCuisine] = useState<string>(place?.cuisine || '')
    const [image, setImage] = useState<string | undefined>(place?.images ? place?.images[0] : undefined)

    const handleSubmit = () => {
        setOpenEditModal(false);
        setImage(undefined);
        redirect(`/places/${place.id}`);
    }

    return (
        <Form action={actions.editPlace} onSubmit={handleSubmit}>
            <div className="flex justify-center flex-col items-center gap-2 px-6">
                <Input
                    name='inputId'
                    value={place?.id}
                    type='hidden' />
                <Input
                    name='newName'
                    placeholder='Edit Name'
                    value={newName}
                    onChange={setNewName}
                    type='text'
                    isEdit
                />
                <Input
                    name='newLocation'
                    placeholder='Edit Location'
                    value={newLocation}
                    onChange={setNewLocation}
                    type='text'
                    isEdit
                />
                <Input
                    name='newType'
                    placeholder='Edit Type'
                    value={newType}
                    onChange={setNewType}
                    type='text'
                    isEdit
                />
                <Input
                    name='newCuisine'
                    placeholder='Edit Cuisine'
                    value={newCuisine}
                    onChange={setNewCuisine}
                    type='text'
                    isEdit
                />
                <div className="border-2 w-full flex justify-center flex-col items-center h-80 p-5">
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
                                    text={image ? "Upload A Different Image" : "Upload Image"}
                                    onClick={() => open()}
                                    bgColor='bg-red-400'
                                    actionButton />
                            );
                        }}
                    </CldUploadWidget>
                    {image ? (<img src={image} alt={''} />) : (<span>No Image selected</span>)}
                </div>
                <Input
                    name='inputImage'
                    value={image}
                    type='hidden' />
                <Button
                    type='submit'
                    text="Save"
                    bgColor='bg-red-400 w-full' />
            </div>
        </Form>
    )
}

export default EditForm