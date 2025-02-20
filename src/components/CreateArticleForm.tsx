import React from 'react'

const CreateArticleForm = () => {
    return (
        <div className="flex items-center justify-center">
            <h1>Create New Article</h1>
            <form className="flex flex-col gap-y-4">
                <div>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Body</label>
                    <textarea></textarea>
                </div>
            </form>
        </div>
    )
}

export default CreateArticleForm
