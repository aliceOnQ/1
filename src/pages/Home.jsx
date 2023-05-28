import ContentList from "../components/ContentList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async"
import artists from "../json/album.json"
import video from "../json/video.json"
import { theme } from 'antd';

function Home() {
    const {
        token: { colorBg},
    } = theme.useToken();
    return (
        <div className="mainLayout">
            <Helmet>
                <title>SMTOWN&SHOP</title>
                <style>{`
            body { 
              background-color: ${colorBg};
            }
        `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <ContentList  artists={artists} video={video} />
            </div>
            <Footer className="layoutFooter" />
        </div>

    )
}

export default Home;