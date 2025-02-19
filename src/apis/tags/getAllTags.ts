import API from '@/lib/axiosInstance'

const getAllTags = async () => {
    try {
        const response = await API.get('/tags')
        return response
    } catch (error) {
        console.error('Error fetching tags', error)
        throw new Error('Error fetching tags')
    }
}

export default getAllTags
