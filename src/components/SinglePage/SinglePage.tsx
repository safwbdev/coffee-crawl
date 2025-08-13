'use client';
import React from 'react'
import { placeProps } from '@/types'
import Link from 'next/link';
import ChangeStatus from '../places/ChangeStatus'
import FavoriteButton from '../places/FavoriteButton'
import RateModalButton from '../Modal/RateModalButton';
import RateModal from '../Modal/RateModal';
import Button from '../Button/Button';
import { FaInstagram, FaFacebookSquare, FaGlobe, FaGlassMartiniAlt, FaLocationArrow } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";

const SinglePage = ({ data }: { data: placeProps }) => {

    const defaultImg = data?.images && data?.images.length >= 1 && data?.images[0] !== '' ? data?.images[0] : 'https://placehold.co/400x400?text=No+Image';

    const getSocial = (link: string) => {
        if (link.includes('instagram')) {
            return <Link target="_blank" href={link}>
                <Button bgColor='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] h-15 w-15 flex justify-center items-center' text={<FaInstagram size={30} />} />
            </Link>
        }
        if (link.includes('facebook')) {
            return <Link target="_blank" href={link}>
                <Button bgColor='bg-blue-500 h-15 w-15 flex justify-center items-center' text={<FaFacebookSquare size={30} />} />
            </Link>
        } else {
            return <Link target="_blank" href={link}>
                <Button bgColor='bg-green-500 h-15 w-15 flex justify-center items-center' text={<FaGlobe size={30} />} />
            </Link>
        }
    }

    return (
        <>
            <div className="w-screen flex flex-col md:flex-row justify-center gap-5">
                <div className="image">
                    <img src={defaultImg} className='w-full h-[300px] object-cover' />
                </div>
                <div className="px-4 md:px-0 md:py-2">
                    <h1 className="text-4xl font-extrabold uppercase mb-2 text-center flex items-center">
                        <ChangeStatus place={data} />
                        {data.name}
                    </h1>
                    <div className='flex gap-3 justify-arround mb-3'>
                        <div className="border-0 flex-1">
                            <FaLocationArrow size={20} />
                        </div>
                        <div className="border-0 flex-15">
                            {data.location}
                        </div>
                    </div>
                    <div className='flex gap-3 justify-between mb-3'>
                        <div className="border-0 flex-1"><LuChefHat size={20} /></div>
                        <div className="border-0 flex-15">{data.cuisine}</div>
                    </div>
                    <div className='flex gap-3 justify-around mb-3'>
                        <div className="border-0 flex-1">
                            <FaGlassMartiniAlt size={20} />
                        </div>
                        <div className="border-0 flex-15">{data.type}</div>
                    </div>
                    <div className='flex mb-3'>
                        {data.tags?.map((tag, index) => (
                            <div className="border-1 rounded-full p-2 mr-2 text-black bg-white">{tag}</div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-center absolute bottom-10 left-1/2 left-1/2 -translate-1/2">
                        {data.socials && data.socials.length > 0 && (
                            <div className="flex w-full justify-center">
                                {data.socials?.map((social, index) => (
                                    <div className='border-0 justify-center flex' key={index}>{getSocial(social)}</div>
                                ))}
                            </div>
                        )}
                        <div className="">
                            <RateModalButton place={data} />
                        </div>
                        <div className="">
                            <FavoriteButton place={data} />
                        </div>
                    </div>
                </div>
            </div >
            <RateModal data={data} />
        </>
    )
}

export default SinglePage