import Link from 'next/link'
import React from 'react'
import { FaHeart, FaHome } from 'react-icons/fa'
import { FaCirclePlus } from 'react-icons/fa6'

const BottomNavigation = () => {

    const links = [
        { label: "Home", url: "/", icon: <FaHome /> },
        { label: "New", url: "/new", icon: <FaCirclePlus /> },
        { label: "Favorites", url: "/favorites", icon: <FaHeart /> }
    ]

    return (
        <div className="fixed inset-x-0 bottom-0 left-0 z-50 w-full h-16 mx-auto overflow-hidden bg-slate-900 border-t sm:bottom-5 sm:shadow-lg sm:shadow-base-500/30 hover:shadow-md duration-300 sm:border sm:max-w-md sm:rounded-xl border-base-50">
            <div className={`h-full mx-auto font-medium grid grid-cols-3`}>
                {links.map((link, index) => (
                    <Link key={index} href={link.url} className="inline-flex flex-col items-center justify-center px-5 hover:bg-base-50 group gap-1 hover:text-orange-500 text-base-500 cursor-pointer">
                        {link.icon}
                        <span className="text-xs">{link.label}</span>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default BottomNavigation