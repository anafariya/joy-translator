"use client"
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'

function Header() {
  return (
    <header className='sticky top-0 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>            
            <Link href="/" prefetch={false} className='overflow-hidden'>
            <div className='flex items-center w-72 h-14 my-10'>
                <AspectRatio
                ratio={16/9}
                className='flex items-center justify-center'>
                <Image
                src="/joy-chat-logo.png"
                alt='Joy Logo'
                width={170}
                height={110}
                className='rounded-full dark:filter dark:invert'
                />
                </AspectRatio>
                </div>
            </Link>
            <div className='flex-1 flex items-center justify-end space-x-4'>
            <DarkModeToggle/>
            <UserButton/>
            
            </div>
        </nav>
    </header>
  )
}

export default Header