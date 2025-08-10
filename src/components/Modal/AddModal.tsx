'use client';
import React from 'react'
import AddPlace from '../places/AddPlace'
import { useCoffeeContext } from '@/context/CoffeeContext'
import { FaWindowClose } from 'react-icons/fa';

const AddModal = () => {
    const { openAddModal, setOpenAddModal } = useCoffeeContext();

    return openAddModal && (
        <>
            <div className="fixed border-2  bg-slate-900 z-1 top-1/2 left-1/2 -translate-1/2 w-95/100 md:w-1/2 h-full">
                <div className="flex justify-between p-4">
                    <span className='font-bold uppercase flex justify-center'>
                        Add new place
                    </span>
                    <span className='text-large' onClick={() => setOpenAddModal(false)}>
                        <FaWindowClose />
                    </span>
                </div>
                <div className="modalContent">
                    <AddPlace />
                </div>
            </div>
            <div className='border-2 fixed w-full h-full justify-center items-center flex top-0 bg-gray-400 opacity-60' onClick={() => setOpenAddModal(false)} />
        </>

    )
}

export default AddModal