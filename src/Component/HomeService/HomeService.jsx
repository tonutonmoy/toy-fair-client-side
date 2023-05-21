import './HomeService.css'
import {BsCart3 } from 'react-icons/bs';
import {BiDownload,BiPhoneCall } from 'react-icons/bi';
import {TbTruckDelivery } from 'react-icons/tb';

import Aos from 'aos';

import 'aos/dist/aos.css'
import { useEffect } from 'react'

const HomeService = () => {



    useEffect(()=>{

        Aos.init({duration: 2000})
    },[])


    return (
        <div style={{marginBottom:'150px'}}>
            <h2 className='Shop-by-category'>Our services</h2>


            <div  className=' row row-cols-md-2 w-75 mx-auto'>


               <section data-aos="fade-right" className='d-md-flex gap-5 services-section align-items-center'>
                <div className='services-img-container'>
                   
                    <BsCart3 className='services-img'/>
                </div>

                <div className='services-text-container mt-md-0 mt-5'>
                    <h3 className='services-h3'>FAST SHIPPING</h3>
                    <p className='services-p'>Fast Shipping</p>
                </div>
               </section>




               <section data-aos="fade-left" className='d-md-flex gap-5 services-section align-items-center'>
                <div className='services-img-container'>
                    
                    <BiDownload className='services-img'/>
                </div>

                <div className='services-text-container mt-md-0 mt-5'>
                    <h3 className='services-h3'>ONLINE PAYMENT</h3>
                    <p className='services-p'>Payment methods</p>
                </div>
               </section>





               <section data-aos="fade-right" className='d-md-flex gap-5 services-section align-items-center'>
                <div className='services-img-container'>
                    
                    <BiPhoneCall className='services-img'/>
                </div>

                <div className='services-text-container  mt-md-0 mt-5'>
                    <h3 className='services-h3'>24/7 SUPPORT</h3>
                    <p className='services-p'>Unlimited help desk</p>
                </div>
               </section>




               <section data-aos="fade-left" className='d-md-flex gap-5 services-section align-items-center '>
                <div className='services-img-container'>
                   
                    <TbTruckDelivery className='services-img'/>
                </div>

                <div className='services-text-container mt-md-0 mt-5'>
                    <h3 className='services-h3'>On time Delivery</h3>
                    <p className='services-p'>On time Delivery</p>
                </div>
               </section>


            </div>
        </div>
    );
};

export default HomeService;