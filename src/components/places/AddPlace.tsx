'use client';

import React, { useState } from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from '@/actions'
// import { useCoffeeContext } from '@/context/CoffeeContext'
import { CldUploadWidget } from 'next-cloudinary';
import { redirect } from 'next/navigation'
import { IoMdCloseCircle } from "react-icons/io";

const AddPlace = () => {
    // const { setOpenAddModal } = useCoffeeContext();
    const [image, setImage] = useState<string | undefined>(undefined)
    const [formValues, setFormValues] = useState<string[]>([""]);

    const addFormFields = () => {
        setFormValues([...formValues, ""])
    }

    const removeFormFields = (i: any) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleChange = (i: number, e: any) => {

        let newFormValues = [...formValues];
        newFormValues[i] = e;
        setFormValues(newFormValues);
    }

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
                {formValues.map((element, index) => (
                    <div className="flex items-center w-full" key={index}>
                        <Input
                            name='socialMedia'
                            type='text'
                            placeholder='Enter social Media link'
                            onChange={(e: any) => handleChange(index, e)} isSocial isEdit />
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
                    {image ? (<img src={image} alt={''} className='h-full' />) : (<span>No Image selected</span>)}
                    <Input name='inputImage' value={image} type='hidden'></Input>
                </div>
                <div className="flex flex-row">
                    <Button type='submit' text="Add" bgColor='bg-blue-600' />
                </div>
            </div>
        </Form>
    )
}

export default AddPlace