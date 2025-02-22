'use client'

import createComment from '@/apis/comments/createComment'
import ArticleTag from '@/components/ArticleTag'
import AuthorInfo from '@/components/AuthorInfo'
import Comment from '@/components/Comment'
import CommentForm from '@/components/CommentForm'
import Favorite from '@/components/Favorite'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export default function ArticleDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { user } = useAuth()
    const [article, setArticle] = useState<any>(null)
    const [content, setContent] = useState('')
    const handleCommentChange = (e: any) => {
        setContent(e.target.value)
    }
    const handleCommentSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const newComment = await createComment(content, article.articleid)
            toast.success('Comment created successfully')
            setArticle((prevArticle: any) => ({
                ...prevArticle,
                comments: [...prevArticle.comments, newComment],
            }))
            setContent('')
        } catch (error) {
            toast.error('Failed to create comment')
        }
    }
    useEffect(() => {
        const selectedArticleTag: any = localStorage.getItem('selectedArticle')
        setArticle(JSON.parse(selectedArticleTag))
    }, [])
    return (
        <>
            <div className="flex max-sm:flex-col justify-center max-sm:items-center sm:px-20 sm:gap-x-10 my-10">
                <div className="mb-4 sm:hidden">
                    <AuthorInfo
                        author={article?.user?.username}
                        email={article?.user?.email}
                        bio={article?.user?.bio}
                    />
                </div>
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
                    <div className="border my-6"></div>
                    <h2 className="text-2xl mb-4">Comments</h2>
                    {article?.comments.length === 0 && (
                        <p>There is no comment yet.</p>
                    )}
                    {article?.comments?.map((comment: any) => (
                        <Comment
                            key={comment.commentid}
                            content={comment.content}
                            author={article.user.username}
                        />
                    ))}

                    <p className="mt-3 text-gray-400 cursor-pointer">
                        See more...
                    </p>
                    {/* Comment*/}
                    {user ? (
                        <CommentForm
                            comment={content}
                            handleCommentChange={handleCommentChange}
                            handleCommentSubmit={handleCommentSubmit}
                        />
                    ) : (
                        <p>
                            Please{' '}
                            <Link href="/signin">
                                <span className="text-blue-700 hover:underline cursor-pointer">
                                    sign in
                                </span>
                            </Link>{' '}
                            to comment
                        </p>
                    )}
                </div>

                {/* Right*/}
                <div className="w-1/4 max-sm:hidden">
                    <AuthorInfo
                        author={article?.user?.username}
                        email={article?.user?.email}
                        bio={article?.user?.bio}
                    />
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
