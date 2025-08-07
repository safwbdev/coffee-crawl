import React from 'react'
import * as actions from "@/actions"
import { FaHeart, FaLocationArrow, FaRegHeart } from 'react-icons/fa';
import EditModalButton from '@/components/Modal/EditModalButton';
import Link from 'next/link';
import ChangePlace from '@/components/places/ChangePlace';
import FavoritePlace from '@/components/places/FavoritePlace';

const Place = async ({ params }: any) => {
    const { id } = await params;

    const data = await actions.getDataById(id);
    const defaultImg = 'https://placehold.co/400x400?text=No+Image'
    return data && (
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
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-between">
                        <div className="">
                            <FavoritePlace place={data} />
                        </div>
                        <div className="">
                            <h2 className='text-2xl font-extrabold'>{data.rating}/5</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Link href={`/edit/${id}`}>
                <EditModalButton />
            </Link>

        </>
    )
}

export default Place