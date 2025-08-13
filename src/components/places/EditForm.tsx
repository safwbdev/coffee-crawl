'use client';
import React, { useState } from 'react'
import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import * as actions from "@/actions"
import { useCoffeeContext } from '@/context/CoffeeContext';
import { placeProps } from '@/types'
import { CldUploadWidget } from 'next-cloudinary';
import { redirect } from 'next/navigation';
import { IoMdCloseCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';

const EditForm = ({ place }: { place: placeProps }) => {
    const [newName, setNewName] = useState<string>(place?.name || '');
    const [newLocation, setNewLocation] = useState<string>(place?.location || '')
    const [newType, setNewType] = useState<string>(place?.type || '')
    const [newCuisine, setNewCuisine] = useState<string>(place?.cuisine || '')
    const [image, setImage] = useState<string | undefined>(place?.images ? place?.images[0] : undefined)
    const [formValues, setFormValues] = useState<string[]>(place?.socials || [""]);
    const [tagsValues, setTagsValues] = useState<string>("");
    const [tags, setTags] = useState<string[]>(place?.tags || []);

    const addFormFields = () => {
        setFormValues([...formValues, ""])
    }

    const addTagFields = () => {
        setTags([...tags, tagsValues.toLowerCase()])
        setTagsValues("")
    }

    const removeFormFields = (i: number) => {
        const newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const removeTags = (i: number) => {
        const newFormValues = [...tags];
        newFormValues.splice(i, 1);
        setTags(newFormValues)
    }

    const handleChange = (i: number, e: string) => {
        const newFormValues = [...formValues];
        newFormValues[i] = e;
        setFormValues(newFormValues);
    }

    const handleTags = (e: string) => {
        setTagsValues(e);
    }

    const handleSubmit = () => {
        setImage(undefined);
        redirect(`/places/${place.id}`);
    }

    return (
        <Form
            action={actions.editPlace}
            onSubmit={handleSubmit}
            className='w-full md:w-1/2 mx-auto'>
            <div className="flex justify-center flex-col items-center gap-2 px-6">
                <input
                    name='inputId'
                    value={place?.id}
                    type='hidden' />
                <Input
                    name='newName'
                    placeholder='Name'
                    label='Name'
                    value={newName}
                    onChange={setNewName}
                    type='text'
                    isEdit
                />
                <Input
                    name='newLocation'
                    placeholder='Location'
                    label='Location'
                    value={newLocation}
                    onChange={setNewLocation}
                    type='text'
                    isEdit
                />
                <Input
                    name='newType'
                    placeholder='Type'
                    label='Type'
                    value={newType}
                    onChange={setNewType}
                    type='text'
                    isEdit
                />
                <Input
                    name='newCuisine'
                    placeholder='Cuisine'
                    label='Cuisine'
                    value={newCuisine}
                    onChange={setNewCuisine}
                    type='text'
                    isEdit
                />
                <label>Tags</label>
                <div className="flex flex-wrap w-full mx-2 border rounded-lg text-base bg-gray-700 border-gray-600" >
                    {tags.map((element, index) => (
                        <div className="bg-red-400 flex items-center justify-around rounded p-1 my-2 ml-2" key={index}>{element}
                            <button
                                type="button"
                                onClick={() => removeTags(index)}
                            >
                                <IoClose size={30} className='text-white' />
                            </button>
                        </div>


                    ))}
                    <input
                        name={'tags'}
                        type={'text'}
                        placeholder={'Add tags'}
                        className='m-4'
                        value={tagsValues}
                        onChange={(e) => handleTags(e.target.value)}
                    />
                </div>
                <input
                    name={'inputTags'}
                    type={'hidden'}
                    value={tags} />
                <div className="button-section">
                    <Button
                        text={"Add another"}
                        type='button'
                        bgColor='bg-red-400'
                        onClick={() => addTagFields()} />
                </div>
                <label>Socials</label>
                {formValues.map((element, index) => (
                    <div className="flex items-center w-full" key={index}>
                        <Input
                            name='socialMedia'
                            type='text'
                            placeholder='Enter social Media link'
                            value={formValues[index]}
                            onChange={(e) => {
                                if (typeof e === 'string')
                                    handleChange(index, e)
                            }}
                            isSocial
                            isEdit />
                        {index > 0 && (
                            <Button
                                type="button"
                                onClick={() => removeFormFields(index)}
                                text={<IoMdCloseCircle size={30} className='text-red-400' />}
                            />
                        )}
                    </div>

                ))}
                <div className="button-section">
                    <Button
                        text={"Add another"}
                        type='button'
                        bgColor='bg-red-400'
                        onClick={() => addFormFields()} />
                </div>
                <input
                    name={'inputSocials'}
                    type={'hidden'}
                    value={formValues} />
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
                                    type='button'
                                    text={image ? "Upload A Different Image" : "Upload Image"}
                                    onClick={() => open()}
                                    bgColor='bg-red-400'
                                    actionButton />
                            );
                        }}
                    </CldUploadWidget>
                    {image ? (<Image
                        src={image}
                        className='h-full'
                        width={500}
                        height={500}
                        alt='MainImage' />) : (<span>No Image selected</span>)}
                </div>
                <input
                    name='inputImage'
                    value={image}
                    onChange={() => setImage(image)}
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