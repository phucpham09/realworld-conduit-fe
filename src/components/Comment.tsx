import Image from 'next/image'
import React from 'react'

const Comment = ({ content, CommentAuthor, imageUrl }: any) => {
    return (
        <div className="flex gap-x-2">
            <div>
                <Image
                    className="cursor-pointer h-fit"
                    alt="avatar"
                    src={imageUrl}
                    width={40}
                    height={40}
                />
            </div>
            <div className="">
                <div className="border bg-gray-200 w-fit min-w-52 px-3 py-2 rounded-md">
                    <p className="font-semibold">{CommentAuthor}</p>
                    <p>{content}</p>
                </div>
                <p className="text-sm text-gray-400">Feb 25, 2021</p>
            </div>
        </div>
    )
}

export default Comment
