'use client';
import React from 'react'
import ChangePlace from '../places/ChangePlace'
import { FaLocationArrow } from 'react-icons/fa'
import FavoritePlace from '../places/FavoritePlace'
import { placeProps } from '@/types'
import RateModalButton from '../Modal/RateModalButton';
import RateModal from '../Modal/RateModal';

const SinglePage = ({ data }: { data: placeProps }) => {

    const defaultImg = data?.images && data?.images.length >= 1 && data?.images[0] !== '' ? data?.images[0] : 'https://placehold.co/400x400?text=No+Image';

    return (
        <>
            <div className="w-screen flex flex-col md:flex-row justify-center gap-5">
                <div className="lol">
                    <img src={defaultImg} />
                </div>
                <div className="px-4 md:px-0 md:py-2">
                    <h1 className="text-4xl font-extrabold uppercase mb-2 text-center flex items-center">
                        <ChangePlace place={data} />
                        {data.name}
                    </h1>
                    <div className='flex gap-6 justify-between'>
                        <FaLocationArrow size={40} />
                        <div className="lol">
                            {data.location}
                            <div className='py-2'>cuisine: {data.cuisine}</div>
                            <div>type: {data.type}</div>

                            {data.socials && (
                                <div className="lol">
                                    <span>Social Media</span>
                                    <ul>
                                        {data.socials?.map((social, index) => (
                                            <li className='border-2' key={index}>{social}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-between">
                        <div className="">
                            <FavoritePlace place={data} />
                        </div>
                        <div className="">
                            <RateModalButton place={data} />
                            {/* <h2 className='text-2xl font-extrabold'>{data.rating}/5</h2> */}
                        </div>
                    </div>
                </div>
            </div>
            <RateModal data={data} />
        </>
    )
}

export default SinglePage