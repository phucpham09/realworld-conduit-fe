'use client'
import getAllArticles from '@/apis/articles/getAllArticles'
import Article from '@/components/Article'
import Banner from '@/components/Banner'
import TagList from '@/components/PopularTags'
import { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import getAllTags from '@/apis/tags/getAllTags'
import PopularTags from '@/components/PopularTags'
export default function Home() {
    const { user, loading, logout } = useAuth()
    const router = useRouter()
    const [currentTab, setCurrentTab] = useState('Global Feed')
    const [allTab, setAllTab] = useState(['Global Feed', 'Your Feed'])
    const [currentPage, setCurrentPage] = useState(1)
    const [tagList, setTagList] = useState<string[]>([])
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
    const onClickArticleDetail = (article: any) => {
        localStorage.setItem('selectedArticle', JSON.stringify(article))
        router.push(`/article/${article.slug}`)
    }
    useEffect(() => {
        const fetchedAllTag = async () => {
            const fetchedTag = await getAllTags()
            setTagList(fetchedTag.data)
        }
        fetchedAllTag()
        const fetchedAllArticles = async () => {
            const fetchedArticle = await getAllArticles(currentPage)
            setArticles(fetchedArticle.data)
        }
        fetchedAllArticles()
        if (!loading && !user) {
            setAllTab(['Global Feed'])
            setCurrentTab('Global Feed')
            router.push('/')
        }
    }, [currentPage, user, loading, router])

    if (loading) return <p>Loading...</p>
    return (
        <div className="">
            {!user && <Banner />}
            <div className="sm:flex sm:px-20 sm:my-10 sm:gap-x-10">
                <div className="bg-gray-200 p-4 rounded-md sm:hidden">
                    <p className="text-xl mb-3">Popular Tags</p>
                    <PopularTags tags={tagList} />
                </div>
                <div className="sm:w-3/4 max-sm:px-4">
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
                                slug={article.slug}
                                title={article.title}
                                description={article.description}
                                tags={article.tags}
                                imageUrl={
                                    article.user?.imageUrl ||
                                    'https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png'
                                }
                                viewArticleDetail={() =>
                                    onClickArticleDetail(article)
                                }
                            />
                        ))}
                    </div>
                    <Pagination
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '40px 0 10px 0',
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
                <div className="w-1/4 max-sm:hidden">
                    <div className="bg-gray-200 p-4 rounded-md">
                        <p className="text-xl mb-3">Popular Tags</p>
                        <PopularTags tags={tagList} />
                    </div>
                </div>
            </div>
        </div>
    )
}
