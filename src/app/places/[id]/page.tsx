import React, { useState } from 'react'
import * as actions from "@/actions"
import EditModalButton from '@/components/Modal/EditModalButton';
import Link from 'next/link';
import SinglePage from '@/components/SinglePage/SinglePage';

const Place = async ({ params }: { params: Promise<{ id: string }>; }) => {
    const { id } = await params;

    const data = await actions.getDataById(id);

    return data && (
        <>
            <SinglePage data={data} />
            <Link href={`/edit/${id}`}>
                <EditModalButton />
            </Link>
        </>
    )
}

export default Place