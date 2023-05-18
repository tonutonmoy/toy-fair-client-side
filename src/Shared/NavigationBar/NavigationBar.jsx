import './NavigationBar.css'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo/1000_F_351310893_Bn4dxRZS4sQ7aJiqgk9guUyIDVrPQm3R.jpg'
import ActiveLink from '../../ActiveLink/ActiveLink';


const NavigationBar = () => {
    return (
        <Navbar className='py-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand className='me-3 pe-3 me-md-5 pe-md-5 nav-title ' href="#home">Toy.fair</Navbar.Brand>
          <div className='me-md-5 pe-md-5 me-0 pe-0 '>

            <img src={logo} alt="" style={{width:'60px',height:'60px',borderRadius:"100%"}} />



          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " className='justify-content-center gap-5' >
           


        <div className='d-md-flex justify-content-around gap-5 align-items-center' >


                <div>
                    <ActiveLink to='/'>Home</ActiveLink>
                </div>

                <div>
                    <ActiveLink to='/allToys'>All Toys</ActiveLink>
                </div>

                <div>
                    <ActiveLink to='/login'>Login</ActiveLink>
                </div>



            <div className='d-md-flex justify-content-around gap-5 align-items-center '>



                  
                <div>
                    <ActiveLink to='/addAToy'>Add A Toy</ActiveLink>
                </div>

                <div>
                    <ActiveLink to='/addAToys'>My  Toys</ActiveLink>
                </div>

                <div >
                    <img src={logo} alt="" style={{width:'60px',height:'60px',borderRadius:"100%"}}/>
                </div>

                <div >
                    <button>LogOut</button>
                </div>

            </div>

        </div>
             
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;