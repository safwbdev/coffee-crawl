import { useCoffeeContext } from '@/context/CoffeeContext';
import React from 'react'
import { FaWindowClose } from 'react-icons/fa';
import DeletePlace from '../places/DeletePlace';
import Button from '../Button/Button';

const DeleteModal = () => {
    const { openDeleteModal, setOpenDeleteModal, placeToDelete, setPlaceToDelete } = useCoffeeContext();

    const handleCancel = () => {
        setOpenDeleteModal(false);
        setPlaceToDelete(undefined)
    }

    return openDeleteModal && (
        <>
            <div className="absolute border-2  bg-slate-900 z-1 top-1/2 left-1/2 -translate-1/2 w-3/4 md:w-1/2 ">
                <div className="flex justify-between p-4">
                    <span className='font-bold uppercase flex justify-center'>
                        Delete place
                    </span>
                    <span className='text-large' onClick={() => setOpenDeleteModal(false)}>
                        <FaWindowClose />
                    </span>
                </div>
                <div className="modalContent px-4">
                    <p>You are about to remove <span className='font-bold'>{placeToDelete?.name}</span>.</p>
                    <p>Are you sure you want to proceed?</p>
                    <div className="flex justify-around flex-row py-4">
                        <DeletePlace />
                        <Button
                            type='button'
                            onClick={handleCancel}
                            bgColor='bg-red-400 '
                            text={"No"} />
                    </div>
                </div>
            </div>
            <div
                className='border-2 absolute w-full h-full justify-center items-center flex top-0 bg-gray-400 opacity-60'
                onClick={() => setOpenDeleteModal(false)} />
        </>

    )
}

export default DeleteModal