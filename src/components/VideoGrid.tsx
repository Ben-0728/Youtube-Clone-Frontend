import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "Making youtube clone in 30 days | Code with me",
    image: "photo.png",
    thumb: "photo.png",
    author: "Ben",
    views: "100k",
    timestamp: "2 hours ago"
},{
    title: "Making youtube clone in 30 days | Code with me",
    image: "photo.png",
    thumb: "photo.png",
    author: "Ben",
    views: "100k",
    timestamp: "2 hours ago"
},{
    title: "Making youtube clone in 30 days | Code with me",
    image: "photo.png",
    thumb: "photo.png",
    author: "Ben",
    views: "100k",
    timestamp: "2 hours ago"
},{
    title: "Making youtube clone in 30 days | Code with me",
    image: "photo.png",
    thumb: "photo.png",
    author: "Ben",
    views: "100k",
    timestamp: "2 hours ago"
},{
    title: "Making youtube clone in 30 days | Code with me",
    image: "photo.png",
    thumb: "photo.png",
    author: "Ben",
    views: "100k",
    timestamp: "2 hours ago"
}]

export function VideoGrid(){
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {VIDEOS.map(video => <VideoCard {...video} />)}
    </div>
}