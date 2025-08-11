import React from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as actions from "@/actions"
import { placeProps } from '@/types'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const FavoritePlace = ({ place }: { place: placeProps }) => {
    return (
        <Form action={actions.favoriteStatus}>
            <Input name='inputId' value={place.id} type='hidden'></Input>
            <Button
                text={place.favorite ? <FaHeart size={30} className='text-red-500' /> : <FaRegHeart size={30} className='text-white' />}
                type='submit'
                actionButton
                bgColor={`h-15 w-15 flex items-center justify-center ${place.favorite ? 'bg-green-400' : 'bg-blue-500'}`}></Button>
        </Form>
    )
}

export default FavoritePlace