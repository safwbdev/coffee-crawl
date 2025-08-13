import React from 'react'
import Button from '../Button/Button'
import { FaTrash } from 'react-icons/fa'
import { useCoffeeContext } from '@/context/CoffeeContext'
import { placeProps } from '@/types'

const DeleteModalButton = ({ place }: { place: placeProps }) => {
    const { setOpenDeleteModal, setPlaceToDelete } = useCoffeeContext();

    const handleDelete = () => {
        setOpenDeleteModal(true);
        setPlaceToDelete(place)
    }
    return (
        <Button
            onClick={handleDelete}
            bgColor='bg-red-400'
            text={<FaTrash />} />
    )
}

export default DeleteModalButton