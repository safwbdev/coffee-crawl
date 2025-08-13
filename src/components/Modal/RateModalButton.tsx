import React from 'react'
import Button from '../Button/Button'
import { placeProps } from '@/types';
import { useCoffeeContext } from '@/context/CoffeeContext';

const RateModalButton = ({ place }: { place: placeProps }) => {
    const { setOpenRatingModal } = useCoffeeContext();

    const handleRateModalButton = () => {
        setOpenRatingModal(true);
    }
    return (
        <Button
            onClick={handleRateModalButton}
            bgColor='bg-red-400 h-15 w-15 flex items-center justify-center'
            text={`${place.rating}/10`} />
    )
}

export default RateModalButton