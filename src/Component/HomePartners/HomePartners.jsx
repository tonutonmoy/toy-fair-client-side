import './HomePartners.css'
import partners1 from '../../assets/partners/6102f47673c93700042f87e7.png'
import partners2 from '../../assets/partners/Evaly-logo-01.jpg'
import partners3 from '../../assets/partners/shwapno-to-sell-potatoes-at-tk30-per-kg-1603177033315.jpg'
import partners4 from '../../assets/partners/107840887_634876424050632_5417712448806927608_n.jpg'

const HomePartners = () => {
    return (
        <div className='my-5'>
           <h2 className='Shop-by-category'>Our online partners</h2>

           <div className='row row-cols-md-4 container mx-auto text-center'>

            <div className='home-partners-img-container'>
                <img className='home-partners-img' src={partners1} alt="" />
            </div>
            <div className='home-partners-img-container'>
                <img className='home-partners-img' src={partners2} alt="" />
            </div>
            <div className='home-partners-img-container'>
                <img className='home-partners-img' src={partners3} alt="" />
            </div>
            <div className='home-partners-img-container'>
                <img className='home-partners-img' src={partners4} alt="" />
            </div>

           </div>
        </div>
    );
};

export default HomePartners;