import React from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from "@/actions"
import { placeProps } from '@/types'
import { FaCheck, FaMinus } from 'react-icons/fa'

const ChangeStatus = ({ isList, place }: { isList?: boolean, place: placeProps }) => {
    const newClass = `font-medium founded-lg text-sm px-2 py-2 me-2 mb-2 focus:outline-none rounded-lg w-15 h-15 flex justify-center items-center ${place.isCompleted ? 'bg-green-400 border-2' : 'bg-blue-500 border-0'} hover:${place.isCompleted ? 'bg-green-400' : 'bg-blue-500'} ${place?.images && place?.images.length >= 1 && place?.images[0] !== '' && `bg-cover`}`;
    // const oldClass = `${place.isCompleted ? 'bg-green-400 border-2' : 'bg-blue-500 border-0'} hover:${place.isCompleted ? 'bg-green-400 border-2' : 'bg-blue-500 border-0'} font-medium founded-lg text-sm px-2 py-2 me-2 mb-2 focus:outline-none rounded-lg w-15 h-15 flex justify-center items-center`

    return (

        <Form action={actions.changeStatus}>
            <Input name='inputId' value={place.id} type='hidden'></Input>
            {isList ? (<button type='submit'
                style={{
                    backgroundImage: place?.images && place?.images.length >= 1 && place?.images[0] !== '' ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${place.images[0]})` : 'none'
                }}
                className={newClass}>
                {place.isCompleted ? <FaCheck /> : <FaMinus />}
            </button>) : (
                <Button
                    text={place.isCompleted ? <FaCheck /> : <FaMinus />}
                    type='submit'
                    actionButton
                    bgColor={place.isCompleted ? 'bg-green-400' : 'bg-blue-500'}></Button>

            )}
        </Form>
    )
}

export default ChangeStatus