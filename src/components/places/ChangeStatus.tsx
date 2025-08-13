import React from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from "@/actions"
import { placeProps } from '@/types'
import { FaCheck, FaMinus, FaHeart } from 'react-icons/fa'

const ChangeStatus = ({ isList, place, isFavorite }: { isList?: boolean, isFavorite?: boolean, place: placeProps }) => {
    const newClass = `font-medium founded-lg text-sm px-2 py-2 me-2 mb-2 focus:outline-none rounded-lg w-15 h-15 flex justify-center items-center ${!isFavorite && 'pointer-cursor'} ${place.isCompleted ? 'bg-green-400 border-2' : 'bg-blue-500 border-0'} hover:${place.isCompleted ? 'bg-green-400' : 'bg-blue-500'} ${place?.images && place?.images.length >= 1 && place?.images[0] !== '' && `bg-cover`}`;

    return (

        <Form action={actions.changeStatus}>
            <Input name='inputId' value={place.id} type='hidden' />
            {isList ? (<button
                type='submit'
                style={{
                    backgroundImage: place?.images && place?.images.length >= 1 && place?.images[0] !== '' ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${place.images[0]})` : 'none'
                }}
                className={newClass}
                disabled={isFavorite}>
                {place.isCompleted ? isFavorite ? place?.images && place?.images.length >= 1 && place?.images[0] !== '' ? null : <FaHeart /> : <FaCheck /> : <FaMinus />}
            </button>) : (
                <Button
                    text={place.isCompleted ? <FaCheck /> : <FaMinus />}
                    type='submit'
                    actionButton
                    bgColor={place.isCompleted ? 'bg-green-400' : 'bg-blue-500'}
                    isDisabled={isFavorite} />

            )}
        </Form>
    )
}

export default ChangeStatus