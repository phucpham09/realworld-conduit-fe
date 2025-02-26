'use client'
import getAllTags from '@/apis/tags/getAllTags'
import CreateArticleForm from '@/components/CreateArticleForm'
import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'

import React, { useEffect } from 'react'

const CreateArticlePage = () => {
    const { user, loading } = useAuth()
    const [tagList, setTagList] = React.useState<string[]>([])
    useEffect(() => {
        const fetchedTags = async () => {
            try {
                const res = await getAllTags()
                setTagList(res.data)
            } catch (error) {}
        }
        fetchedTags()
    }, [])
    if (!user && !loading) {
        redirect('/')
    }
    return (
        <div>
            <CreateArticleForm tagList={tagList} />
        </div>
    )
}

export default CreateArticlePage
