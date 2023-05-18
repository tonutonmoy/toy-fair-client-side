import './Footer.css'
import {BsFacebook,BsInstagram } from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import logo from '../../assets/logo/1000_F_351310893_Bn4dxRZS4sQ7aJiqgk9guUyIDVrPQm3R.jpg'


const Footer = () => {
    return (
        <footer className='footer '>
            
          <div className='row row-cols-md-4 row-cols-2  container mx-auto my-5 '>

          <section>

                <h3 className='footer-h3 mb-4'>Toy.fair</h3>
                <img className='footer-logo' style={{width:'80px',height:'80px',borderRadius:"100%"}}  src={logo} alt="" />

            </section>


             <section>

                <h3 className='footer-h3'>Social media link</h3>

                <div className='d-flex gap-5 my-5'>
                <BsFacebook className='footer-link'/>
                <BsInstagram className='footer-link'/>
                <FaTwitter className='footer-link'/>
                </div>
             </section>


           <section>
               <h3 className='footer-h3'>Contact</h3>

                <div className='my-5'>
                     <p className='footer-p'>Email: www.toy.fair10@.com</p>
                     <p className='footer-p'>phone number: 0191212121</p>
                     <p className='footer-p'>phone number: 01734343456</p>
                     <p className='footer-p'>phone number: 01891212121</p>
                </div>
              
           </section>

           <section>

           <h3 className='footer-h3'>Address</h3>
        

            <div className='my-5'>
            <p className='footer-p'>Area: mirpur-2,rupnagar abashik</p>
          <p className='footer-p'>Road-number: 19 </p>
          <p className='footer-p'>Office: shongram tower 2nd floor</p>
            </div>
           </section>

          </div>

     <hr className='footer-hr' />

    <p className='footer-copy-right' >
    Copyright © 2023 toy.fair. Built with Docusaurus 
    </p>

        </footer>
    );
};

export default Footer;