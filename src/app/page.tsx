import Banner from '@/components/Banner'
import TagList from '@/components/TagList'

export default function Home() {
    return (
        <div className="">
            <Banner />
            <div className="flex px-20 my-10">
                <div className="w-3/4">left</div>
                <div className="w-1/4">
                    <TagList />
                </div>
            </div>
        </div>
    )
}
