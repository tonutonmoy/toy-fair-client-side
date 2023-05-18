import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategory from '../HomeCategory/HomeCategory';
import HomeGallery from '../HomeGallery/HomeGallery';
import HomePartners from '../HomePartners/HomePartners';
import './Home.css'

const Home = () => {
    return (
        <div>
           
            <HomeBanner></HomeBanner>

            <HomeGallery></HomeGallery>

            <HomeCategory></HomeCategory>

            <HomePartners></HomePartners>
        </div>
    );
};

export default Home;