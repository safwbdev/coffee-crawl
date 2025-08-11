import React from 'react'
import * as actions from "@/actions"
import List from '@/components/List/List';

export default async function Home() {
    // const data = await actions.getFavoriteData();
    const data = await actions.getData();
    return (
        <>
            <div className="w-screen py-20 flex justify-center flex-col items-center">
                <h1 className="text-5xl fomnt-extrabold uppercase mb-5 text-center">
                    <span className="text-4xl font-extrabold uppercase">Favorites</span>
                </h1>
                <div className="flex justify-center flex-col items-center">
                    <List isFavorites data={data} />
                </div>
            </div>
        </>
    )
}