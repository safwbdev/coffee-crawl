import React from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from "@/actions"
import { placeProps } from '@/types'
import { FaCheck } from 'react-icons/fa'

const ChangePlace = ({ place }: { place: placeProps }) => {
    return (

        <Form action={actions.changeStatus}>
            <Input name='inputId' value={place.id} type='hidden'></Input>
            <Button
                text={<FaCheck />}
                type='submit'
                actionButton
                bgColor={place.isCompleted ? 'bg-green-400' : 'bg-blue-500'}></Button>
        </Form>
    )
}

export default ChangePlace