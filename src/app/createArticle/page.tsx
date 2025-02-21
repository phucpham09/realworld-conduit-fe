'use client'
import getAllTags from '@/apis/tags/getAllTags'
import CreateArticleForm from '@/components/CreateArticleForm'
import React, { useEffect } from 'react'

const CreateArticlePage = () => {
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
    return (
        <div>
            <CreateArticleForm tagList={tagList} />
        </div>
    )
}

export default CreateArticlePage
