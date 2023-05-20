import { useLoaderData } from 'react-router-dom';
import './AllToys.css'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';


const AllToys = () => {

   const allToysData= useLoaderData();

   const [data,setData]=useState(allToysData)

   console.log(data)

  

    const searchToyHandler=(e)=>{

        event.preventDefault();

        const toyName= e.target.toyName.value;

        console.log(toyName)



        fetch(`http://localhost:5000/findByToyName?name=${toyName}`)
        .then(res=> res.json())
         .then(res=>{

           setData(res)

          e.target.reset()
          console.log(res)
         })
         .catch(error=>console.log(error))
    }

    return (
        <div style={{marginTop:'100px',marginBottom:'150px'}}>


              <form onSubmit={searchToyHandler} className='d-flex w-25 mx-auto my-5 pt-5'>
              <input className="form-control me-2" name='toyName' type="search" placeholder="Toy Name" aria-label="Search" required/>
               <button className="btn btn-outline-dark" type="submit">Search</button>
              </form>
            

                <Table className=' table-container' striped bordered hover>
      <thead>
        <tr className='table-tr'>
          
          <th className='table-th'>Seller Name</th>
          <th className='table-th'>Toy Name</th>
          <th className='table-th'>Sub-category</th>
          <th className='table-th'>price</th>
          <th className='table-th'>Available Quantity</th>
         
        </tr>
      </thead>
      <tbody>
      

        {
          data?.map((d,i)=>(


            <tr className='table-tr ' key={d?._id}>

            <td className='table-td '>{i+1}</td>

            <td className='table-td '>{d?.toyName}</td>

            <td className='table-td '>{d?.subCategory}</td>

            <td className='table-td '>{d?.price}</td>

            <td className='table-td '>{d?.quantity}</td>
           
          </tr>

          ))
        }
       
      </tbody>
    </Table>
        </div>
    );
};

export default AllToys;