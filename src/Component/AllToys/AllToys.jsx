import {  Link, useLoaderData } from 'react-router-dom';
import './AllToys.css'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';


const AllToys = () => {

   const allToysData= useLoaderData();

   const [data,setData]=useState(allToysData)

   useTitle('All Toys')

   


  

    const searchToyHandler=(e)=>{

        event.preventDefault();

        const toyName= e.target.toyName.value;

        console.log(toyName)



        fetch(`https://toy-fair-server-side.vercel.app/findByToyName?name=${toyName}`)
        .then(res=> res.json())
         .then(res=>{

           setData(res)

          e.target.reset()
          console.log(res)
         })
         .catch(error=>console.log(error))
    };


 

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

            <td className='table-td '>{d?.sellerName}</td>

            <td className='table-td '>{d?.toyName}</td>

            <td className='table-td '>{d?.subCategory}</td>

            <td className='table-td '>{d?.price}</td>

            <td className='table-td '>{d?.quantity}</td>

            <td className='table-td '>

            <Link className='tab-card-button p-2 d-block text-center rounded' to={`/viewDetails/${d?._id}`}
          style={{textDecoration:'none',color:"white"}}>View Details</Link>
            </td>
           
          </tr>

          ))
        }
       
      </tbody>
    </Table>
        </div>
    );
};

export default AllToys;