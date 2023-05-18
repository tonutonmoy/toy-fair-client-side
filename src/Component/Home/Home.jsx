import HomeBanner from '../HomeBanner/HomeBanner';
import HomeGallery from '../HomeGallery/HomeGallery';
import './Home.css'

const Home = () => {
    return (
        <div>
           
            <HomeBanner></HomeBanner>

            <HomeGallery></HomeGallery>
        </div>
    );
};

export default Home;