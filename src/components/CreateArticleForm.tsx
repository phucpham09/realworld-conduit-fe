'use client'
import React from 'react'
import MultipleSelectChip from './MultipleSelectChip'
import { SelectChangeEvent } from '@mui/material/Select/Select'
import { Theme, useTheme } from '@mui/material/styles'
import createArticle from '@/apis/articles/createArticle'
import { toast, ToastContainer } from 'react-toastify'

const CreateArticleForm = ({ tagList }: any) => {
    const theme = useTheme()
    const [tagName, setTagName] = React.useState<string[]>([])
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [body, setBody] = React.useState('')
    const [slug, setSlug] = React.useState('')

    const getStyles = (
        name: string,
        personName: readonly string[],
        theme: Theme
    ) => {
        return {
            fontWeight: personName.includes(name)
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
        }
    }
    const handleTagChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event
        setTagName(typeof value === 'string' ? value.split(',') : value)
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        const preSlug = e.target.value
            .toLowerCase()
            .trim() // Remove leading/trailing spaces
            .replace(/\s+/g, '-') // Replace multiple spaces with a single hyphen
            .replace(/[^\w-]+/g, '') // Remove special characters except hyphens and underscores
            .replace(/-+/g, '-') // Remove consecutive hyphens
        setSlug(preSlug)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const res = await createArticle(
                title,
                slug,
                description,
                body,
                tagName
            )
            toast.success('Article created successfully')
            setTitle('')
            setSlug('')
            setDescription('')
            setBody('')
            setTagName([])
        } catch (error) {
            toast.error('Failed to create article')
        }
    }
    return (
        <div className="flex flex-col items-center justify-center gap-y-10 mt-10">
            <h1 className="text-4xl font-semibold">Create New Article</h1>
            <form className="flex flex-col gap-y-6 w-1/2">
                <div className="">
                    <label className="text-2xl">Title: </label>
                    <input
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Title..."
                        type="text"
                        className="rounded-md mt-2 border-2 focus:border-none w-full px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-700"
                    />
                </div>
                <div className="">
                    <label className="text-2xl">Tags: </label>
                    <MultipleSelectChip
                        tagList={tagList}
                        handleChange={handleTagChange}
                        tagName={tagName}
                        theme={theme}
                        getStyles={getStyles}
                    />
                </div>
                <div>
                    <label className="text-2xl block">Description: </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description..."
                        rows={5}
                        className="rounded-md mt-2 border-2 focus:border-none w-full px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-700"
                    ></textarea>
                </div>

                <div>
                    <label className="text-2xl block">Body: </label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Share your content..."
                        rows={10}
                        className="rounded-md mt-2 border-2 focus:border-none w-full px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-700"
                    ></textarea>
                </div>
                <div
                    onClick={handleSubmit}
                    className="border bg-blue-700 text-white place-self-end px-2 py-1 text-2xl mb-10 cursor-pointer font-medium rounded-md"
                >
                    Submit
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default CreateArticleForm
