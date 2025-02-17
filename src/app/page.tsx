'use client'
import getAllArticles from '@/apis/articles/getAllArticles'
import Article from '@/components/Article'
import Banner from '@/components/Banner'
import TagList from '@/components/TagList'
import { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
export default function Home() {
    const { user, loading, logout } = useAuth()
    const router = useRouter()
    const [currentTab, setCurrentTab] = useState('Global Feed')
    const [allTab, setAllTab] = useState(['Global Feed', 'Your Feed'])
    const [currentPage, setCurrentPage] = useState(1)
    const [articles, setArticles] = useState<{
        article: any[]
        totalPage: number
    }>({ article: [], totalPage: 0 })

    const handleTabClick = (tab: string) => {
        setCurrentTab(tab)
    }
    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value)
    }
    useEffect(() => {
        const fetchedAllArticles = async () => {
            const fetchedArticle = await getAllArticles(currentPage)
            setArticles(fetchedArticle.data)
        }
        fetchedAllArticles()
        if (!loading && !user) {
            router.push('/')
        }
    }, [currentPage, user, loading, router])

    if (loading) return <p>Loading...</p>
    return (
        <div className="">
            {!user && <Banner />}
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
                        {articles?.article?.map((article: any) => (
                            <Article
                                key={article.articleid}
                                author={article.user.username}
                                title={article.title}
                                description={article.description}
                            />
                        ))}
                    </div>
                    <Pagination
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '40px 0 0 0',
                        }}
                        count={articles.totalPage}
                        page={currentPage}
                        variant="outlined"
                        shape="rounded"
                        size="large"
                        color="primary"
                        onChange={handlePageChange}
                    />
                </div>
                <div className="w-1/4">
                    <TagList />
                </div>
            </div>
        </div>
    )
}
