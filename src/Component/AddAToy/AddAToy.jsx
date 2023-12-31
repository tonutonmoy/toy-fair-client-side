import { useContext, useEffect } from 'react';
import './AddAToy.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { AuthProvider } from '../../Provider/Provider';
import useTitle from '../../hooks/useTitle';




const AddAToy = () => {

    const {user}=useContext(AuthProvider);

    useTitle('Add A Toy')

    const addAToyHandler=(e)=>{

        event.preventDefault();

        const toyPhotoUrl=e.target.toyPhotoUrl.value;
        const toyName=e.target.toyName.value;
        const sellerName=e.target.sellerName.value;
        
        const subCategory=e.target.subCategory.value;
        const price=e.target.price.value;
        const rating=e.target.rating.value;
        const quantity=e.target.quantity.value;
        const description=e.target.description.value;

        const sellerEmail=e.target.sellerEmail.value;



       const addAToyInfo={
            toyPhotoUrl,
            toyName,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            description
        }

        

         

        fetch(`https://toy-fair-server-side.vercel.app/addAToy`,{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
    
              body: JSON.stringify(addAToyInfo)
            })
            .then(res=>res.json())
            .then(res=> {
              
              if(res.insertedId){
    
                Swal.fire({
                  title: 'Success',
                  text: 'successfully done',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
    
    
                e.target.reset()
    
              }
             
            
            })
            .catch(error=>console.log(error))
        
       
      


    }



    return (
        <div>
            
            <Form onSubmit={addAToyHandler} style={{marginTop:"200px",marginBottom:"150px"}} className='w-75 mx-auto form-container'>

            <h2 style={{marginBottom:"150px"}} className='form-title'> Add your item!!!</h2>


          <div className='row row-cols-2'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-label'>Toy Photo URL</Form.Label>
        <Form.Control className='form-input' type="text" name='toyPhotoUrl' placeholder="toy URL" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-label'>Toy Name</Form.Label>
        <Form.Control className='form-input' type="text" name='toyName' placeholder="toy name" required />
      </Form.Group>
   
         </div>

          <div className='row row-cols-2'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-label'>Seller Name</Form.Label>
        <Form.Control className='form-input' type="text" name='sellerName' placeholder="sellerName" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-label'>Seller Email</Form.Label>
        <Form.Control className='form-input' defaultValue={user?.email} type="email" name='sellerEmail' placeholder="seller email" required />
      </Form.Group>
   
         </div>


          <div className='row row-cols-2'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-label'>Sub Category</Form.Label>
        <Form.Control className='form-input' type="text" name='subCategory' placeholder="sub Category" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-label'>Price</Form.Label>
        <Form.Control className='form-input' type="number" name='price' placeholder="price" required />
      </Form.Group>
   
         </div>

          <div className='row row-cols-2'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form-label'>Rating</Form.Label>
        <Form.Control className='form-input' type="number" name='rating' placeholder="rating" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form-label'>Available Quantity</Form.Label>
        <Form.Control className='form-input' type="number" name='quantity' placeholder="quantity" required />
      </Form.Group>

       
     
   
         </div>







         <div>
        <Form.Label className='form-label'>Description</Form.Label>
      
        
        <Form.Control
          as="textarea"
          placeholder="Detail description"
          style={{ height: '150px',width:"100%"}}
          name='description'

          
        />
         
        </div>


       <div className='text-center'>
           
           <Button className='form-button my-5 w-75 ' variant="primary" type="submit">
               Add
             </Button>
       </div>
    </Form>

        </div>
    );
};

export default AddAToy;