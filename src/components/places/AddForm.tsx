'use client';

import React, { useCallback, useEffect, useState } from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from '@/actions'
import { CldUploadWidget } from 'next-cloudinary';
import { redirect } from 'next/navigation'
import { IoMdCloseCircle, } from "react-icons/io";
import Image from 'next/image';
import { ReactTags, TagSuggestion } from 'react-tag-autocomplete'
import './Form.css'
import { toast } from 'react-toastify';

const AddForm = ({ tagCollection }: { tagCollection: string[] }) => {
    const [image, setImage] = useState<string | undefined>(undefined)
    const [formValues, setFormValues] = useState<string[]>([""]);
    const [updatedTags, setUpdatedTags] = useState<string[]>(tagCollection || [""]);
    const [tagArray, setTagArray] = useState<TagSuggestion[]>([]);
    const [selected, setSelected] = useState<TagSuggestion[]>([])
    const [tags, setTags] = useState<string[]>([]);
    const [newtags, setNewTags] = useState<string>('');

    useEffect(() => {
        const tempArr: TagSuggestion[] = [];
        tagCollection.map((tag, index) => tempArr.push({ value: index + 1, label: tag }))
        if (tempArr) setTagArray(tempArr)
    }, [tagCollection]);

    // set tags 
    useEffect(() => {
        const tempArr: string[] = [];
        selected.map((selectedTags) => tempArr.push(selectedTags.label))
        if (tempArr) setTags(tempArr)
    }, [selected]);

    // update tag collection 
    useEffect(() => {
        selected.map(pop => {
            if (!tagCollection.includes(pop.label)) {
                if (updatedTags.includes(pop.label)) return;
                setUpdatedTags(next => [...next, pop.label])
                setNewTags('true')
            }
        })
    }, [selected])

    // Sort alphabetically 
    useEffect(() => {
        updatedTags.sort((a, b) => a.localeCompare(b))
    }, [updatedTags])

    const onAdd = useCallback((newTag: TagSuggestion) => setSelected([...selected, newTag]), [selected]);

    const onDelete = useCallback((tagIndex: number) => setSelected(selected.filter((_, i) => i !== tagIndex)), [selected]);

    const addFormFields = () => setFormValues([...formValues, ""])

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
        toast.success('Entry Added!')
        redirect(`/`);
    }

    return (
        <Form
            action={actions.createdPlace}
            onSubmit={handleSubmit}
            className='w-full md:w-1/2 mx-auto'>
            <div className="flex justify-center flex-col items-center gap-2 px-6">
                <Input
                    name='name'
                    type='text'
                    placeholder='Name'
                    label='Name'
                />
                <Input
                    name='location'
                    type='text'
                    placeholder='Location'
                    label='Location'
                />
                <Input
                    name='type'
                    type='text'
                    placeholder='Type'
                    label='Type'
                />
                <Input
                    name='cuisine'
                    type='text'
                    placeholder='Cuisine'
                    label='Cuisine'
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
                    allowNew
                />
                <input
                    name={'inputTags'}
                    type={'hidden'}
                    value={tags} />
                <input
                    name={'newtags'}
                    type={'hidden'}
                    value={newtags} />
                <input
                    name={'updatedTags'}
                    type={'hidden'}
                    value={updatedTags} />
                <label>Socials</label>
                {formValues.map((element, index) => (
                    <div className="flex items-center w-full" key={index}>
                        <Input
                            name='socialMedia'
                            type='text'
                            placeholder='Enter social Media link'
                            onChange={(e) => {
                                if (typeof e === 'string')
                                    handleChange(index, e)
                            }} isSocial isEdit />
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
                    {image ? (<Image
                        src={image}
                        className='h-full'
                        width={500}
                        height={500}
                        alt='MainImage' />) : (<span>No Image selected</span>)}
                    <Input name='inputImage' value={image} type='hidden' />
                </div>
                <div className="flex flex-row w-full py-5">
                    <Button
                        type='submit'
                        text="Add"
                        bgColor='bg-blue-600 w-full' />
                </div>
            </div>
        </Form >
    )
}

export default AddForm