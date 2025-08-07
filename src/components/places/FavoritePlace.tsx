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
                text={place.favorite ? <FaHeart className='text-red-500' /> : <FaRegHeart className='text-white' />}
                type='submit'
                actionButton
                bgColor={place.favorite ? 'bg-green-400' : 'bg-blue-500'}></Button>
        </Form>
    )
}

export default FavoritePlace