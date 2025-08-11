import React from 'react'
import Link from 'next/link'
import { placeProps } from '@/types'
import ChangePlace from './ChangePlace'
import Button from '../Button/Button'
import { MdEdit } from 'react-icons/md';
import DeleteModalButton from '../Modal/DeleteModalButton'

const Place = ({ isList, place }: { isList?: boolean, place: placeProps }) => {
    const placeStyle = {
        textDecoration: place.isCompleted ? "line-through" : "none",
        opacity: place.isCompleted ? 0.5 : 1
    }


    return (
        <div style={placeStyle} className='w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-5 rounded-2xl'>
            <div className="flex items-center mx-2 border-0">
                <ChangePlace isList={isList} place={place} />
            </div>
            <div className="flex items-center mx-2 border-0">
                <Link href={`places/${place.id}`}>
                    <span className='text-center font-bold uppercase '>{place.name}</span>
                </Link>
            </div>
            <div className="flex flex-col items-center border-0">
                <Link href={`edit/${place.id}`}>
                    <Button type='submit' bgColor='bg-purple-400 cursor-pointer' text={<MdEdit />}></Button>
                </Link>
                <DeleteModalButton place={place} />
            </div>
        </div>
    )
}

export default Place