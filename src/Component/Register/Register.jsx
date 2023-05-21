import { useContext } from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const Register = () => {

  const {createAccount}=useContext(AuthProvider);


  useTitle('Register')

  const registerHandler=(e)=>{
  
    event.preventDefault();
  

    const name= e.target.name.value;
    const email= e.target.email.value;
    const password= e.target.password.value;
    const photoUrl= e.target.photoUrl.value;

    console.log(name,email,password,photoUrl)


    createAccount(email,password)
    .then(res=>{

      


        updateNameAndPhoto(res.user,name,photoUrl);

        e.target.reset();
    })
    .catch(error=>{
      console.log(error)
    })
  }

   
  const updateNameAndPhoto=(currentUser,name,photoURL)=>{

    updateProfile(currentUser,{
      displayName: name, photoURL: photoURL
    })
    .then(()=>{

      toast.success("Registration done")
      

    })
    .catch(error=> console.log(error))
  }



    
    return (
        <div style={{marginTop:"200px",marginBottom:"150px"}}>
          
         

           <Form onSubmit={registerHandler} className='w-50 mx-auto form-container'>

           <h2 className='form-title'>Register Now!!!</h2>
           

      <Form.Group className="mb-5" controlId="formBasicName">
        <Form.Label className='form-label'>Name</Form.Label>
        <Form.Control className='form-input' type="text" name='name' placeholder="Enter Name" required />
       
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Label className='form-label'>Email address</Form.Label>
        <Form.Control className='form-input' type="email" name='email' placeholder="Enter email" required />
       
      </Form.Group>

      

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label className='form-label'>Password</Form.Label>
        <Form.Control className='form-input' name='password' type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPhoto">
        <Form.Label className='form-label'>Photo URL</Form.Label>
        <Form.Control className='form-input' name='photoUrl' type="text" placeholder="Enter Photo Url" />
       
      </Form.Group>

      <p style={{fontWeight:"500",textAlign:'center'}}>All ready an account please <Link style={{textDecoration:"none",color:"orange"}} to='/login'>Login</Link> </p>
    
      <Button  className='form-button my-4' variant="primary" type="submit">
       Register
      </Button>
    </Form>
    <ToastContainer />

        </div>
    );
};

export default Register;