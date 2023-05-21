import { useContext } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';


const Login = () => {

    const {login,googleLogIn}=useContext(AuthProvider);


    useTitle('Login')

    const location=useLocation();

    const navigate=useNavigate();


    const from = location?.state?.from?.pathname ||'/' ;


    const loginHandler=(e)=>{

        event.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;

      


        login(email,password)
        .then(res=>{

            toast.success("Login done")

            navigate(from,{replace:true})

            e.target.reset();
        })
        .catch(error=> console.log(error))

    }


    const googleHandler=()=>{


        googleLogIn()
        .then(res=>{

           if (res.user.email){

            toast.success("google singIn done")
            navigate(from,{replace:true})
           }
        })
        .catch(error=>console.log(error))


    }
    
    return (
        <div style={{marginTop:"200px",marginBottom:"150px"}}>
          
         

        <Form onSubmit={loginHandler} className='w-50 mx-auto form-container'>

        <h2 className='form-title'>Login Now!!!</h2>
        

   <Form.Group className="mb-5" controlId="formBasicEmail">
     <Form.Label className='form-label'>Email address</Form.Label>
     <Form.Control className='form-input' type="email" name='email' placeholder="Enter email" required />
    
   </Form.Group>

   

   <Form.Group className="mb-5" controlId="formBasicPassword">
     <Form.Label className='form-label'>Password</Form.Label>
     <Form.Control className='form-input' name='password' type="password" placeholder="Password" />
   </Form.Group>

     <p style={{fontWeight:"500",textAlign:'center'}}>First time please <Link style={{textDecoration:"none",color:"orange"}} to='/register'>Register!</Link> </p>
 
   <Button className='form-button mt-4' variant="primary" type="submit">
    login
   </Button>

   </Form>

   <div className='row row-cols-3 align-items-center my-5 w-25 mx-auto mt-5 pt-5'>

    <hr className='hr' />
    
    <p className='or'>or</p>

    <hr className='hr' />

   </div>


   <div className='w-75 mx-auto text-center'>
        
      <button onClick={googleHandler} className='form-google w-50 '>
      <FcGoogle style={{fontSize:"50px"}}></FcGoogle>   
      </button>  
   </div>


 <ToastContainer />
    

     </div>
    );
};

export default Login;