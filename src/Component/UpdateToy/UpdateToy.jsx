import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateToy = () => {


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
    }

    return (
        <div>

         
          

         <Form onSubmit={UpdateHandler} style={{marginTop:"200px",marginBottom:"150px"}} className='w-75 mx-auto form-container'>
         
         
         
        
         <h2 style={{marginBottom:"150px"}} className='form-title'> Update your item!!!</h2>
         
         
         <div className='row row-cols-2'>
         
         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label className='form-label'>Price</Form.Label>
         <Form.Control className='form-input' type="number" name='price' placeholder="price" required />
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label className='form-label'>Available Quantity</Form.Label>
         <Form.Control className='form-input' type="number" name='quantity' placeholder="quantity" required />
         </Form.Group>
         
         
         <div>
         <Form.Label className='form-label'>Description</Form.Label>
         
         
         <Form.Control
         as="textarea"
         placeholder="Detail description"
         style={{ height: '150px',width:"950px"}}

         name='description'
         
         />
         
         </div>

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