import Banner from "../Banner";
import News from "../News";
import Video from "../Video";
import Album from "../Album";


export default function ContentList({artists,video}) {
    return (
        <div>
            <Banner/>
            <News />
            <Video video={video}/>
            <Album images={artists}/>
        </div>
    )
}
