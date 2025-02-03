import React from 'react'

const TagList = () => {
    const tagList: Array<string> = [
        'java',
        'blockchain',
        'web development',
        '123',
        'english',
        'financial',
        'hello',
        'pencil',
        'moon',
        'computer science',
        'AI',
    ]
    return (
        <div className="bg-gray-200 p-4">
            <p className="text-xl mb-3">Popular Tags</p>
            <ul className="flex gap-x-2 flex-wrap gap-y-1">
                {tagList.map((tag, index) => (
                    <li
                        key={index}
                        className="border-2 border-black bg-gray-400 rounded-full px-2 py-1"
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TagList
