import React from 'react'
import * as actions from "@/actions"
import { MdEdit } from 'react-icons/md';
import Link from 'next/link';
import SinglePage from '@/components/SinglePage/SinglePage';

const Place = async ({ params }: { params: Promise<{ id: string }>; }) => {
    const { id } = await params;

    const data = await actions.getDataById(id);

    return data && (
        <>
            <SinglePage data={data} />
            <Link href={`/edit/${id}`}>
                <button className={`text-white-500 fixed top-5 right-5 cursor-pointer`}>
                    <MdEdit size={20} />
                </button>
            </Link>
        </>
    )
}

export default Place