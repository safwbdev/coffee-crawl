'use client';

import React, { useState } from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from '@/actions'
import { CldUploadWidget } from 'next-cloudinary';
import { redirect } from 'next/navigation'
import { IoMdCloseCircle, } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';

const AddPlace = () => {
    const [image, setImage] = useState<string | undefined>(undefined)
    const [formValues, setFormValues] = useState<string[]>([""]);
    const [tagsValues, setTagsValues] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

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
                    <Button text={"Add another"} type='button' bgColor='bg-red-400' onClick={() => addFormFields()} />
                </div>
                <input
                    name={'inputSocials'}
                    type={'hidden'}
                    value={formValues} />
                {/* <Button type='button' onClick={() => console.log(formValues)} text="Check" bgColor='bg-red-600' /> */}
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
                    {/* {image ? (<img src={image} alt={''} className='h-full' />) : (<span>No Image selected</span>)} */}
                    {image ? (<Image
                        src={image}
                        className='h-full'
                        width={500}
                        height={500}
                        alt='MainImage' />) : (<span>No Image selected</span>)}
                    <Input name='inputImage' value={image} type='hidden'></Input>
                </div>
                <div className="flex flex-row">
                    <Button type='submit' text="Add" bgColor='bg-blue-600' />
                </div>
            </div>
        </Form >
    )
}

export default AddPlace