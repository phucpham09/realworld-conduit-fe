import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Favorite = () => {
    return (
        <div className="flex justify-center items-center border-4 border-blue-700 p-2 rounded-lg gap-x-1 cursor-pointer text-blue-700 hover:bg-blue-700 hover:text-white">
            <p className="text-xl font-medium">10</p>
            <FavoriteIcon />
        </div>
    )
}

export default Favorite
