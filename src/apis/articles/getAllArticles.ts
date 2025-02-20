import API from '@/lib/axiosInstance'
const getAllArticles = async (currentPage: number) => {
    const res = await API.get(`/articles?page=${currentPage}`)
    return res
}

export default getAllArticles
