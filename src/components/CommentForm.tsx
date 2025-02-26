import Image from 'next/image'
import React from 'react'

const Comment = ({
    handleCommentChange,
    comment,
    handleCommentSubmit,
    imageUrl,
}: any) => {
    return (
        <div className="mt-4">
            <div className="flex gap-x-2">
                <Image
                    className="cursor-pointer h-fit"
                    alt="avatar"
                    src={imageUrl}
                    width={40}
                    height={40}
                />
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    className="flex-grow border px-3 py-2 border-black rounded-md"
                    rows={3}
                    placeholder="Leave your comment..."
                ></textarea>
            </div>
            <div
                onClick={handleCommentSubmit}
                className="place-self-end cursor-pointer border mt-3 text-xl px-2 py-1 rounded-md bg-blue-700 text-white"
            >
                Submit
            </div>
        </div>
    )
}

export default Comment
