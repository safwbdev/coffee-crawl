import { useCoffeeContext } from '@/context/CoffeeContext';
import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa';
import Button from '../Button/Button';
import { placeProps } from '@/types';
import Input from '../Input/Input';
import Form from '../Form/Form';
import * as actions from '@/actions'

const RateModal = ({ data }: { data: placeProps }) => {
    const { openRatingModal, setOpenRatingModal } = useCoffeeContext();
    const [rate, setRate] = useState<string>(data.rating?.toString() ?? '0');

    const handleCancel = () => {
        setOpenRatingModal(false);
    }

    const handleSubmit = () => {
        setOpenRatingModal(false);
    }

    return openRatingModal && (
        <>
            <div className="absolute border-2  bg-slate-900 z-1 top-1/2 left-1/2 -translate-1/2 w-9/10 h-1/2">
                <div className="flex justify-between p-4">
                    <span className='font-bold uppercase flex justify-center'>
                        Rate place
                    </span>
                    <span className='text-large' onClick={() => setOpenRatingModal(false)}>
                        <FaWindowClose />
                    </span>
                </div>
                <div className="modalContent p-5">
                    <Form action={actions.ratePlace} onSubmit={handleSubmit}>
                        <p>How do you rate this place?</p>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                            <button
                                key={index}
                                onClick={() => setRate(index.toString())}
                                type='button'
                                className={`border-1 p-5 cursor-pointer ${index.toString() === rate && 'bg-red-400'}`}>
                                {index}
                            </button>

                        ))}
                        <Input name='inputId' value={data.id} type='hidden' />
                        <Input name='newRate' value={rate} type='hidden' />
                        <div className="footer p-5">
                            <Button
                                type='button'
                                onClick={handleCancel}
                                bgColor='bg-red-400'
                                text={"Cancel"} />
                            <Button
                                type='submit'
                                text="Save"
                                bgColor='bg-red-400 w-full' />
                        </div>
                    </Form>

                </div>
            </div>
            <div
                className='border-2 absolute w-full h-full justify-center items-center flex top-0 bg-gray-400 opacity-60'
                onClick={() => setOpenRatingModal(false)} />
        </>

    )
}

export default RateModal