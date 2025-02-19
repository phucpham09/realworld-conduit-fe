import Comment from '@/components/Comment'
import Favorite from '@/components/Favorite'

export default async function ArticleDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    return (
        <>
            <div className="flex px-20 gap-x-10 my-10">
                {/* Left*/}
                <div className="w-3/4">
                    <div className="flex justify-between">
                        {/* Title*/}
                        <h1 className="text-3xl font-semibold">Title</h1>
                        {/* Favorite*/}
                        <Favorite />
                    </div>

                    {/* Description*/}
                    <h3>THis is description</h3>

                    {/* Tag*/}
                    <div className="flex place-self-end gap-x-2">
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </div>

                    {/* Horizontal line*/}
                    <div className="border my-6"></div>

                    {/* Body*/}
                    <div>
                        <h2>Content</h2>
                    </div>

                    {/* Comment*/}
                    <Comment />
                </div>

                {/* Right*/}
                <div className="w-1/4">Author Information</div>
            </div>
        </>
    )
}
