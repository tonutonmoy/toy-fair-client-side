import { useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategory from '../HomeCategory/HomeCategory';
import HomeGallery from '../HomeGallery/HomeGallery';
import HomePartners from '../HomePartners/HomePartners';
import HomeService from '../HomeService/HomeService';
import './Home.css'



const Home = () => {

    useTitle('Home');


  

    return (

        
        <div>

           
            <HomeBanner></HomeBanner>

            <HomeGallery></HomeGallery>

            <HomeCategory></HomeCategory>

            <HomePartners></HomePartners>

            <HomeService></HomeService>
        </div>
    );
};

export default Home;