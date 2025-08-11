'use client'
import React, { useEffect, useState } from 'react'
import Place from '../places/Place'
import { placeProps } from '@/types'
import Button from '../Button/Button'
import DeleteModal from '../Modal/DeleteModal'

const List = ({ isFavorites, data }: { isFavorites?: boolean, data: placeProps[] }) => {

    const [listData, setlistData] = useState(data)
    const [filter, setFilter] = useState(0);

    useEffect(() => {
        switch (filter) {
            case 0:
                setlistData(data)
                break;
            case 1:
                setlistData(data.filter((el) => el.isCompleted === false))
                break;
            case 2:
                setlistData(data.filter((el) => el.isCompleted === true))
                break;

            default:
                break;
        }
    }, [filter, data])

    return (
        <>
            <div className="favoriteList">
                {!isFavorites && (<div className="flex items-center justify-center">
                    <Button onClick={() => setFilter(0)} text={'Clear filters'} actionButton />
                    <Button onClick={() => setFilter(1)} text={'Incomplete'} bgColor='bg-blue-500' actionButton />
                    <Button onClick={() => setFilter(2)} text={'Completed'} bgColor='bg-green-400' actionButton />
                </div>)}
                <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
                    {listData.map((place, id) => {
                        if (isFavorites && place.favorite) {
                            return (
                                <div className="w-full" key={id}>
                                    <Place place={place} />
                                </div>
                            )
                        }
                    }
                    )}
                </div>
            </div>
            <DeleteModal />
        </>
    )
}

export default List;