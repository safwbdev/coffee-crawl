import React from 'react'
import * as actions from "@/actions"
import List from '@/components/List/List';
import Title from '@/components/Title';

export default async function Home() {
    // const data = await actions.getFavoriteData();
    const data = await actions.getData();
    return (
        <>
            <div className="w-screen py-20 flex justify-center flex-col items-center">
                <Title text='Favorites' />
                <div className="flex justify-center flex-col items-center">
                    <List isFavorites data={data} />
                </div>
            </div>
        </>
    )
}