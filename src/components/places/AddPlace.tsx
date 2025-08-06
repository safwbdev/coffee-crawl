'use client';

import React from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from '@/actions'
import { useCoffeeContext } from '@/context/CoffeeContext'

const AddPlace = () => {

    const { setOpenAddModal } = useCoffeeContext();
    return (
        <Form action={actions.createdPlace} onSubmit={() => setOpenAddModal(false)}>
            <div className="flex justify-center flex-col items-center gap-2 px-6">
                <Input name='name' type='text' placeholder='Name' />
                <Input name='location' type='text' placeholder='location' />
                <Input name='type' type='text' placeholder='type' />
                <Input name='cuisine' type='text' placeholder='cuisine' />
                <Button type='submit' text="Add" bgColor='bg-blue-600' />
            </div>
        </Form>
    )
}

export default AddPlace