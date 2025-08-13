"use client"

import { placeProps } from '@/types';
import React, { createContext, useContext, useMemo, useState } from 'react';

type ThemeContextType = {
    openDeleteModal: boolean;
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    openRatingModal: boolean;
    setOpenRatingModal: React.Dispatch<React.SetStateAction<boolean>>;
    filter: number;
    setFilter: React.Dispatch<React.SetStateAction<number>>;
    placeToDelete: placeProps | undefined;
    setPlaceToDelete: React.Dispatch<React.SetStateAction<placeProps | undefined>>;
};

const coffeeContext = createContext<ThemeContextType | undefined>(undefined);

const CoffeeContext = ({ children }: { children: React.ReactNode }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const [openRatingModal, setOpenRatingModal] = useState<boolean>(false);
    const [filter, setFilter] = useState<number>(0);
    const [placeToDelete, setPlaceToDelete] = useState<placeProps | undefined>(undefined);

    const values = useMemo(() => ({
        filter,
        setFilter,
        openDeleteModal,
        setOpenDeleteModal,
        placeToDelete,
        setPlaceToDelete,
        openRatingModal,
        setOpenRatingModal,
    }), [
        filter,
        setFilter,
        openDeleteModal,
        setOpenDeleteModal,
        placeToDelete,
        setPlaceToDelete,
        openRatingModal,
        setOpenRatingModal,
    ])


    return (
        <coffeeContext.Provider value={values}>
            {children}
        </coffeeContext.Provider>
    )
}

const useCoffeeContext = () => {
    const context = useContext(coffeeContext);
    if (!context) {
        throw new Error('Error!');
    }
    return context
}
export { CoffeeContext, useCoffeeContext }