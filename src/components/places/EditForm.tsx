'use client';
import React, { useState } from 'react'
import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import * as actions from "@/actions"
import { useCoffeeContext } from '@/context/CoffeeContext';
import { placeProps } from '@/types'
import { CldUploadWidget } from 'next-cloudinary';

const EditForm = ({ place }: { place: placeProps }) => {
    const { setOpenEditModal, currentEditPlace } = useCoffeeContext();
    const [newName, setNewName] = useState<string>(place?.name || '');
    const [newLocation, setNewLocation] = useState<string>(place?.location || '')
    const [newType, setNewType] = useState<string>(place?.type || '')
    const [newCuisine, setNewCuisine] = useState<string>(place?.cuisine || '')
    const [image, setImage] = useState<string | null>(null)

    const handleSubmit = () => {
        setOpenEditModal(false);
    }

    return (
        <Form action={actions.editPlace} onSubmit={handleSubmit}>
            <div className="flex justify-center flex-col items-center gap-2 px-6">
                <Input name='inputId' value={place?.id} type='hidden'></Input>
                <Input
                    name='newName'
                    placeholder='Edit Name'
                    value={newName} onChange={setNewName}
                    type='text'
                    isEdit
                />
                <Input
                    name='newLocation'
                    placeholder='Edit Location'
                    value={newLocation} onChange={setNewLocation}
                    type='text'
                    isEdit
                />
                <Input
                    name='newType'
                    placeholder='Edit Type'
                    value={newType} onChange={setNewType}
                    type='text'
                    isEdit
                />
                <Input
                    name='newCuisine'
                    placeholder='Edit Cuisine'
                    value={newCuisine} onChange={setNewCuisine}
                    type='text'
                    isEdit
                />
                <CldUploadWidget
                    uploadPreset="upload"
                    onSuccess={(results, { widget }) => {
                        if (results?.info)
                            console.log('Public :', results?.info);
                        // const { url } = results?.info
                        // console.log(url);

                        setImage(results?.info?.url)
                        widget.close();
                    }}
                >
                    {({ open }) => {
                        return (
                            <button onClick={() => open()}>
                                Upload an Image
                            </button>
                        );
                    }}
                </CldUploadWidget>
                {image && (<img src={image} alt={''} />)}
                <Button type='submit' text="Save"></Button>
            </div>
        </Form>
    )
}

export default EditForm