'use client'
import React, { useEffect, useState } from 'react'
import Place from '../places/Place'
import { placeProps } from '@/types'
import Button from '../Button/Button'
import DeleteModal from '../Modal/DeleteModal'
import { useCoffeeContext } from '@/context/CoffeeContext'
import TagSection from '../TagSection/TagSection'

const List = ({ isFavorites, data, tags }: { isFavorites?: boolean, data: placeProps[], tags?: string[] }) => {

    const [listData, setlistData] = useState(data)
    const { filter, setFilter, tagArray, setTagArray } = useCoffeeContext();

    const buttons = [
        { label: 'Clear', style: 'border-1' },
        { label: 'Incomplete', style: 'bg-blue-500' },
        { label: 'Completed', style: 'bg-green-400' }
    ]

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

    useEffect(() => {
        if (isFavorites) setTagArray([]);
    }, [isFavorites, setTagArray])


    return (
        <>
            {!isFavorites && (<div className="flex items-center justify-center">
                {buttons.map((but, index) => (
                    <Button
                        actionButton
                        bgColor={but.style}
                        key={index}
                        onClick={() => setFilter(index)}
                        text={but.label}
                    />
                ))}
            </div>)}
            <div className="w-screen flex flex-col md:flex-row justify-center md:grid md:grid-cols-6 gap-5">
                <div className="flex flex-col">
                    {!isFavorites && tags && (
                        <div className="tagSection">
                            <h3 className="uppercase mb-5 text-center hidden md:block">
                                <span className="text-xl font-extrabold uppercase">Tags</span>
                            </h3>
                            <TagSection data={tags} isCentered />
                        </div>
                    )}
                </div>
                <div className="md:col-span-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                        {listData.map((place, id) => {
                            if (!isFavorites) {
                                if (tagArray.length == 0 || (tagArray.length !== 0 && tagArray.every(color => place.tags && place.tags.includes(color)))) {
                                    return (
                                        <div className="w-full" key={id}>
                                            <Place isList place={place} />
                                        </div>
                                    )
                                }
                            }
                            if (isFavorites && place.favorite) {
                                return (
                                    <div className="w-full" key={id}>
                                        <Place
                                            isList
                                            place={place}
                                            isFavorite={isFavorites} />
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
            <DeleteModal />
        </>
    )
}

export default List;