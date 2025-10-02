import React from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from '@/actions'
import { useCoffeeContext } from '@/context/CoffeeContext'
import { toast } from 'react-toastify'

const DeleteForm = () => {
    const { setOpenDeleteModal, placeToDelete, setPlaceToDelete } = useCoffeeContext();

    const handleSubmit = () => {
        toast('Cafe has been deleted!')
        setOpenDeleteModal(false)
        setPlaceToDelete(undefined)

    }

    return (
        <Form action={actions.deletePlace} onSubmit={handleSubmit}>
            <Input
                name='inputId'
                value={placeToDelete?.id}
                type='hidden' />
            <Button
                type='submit'
                bgColor='bg-green-400'
                text={"Yes"} />
        </Form>
    )
}

export default DeleteForm