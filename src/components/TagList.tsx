import React from 'react'

const TagList = ({ tagList }: any) => {
    return (
        <div className="bg-gray-200 p-4 rounded-md">
            <p className="text-xl mb-3">Popular Tags</p>
            <ul className="flex gap-x-2 flex-wrap gap-y-1">
                {tagList?.map((tag: any, index: number) => (
                    <li
                        key={index}
                        className="border-2 border-black bg-gray-400 rounded-full px-2 py-1 cursor-pointer"
                    >
                        {tag.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TagList
