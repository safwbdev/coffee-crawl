"use client"

import { placeProps } from '@/types';
import React, { createContext, useContext, useMemo, useState } from 'react';

type ThemeContextType = {
    openAddModal: boolean;
    setOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>;
    openDeleteModal: boolean;
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    openEditModal: boolean;
    setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    openRatingModal: boolean;
    setOpenRatingModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentEdit: string;
    setCurrentEdit: React.Dispatch<React.SetStateAction<string>>;
    currentEditPlace: placeProps | undefined;
    setCurrentEditPlace: React.Dispatch<React.SetStateAction<placeProps | undefined>>;
    filter: Number;
    setFilter: React.Dispatch<React.SetStateAction<number>>;
    placeToDelete: placeProps | undefined;
    setPlaceToDelete: React.Dispatch<React.SetStateAction<placeProps | undefined>>;
    placeToRate: placeProps | undefined;
    setPlaceToRate: React.Dispatch<React.SetStateAction<placeProps | undefined>>;
};

const coffeeContext = createContext<ThemeContextType | undefined>(undefined);

const CoffeeContext = ({ children }: { children: React.ReactNode }) => {
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const [openRatingModal, setOpenRatingModal] = useState<boolean>(false);
    const [filter, setFilter] = useState<number>(0);
    const [placeToDelete, setPlaceToDelete] = useState<placeProps | undefined>(undefined);
    const [placeToRate, setPlaceToRate] = useState<placeProps | undefined>(undefined);
    const [currentEditPlace, setCurrentEditPlace] = useState<placeProps | undefined>(undefined);
    const [currentEdit, setCurrentEdit] = useState<string>('');

    const values = useMemo(() => ({
        openAddModal,
        setOpenAddModal,
        openEditModal,
        setOpenEditModal,
        currentEdit,
        setCurrentEdit,
        currentEditPlace,
        setCurrentEditPlace,
        filter,
        setFilter,
        openDeleteModal,
        setOpenDeleteModal,
        placeToDelete,
        setPlaceToDelete,
        openRatingModal,
        setOpenRatingModal,
        placeToRate,
        setPlaceToRate
    }), [openAddModal,
        setOpenAddModal,
        openEditModal,
        setOpenEditModal,
        currentEdit,
        setCurrentEdit,
        currentEditPlace,
        setCurrentEditPlace,
        filter,
        setFilter,
        openDeleteModal,
        setOpenDeleteModal,
        placeToDelete,
        setPlaceToDelete,
        openRatingModal,
        setOpenRatingModal,
        placeToRate,
        setPlaceToRate
    ])


    return (
        <coffeeContext.Provider value={values}>{children}</coffeeContext.Provider>
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