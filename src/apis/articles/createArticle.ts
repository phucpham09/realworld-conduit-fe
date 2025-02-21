import API from '@/lib/axiosInstance'
const createArticle = async (
    title: string,
    slug: string,
    description: string,
    body: string,
    tags: string[]
) => {
    const res = await API.post(`/articles`, {
        title: title,
        slug: slug,
        description: description,
        body: body,
        tagName: tags,
    })
    return res
}

export default createArticle
