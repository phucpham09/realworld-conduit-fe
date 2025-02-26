'use client'
import Image from 'next/image'
import React from 'react'
import Favorite from './Favorite'
import ArticleTag from './ArticleTag'
const Article = ({
    author,
    title,
    description,
    viewArticleDetail,
    tags,
    imageUrl,
}: any) => {
    return (
        <div className="border-b-4 pb-6 mt-4">
            <div className="flex justify-between">
                <div className="flex gap-x-3 ">
                    <Image
                        className="cursor-pointer"
                        alt="avatar"
                        src={imageUrl}
                        width={60}
                        height={40}
                    />
                    <div>
                        <p className="hover:underline cursor-pointer text-xl">
                            {author}
                        </p>
                        <p>February 20, 2025</p>
                    </div>
                </div>

                <Favorite />
            </div>
            <div className="mt-4 cursor-pointer" onClick={viewArticleDetail}>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-xl text-gray-500">{description}</p>
            </div>
            <div className="mt-3 flex justify-between cursor-pointer">
                <p className="text-gray-400" onClick={viewArticleDetail}>
                    Read more...
                </p>
                <ArticleTag tags={tags} />
            </div>
        </div>
    )
}

export default Article
