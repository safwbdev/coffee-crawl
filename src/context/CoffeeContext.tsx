"use client"

import { placeProps } from '@/types';
import React, { createContext, useContext, useMemo, useState } from 'react';

type ThemeContextType = {
    openAddModal: Boolean;
    setOpenAddModal: React.Dispatch<React.SetStateAction<Boolean>>;
    openEditModal: Boolean;
    setOpenEditModal: React.Dispatch<React.SetStateAction<Boolean>>;
    currentEdit: String;
    setCurrentEdit: React.Dispatch<React.SetStateAction<String>>;
    currentEditPlace: placeProps | undefined;
    setCurrentEditPlace: React.Dispatch<React.SetStateAction<placeProps | undefined>>;
    filter: Number;
    setFilter: React.Dispatch<React.SetStateAction<Number>>;
};

const coffeeContext = createContext<ThemeContextType | undefined>(undefined);

const CoffeeContext = ({ children }: { children: React.ReactNode }) => {
    const [openAddModal, setOpenAddModal] = useState<Boolean>(false);
    const [openEditModal, setOpenEditModal] = useState<Boolean>(false);
    const [filter, setFilter] = useState<Number>(0);
    const [currentEditPlace, setCurrentEditPlace] = useState<placeProps | undefined>(undefined);
    const [currentEdit, setCurrentEdit] = useState<String>('');

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
        setFilter
    }), [openAddModal,
        setOpenAddModal,
        openEditModal,
        setOpenEditModal,
        currentEdit,
        setCurrentEdit,
        currentEditPlace,
        setCurrentEditPlace,
        filter,
        setFilter
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