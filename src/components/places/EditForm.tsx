'use client';
import React, { useCallback, useEffect, useState } from 'react'
import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import * as actions from "@/actions"
import { placeProps } from '@/types'
import { CldUploadWidget } from 'next-cloudinary';
import { redirect } from 'next/navigation';
import { IoMdCloseCircle } from "react-icons/io";
import Image from 'next/image';
import { ReactTags, TagSuggestion } from 'react-tag-autocomplete'
import './Form.css'
import { toast } from 'react-toastify';

const EditForm = ({ place, tagCollection }: { place: placeProps, tagCollection: string[] }) => {
    const [newName, setNewName] = useState<string>(place?.name || '');
    const [newLocation, setNewLocation] = useState<string>(place?.location || '')
    const [newType, setNewType] = useState<string>(place?.type || '')
    const [newCuisine, setNewCuisine] = useState<string>(place?.cuisine || '')
    const [image, setImage] = useState<string | undefined>(place?.images ? place?.images[0] : undefined)
    const [formValues, setFormValues] = useState<string[]>(place?.socials || [""]);
    const [tagArray, setTagArray] = useState<TagSuggestion[]>([]);
    const [selected, setSelected] = useState<TagSuggestion[]>([])
    const [tags, setTags] = useState<string[]>([]);


    useEffect(() => {
        if (!place) return
        const tempArr: TagSuggestion[] = [];
        place?.tags && place?.tags.map((tag, index) => tempArr.push({ value: index + 1, label: tag }))
        if (tempArr) setSelected(tempArr)
    }, [place]);


    useEffect(() => {
        const tempArr: TagSuggestion[] = [];
        tagCollection.map((tag, index) => tempArr.push({ value: index + 1, label: tag }))
        if (tempArr) setTagArray(tempArr)
    }, [tagCollection]);

    useEffect(() => {
        const tempArr: string[] = [];
        selected.map((selectedTags) => tempArr.push(selectedTags.label))
        if (tempArr) setTags(tempArr)
    }, [selected]);


    const onAdd = useCallback(
        (newTag: TagSuggestion) => {
            setSelected([...selected, newTag])
        },
        [selected]
    )

    const onDelete = useCallback(
        (tagIndex: number) => {
            setSelected(selected.filter((_, i) => i !== tagIndex))
        },
        [selected]
    )


    const addFormFields = () => {
        setFormValues([...formValues, ""])
    }

    const removeFormFields = (i: number) => {
        const newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const handleChange = (i: number, e: string) => {
        const newFormValues = [...formValues];
        newFormValues[i] = e;
        setFormValues(newFormValues);
    }

    const handleSubmit = () => {
        toast.success('Changes have been saved!')
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
                <ReactTags
                    labelText="Tags"
                    selected={selected}
                    suggestions={tagArray}
                    onAdd={onAdd}
                    onDelete={onDelete}
                    deleteButtonText="Remove %value% from the list"
                    noOptionsText="No matching countries"
                    ariaDeletedText="Removed tag %value%"
                    newOptionText="Add %value%"
                />
                <input
                    name={'inputTags'}
                    type={'hidden'}
                    value={tags} />
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