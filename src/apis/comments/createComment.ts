import API from '@/lib/axiosInstance'

const createComment = async (content: string, articleId: number) => {
    try {
        const res = await API.post(`/comments`, {
            content: content,
            articleId: articleId,
        })
        return res.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default createComment
