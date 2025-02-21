import API from '@/lib/axiosInstance'

const createComment = async (content: string, articleId: number) => {
    try {
        const res = await API.post(`/comments`, {
            content: content,
            articleId: articleId,
        })
    } catch (error) {}
}

export default createComment
