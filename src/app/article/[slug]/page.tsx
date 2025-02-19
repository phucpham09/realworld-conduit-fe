'use client'

import ArticleTag from '@/components/ArticleTag'
import Comment from '@/components/Comment'
import Favorite from '@/components/Favorite'
import { useEffect, useState } from 'react'

export default function ArticleDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const [article, setArticle] = useState<any>(null)
    useEffect(() => {
        const selectedArticleTag: any = localStorage.getItem('selectedArticle')
        setArticle(JSON.parse(selectedArticleTag))
    }, [])
    return (
        <>
            <div className="flex px-20 gap-x-10 my-10">
                {/* Left*/}
                <div className="w-3/4">
                    <div className="flex justify-between">
                        {/* Title*/}
                        <h1 className="text-3xl font-semibold">
                            {article?.title}
                        </h1>

                        {/* Favorite*/}
                        <Favorite />
                    </div>
                    <ArticleTag tags={article?.tags} />
                    {/* Description*/}
                    <h3>{article?.description}</h3>

                    {/* Tag*/}

                    {/* Horizontal line*/}
                    <div className="border my-6"></div>

                    {/* Body*/}
                    <div>
                        <h2>{article?.body}</h2>
                    </div>

                    {/* Comment*/}
                    <Comment />
                </div>

                {/* Right*/}
                <div className="w-1/4">Author Information</div>
            </div>
        </>
    )
}
