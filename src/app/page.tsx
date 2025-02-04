'use client'
import Article from '@/components/Article'
import Banner from '@/components/Banner'
import TagList from '@/components/TagList'
import { useState } from 'react'

export default function Home() {
    const [currentTab, setCurrentTab] = useState('Global Feed')
    const [allTab, setAllTab] = useState(['Global Feed', 'Your Feed'])
    const handleTabClick = (tab: string) => {
        setCurrentTab(tab)
    }
    return (
        <div className="">
            <Banner />
            <div className="flex px-20 my-10 gap-x-10">
                <div className="w-3/4">
                    <ul className="flex border-b-2 gap-x-6">
                        {allTab.map((tab: string, index: number) => (
                            <li
                                key={index}
                                className={`px-4 pb-2 text-xl cursor-pointer ${currentTab === tab ? 'border-b-4 border-blue-700' : 'text-gray-400'}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <Article />
                    </div>
                </div>
                <div className="w-1/4">
                    <TagList />
                </div>
            </div>
        </div>
    )
}
