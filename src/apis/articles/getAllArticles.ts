import axios from 'axios'
const getAllArticles = async (currentPage: number) => {
    const res = await axios.get(
        `http://localhost:3001/articles?page=${currentPage}`
    )
    return res
}

export default getAllArticles
