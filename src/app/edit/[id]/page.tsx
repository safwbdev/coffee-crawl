import React from 'react'
import * as actions from "@/actions"
import { FaLocationArrow } from 'react-icons/fa';
import EditPlace from '@/components/places/EditForm';

const EditPlacePage = async ({ params }: any) => {
    const { id } = await params;

    const data = await actions.getDataById(id);

    return data && (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
            <h1 className="text-5xl fomnt-extrabold uppercase mb-5 text-center">
                <span className="text-4xl font-extrabold uppercase">{data.name}</span>
            </h1>
            <EditPlace place={data} />
        </div>
    )
}

export default EditPlacePage