import './NavigationBar.css'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo/1000_F_351310893_Bn4dxRZS4sQ7aJiqgk9guUyIDVrPQm3R.jpg'
import ActiveLink from '../../ActiveLink/ActiveLink';
import { useContext } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const NavigationBar = () => {

    const {logOut,user}=useContext(AuthProvider);


    console.log(user)
  
    const logOutHandler=()=>{

       logOut()
       .then(()=>{

        toast.success('Log Out done')

       })
       .catch(error=>console.log(error))
    }

    return (
        <Navbar className='py-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand className='me-3 pe-3 me-md-5 pe-md-5 nav-title ' href="#home">Toy.fair</Navbar.Brand>
          <div className='me-md-5 pe-md-5 me-0 pe-0 '>

            <img className='nav-img' src={logo} alt="" style={{width:'60px',height:'60px',borderRadius:"100%"}} />



          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " className='justify-content-center gap-5' >
           


        <div className='d-md-flex justify-content-around gap-5 align-items-center' >


                <div className=' my-md-4 mt-5'>
                    <ActiveLink to='/'>Home</ActiveLink>
                </div>

                <div className=' my-md-4 mt-5'>
                    <ActiveLink to='/allToys'>All Toys</ActiveLink>
                </div>

                <div className=' my-md-4 mt-5'>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </div>

               

               {


                  user?  
                    
                    
                    <div className='d-md-flex justify-content-around gap-5 align-items-center '>
                    
                    <div className=' my-md-4 mt-5'>
                    <ActiveLink to='/addAToy'>Add A Toy</ActiveLink>
                    </div>
                    
                    <div className=' my-md-4 mt-5'>
                    <ActiveLink to='/myToys'>My  Toys</ActiveLink>
                    </div>
                    
                    <div  className=' my-md-4 mt-5'>
                    <img className='nav-img' src={user?.photoURL} alt="" style={{width:'60px',height:'60px',borderRadius:"100%"}}
                     title={user?.displayName} />
                    </div>
                    
                    <div  className=' my-md-4 mt-5'>
                    <button className='log-out-button btn btn-primary' onClick={logOutHandler}>LogOut</button>
                    </div>
                    
                    </div>    
                    
                    

                  :  <div className=' my-md-4 mt-5'>
                    <ActiveLink to='/login'>Login</ActiveLink>
                    </div>
                    

               }


            <ToastContainer/>
        </div>
             
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;