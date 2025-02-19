import React from 'react'

const TagList = ({ tagList }: any) => {
    return (
        <ul className="flex gap-x-2 flex-wrap gap-y-1">
            {tagList?.map((tag: any) => (
                <li
                    key={tag.tagid}
                    className="border-2 border-black bg-gray-400 rounded-full px-2 py-1 cursor-pointer"
                >
                    {tag.name}
                </li>
            ))}
        </ul>
    )
}

export default TagList
