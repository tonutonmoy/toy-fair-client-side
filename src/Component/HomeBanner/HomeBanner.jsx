import "./HomeBanner.css"
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';



import banner1 from '../../assets/banner/child-2936975_1280.jpg'
import banner2 from '../../assets/banner/cartoon-1376275_960_720.jpg'
import banner3 from '../../assets/banner/robot-432453_960_720.jpg'
import banner4 from '../../assets/banner/toys-2938508_960_720.jpg'

const HomeBanner = () => {
    return (
        
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
       
      >
        <SwiperSlide className="banner-slider-container">

       <div className="banner-div">
       </div>
       <img className="banner-slider-img" src={banner1} alt="" />

         <div className="banner-slider-title-container">
            <h2 className="banner-slider-h2"> <span className="banner-title-span">E</span>xperience the Ultimate online toy shopping brought to you by Toy.fair.</h2>
            <p className="banner-slider-p">Official Distributor of Mattel, Funskool, Winfun, Frank & Zephyr Toy Brands in  <span className="banner-p-span">Bangladesh</span></p>
            <button className="banner-slider-button">shop Now</button>
         
       </div>

        </SwiperSlide>


        <SwiperSlide>
        <img className="banner-slider-img" src={banner2} alt="" />
        </SwiperSlide>

        <SwiperSlide>  
            <img className="banner-slider-img" src={banner3} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className="banner-slider-img" src={banner4} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    );
};

export default HomeBanner;