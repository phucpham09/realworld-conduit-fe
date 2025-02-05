import axios from 'axios'
const getAllArticles = async () => {
    const res = await axios.get('http://localhost:3001/articles')
    return res
}

export default getAllArticles
