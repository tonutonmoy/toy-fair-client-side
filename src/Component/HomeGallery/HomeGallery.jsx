import './HomeGallery.css'

import gallery1 from '../../assets/gallery/boogie-car.gif'
import gallery2 from '../../assets/gallery/boy-playing-toy-cars-kid-toys-child-car-little-young-colorful-educational-vehicle-transport-driving-to-rainbow-parking-155148567.jpg'
import gallery3 from '../../assets/gallery/child-6943902_960_720.jpg'
import gallery4 from '../../assets/gallery/girl-hand-playing-red-toy-car-outdoor-floor-girl-hand-playing-red-toy-car-outdoor-floor-close-up-still-180990687.jpg'
import gallery5 from '../../assets/gallery/pexels-photo-11675507.jpeg'
import gallery6 from '../../assets/gallery/pexels-photo-5434079.jpeg'
import gallery7 from '../../assets/gallery/pexels-photo-8504400.jpeg'
import gallery8 from '../../assets/gallery/What-is-the-purpose-of-a-toy-car.jpg'
import gallery9 from '../../assets/gallery/What_is_the_purpose_of_a_toy_car_-_1.jpg'


const HomeGallery = () => {
    return (
        <div style={{marginTop:'100px'}}>

             <h2 className='gallery-title'>Gallery of Toys</h2>

        <div className='row row-cols-md-5  gallery-container my-5  w-75 gap-3 mx-auto' >
            
            <div className="home-gallery-container"><img src={gallery1} alt="" className="home-gallery-img" /></div>

            <div className="home-gallery-container"><img src={gallery2} alt="" className="home-gallery-img" /></div>

            <div className="home-gallery-container"><img src={gallery3} alt="" className="home-gallery-img" /></div>

            <div className="home-gallery-container"><img src={gallery4} alt="" className="home-gallery-img" /></div>

            <div className="home-gallery-container"><img src={gallery5} alt="" className="home-gallery-img" /></div>

            <div className="home-gallery-container"><img src={gallery6} alt="" className="home-gallery-img" /></div>

            <div className="home-gallery-container"><img src={gallery7} alt="" className="home-gallery-img" /></div>

            <div className="home-gallery-container"><img src={gallery8} alt="" className="home-gallery-img" /></div>

            <div className="home-gallery-container"><img src={gallery9} alt="" className="home-gallery-img" /></div>

          
        </div>

      

      </div>
    );
};

export default HomeGallery;