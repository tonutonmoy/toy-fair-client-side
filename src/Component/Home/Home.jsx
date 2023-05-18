import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategory from '../HomeCategory/HomeCategory';
import HomeGallery from '../HomeGallery/HomeGallery';
import './Home.css'

const Home = () => {
    return (
        <div>
           
            <HomeBanner></HomeBanner>

            <HomeGallery></HomeGallery>

            <HomeCategory></HomeCategory>
        </div>
    );
};

export default Home;