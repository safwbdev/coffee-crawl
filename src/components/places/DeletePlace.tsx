import { placeProps } from '@/types'
import React from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from '@/actions'
import { FaTrash } from 'react-icons/fa'

const DeletePlace = ({ place }: { place: placeProps }) => {
    return (
        <Form action={actions.deletePlace}>
            <Input name='inputId' value={place.id} type='hidden'></Input>
            <Button type='submit' bgColor='bg-red-400' text={<FaTrash />}></Button>
        </Form>
    )
}

export default DeletePlace