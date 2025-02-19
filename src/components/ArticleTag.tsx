import React from 'react'

const ArticleTag = ({ tags }: any) => {
    return (
        <ul className="flex gap-x-3">
            {tags?.map((tag: any) => (
                <li
                    className="border-2 px-2 rounded-full text-gray-400"
                    key={tag.tagid}
                >
                    {tag.name}
                </li>
            ))}
        </ul>
    )
}

export default ArticleTag
