import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {

    const data= useLoaderData();

 
    useTitle('Update')

    const UpdateHandler=(e)=>{

        event.preventDefault();

        const price=e.target.price.value;
        const quantity=e.target.quantity.value;
        const description=e.target.description.value;


        const updateInfo={
            price,
            quantity,
            description
        }

        console.log(updateInfo)



        fetch(`https://toy-fair-server-side.vercel.app/updateSingleToy/${data?._id}`,{


        method: "PUT",
  
        headers: {
              
          'content-type': "application/json"
        },
  
  
        body: JSON.stringify(updateInfo)
  
        
      })
      .then(res=> res.json())
      .then(res=>{


        if(res.modifiedCount > 0){

            Swal.fire({
                title: 'Success',
                text: 'update successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })

              e.target.reset();
             

        }

        console.log(res)
      })
      .catch(error=> console.log(error))
  
      
       
    }

    return (
        <div>

         
          

         <Form onSubmit={UpdateHandler} style={{marginTop:"200px",marginBottom:"150px"}} className='w-75 mx-auto form-container'>
         
         
         
        
         <h2 style={{marginBottom:"150px"}} className='form-title'> Update your item!!!</h2>
         
         
         <div className='row row-cols-2'>
         
         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label className='form-label'>Price</Form.Label>
         <Form.Control className='form-input' defaultValue={data?.price} type="number" name='price' placeholder="price" required />
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label className='form-label'>Available Quantity</Form.Label>
         <Form.Control className='form-input' type="number" name='quantity' defaultValue={data?.quantity} placeholder="quantity" required />
         </Form.Group>
         
         
        

</div>



     <div>
         <Form.Label  className='form-label'>Description</Form.Label>
         
         
         <Form.Control
         as="textarea"
         placeholder="Detail description"
         style={{ height: '150px',width:"100%"}}

         name='description'

         defaultValue={data?.description}
         
         />
         
         </div>






<div className='text-center'>
 
 <Button className='form-button my-5 w-75 ' variant="primary" type="submit">
     Update
   </Button>
</div>
</Form>
        </div>
    );
};

export default UpdateToy;