import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Favorite = () => {
    return (
        <div className="flex justify-center items-center border-4 border-blue-700 p-3 rounded-lg gap-x-1 cursor-pointer">
            <p className="text-xl">10</p>
            <FavoriteIcon color="primary" />
        </div>
    )
}

export default Favorite
