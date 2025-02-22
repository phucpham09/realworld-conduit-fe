'use client'
import React from 'react'

const Footer = () => {
    return (
        <div className="sm:h-20 sm:px-24 px-2 flex items-center gap-x-6 sm:gap-x-10 bg-gray-300">
            <h1 className="text-xl sm:text-2xl font-semibold">VBlog</h1>
            <p className="italic text-sm sm:text-lg">
                An interactive learning project from Thinkster. Code & design
                licensed under MIT.
            </p>
        </div>
    )
}

export default Footer
