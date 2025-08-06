import React from 'react'
import * as actions from "@/actions"
import { FaLocationArrow } from 'react-icons/fa';
import EditModalButton from '@/components/Modal/EditModalButton';
import Link from 'next/link';

const Place = async ({ params }: any) => {
    const { id } = await params;

    const data = await actions.getDataById(id);

    return data && (
        <>
            <div className="w-screen py-20 flex justify-center flex-col items-center">
                <h1 className="text-5xl fomnt-extrabold uppercase mb-5 text-center">
                    <span className="text-4xl font-extrabold uppercase">{data.name}</span>
                </h1>
                <div>{data.rating}/5</div>
                <div className='flex'>
                    <FaLocationArrow />
                    {data.location}
                </div>
                <div>cuisine: {data.cuisine}</div>
                <div>type: {data.type}</div>
            </div>
            <Link href={`/edit/${id}`}>
                <EditModalButton />
            </Link>
        </>
    )
}

export default Place