import './MyToys.css'
import { RxUpdate} from 'react-icons/rx';
import {RiDeleteBin6Line } from 'react-icons/ri';
import { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import { Rating } from '@smastrom/react-rating'
import Swal from 'sweetalert2'

import '@smastrom/react-rating/style.css'
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Table from 'react-bootstrap/Table';



const MyToys = () => {

        const {user}=useContext(AuthProvider);

        const [myToysData,setMyToysData]=useState([]);

       
        const navigate=useNavigate();

        useTitle('My Toys')
    

       
        const url= `https://toy-fair-server-side.vercel.app/myToys?email=${user?.email}`;

        useEffect(()=>{
           

             
            fetch(url)
            .then(res=>res.json())
            .then(res=> {
                
                console.log(res)
                setMyToysData(res)
            
            })
            .catch(error=> console.log(error))
    

        },[url])

  
           const updateButtonHandler=(id)=>{

               console.log(id)

               navigate(`/updateToy/${id}`)
           }








           const deleteButtonHandler=(id)=>{



            
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
  
                
                fetch(`https://toy-fair-server-side.vercel.app/deleteAToy/${id}`,{
      
                method: "DELETE"
                
            
                })
                .then(res=> res.json())
                .then(res=>{
    
                    if(res.deletedCount > 0){
                      
                         Swal.fire(
                             'Deleted!',
                              'Your file has been deleted.',
                              'success'
                               )


                        const filterData= myToysData?.filter(f=> f._id !== id);
                        
                        setMyToysData(filterData)
                 
                    }
                    console.log(res)
    
    
                } )
                .catch(error=> console.log(error))
        
              
  
             
            }
          })
          

    
           };



          const highToLowButtonHandler=(text)=>{
           
            fetch(`https://toy-fair-server-side.vercel.app/sortByPrice?email=${user?.email}&text=${text}`)
            .then(res=> res.json())
            .then(res=>{

                setMyToysData(res)

                console.log(res)
            })

          } 


    return (


        <div style={{marginBottom:"150px",marginTop:'150px'}}>


            <div className='high-to-container'>
                <button onClick={()=>highToLowButtonHandler('high')} className='high-button'>High-Low</button>

                <button onClick={()=>highToLowButtonHandler('low')} className='low-button'>Low-High</button>
            </div>








             


            <Table className=' my-toys-table-container' striped bordered hover>
      <thead>
        <tr className='my-toys-table-tr'>
          
          <th className='my-toys-table-th'>Photo</th>
          <th className='my-toys-table-th'>Toy Name</th>
          <th className='my-toys-table-th'>Seller Name</th>
          <th className='my-toys-table-th'>Seller email</th>
          <th className='my-toys-table-th'>Sub-category</th>
          <th className='my-toys-table-th'>price</th>
          <th className='my-toys-table-th'>Rating</th>
          <th className='my-toys-table-th'>Available Quantity</th>
          <th className='my-toys-table-th'>Details</th>
         
        </tr>
      </thead>
      <tbody>
      

        {
          myToysData?.map((d,i)=>(


            <tr className='my-toys-table-td ' key={d?._id}>


            {/* photo  start*/}
            <td className='my-toys-table-td '>

                <img className='my-toys-img' src={d?.toyPhotoUrl} alt="" />
            </td>

            {/* photo end */}



            <td className='my-toys-table-td '>{d?.toyName}</td>

            <td className='my-toys-table-td '>{d?.sellerName}</td>

            <td className='my-toys-table-td '>{d?.sellerEmail}</td>

           



            <td className='my-toys-table-td '>{d?.subCategory}</td>



            <td className='my-toys-table-td '>{d?.price}</td>

            <td className='my-toys-table-td '>{d?.rating}</td>



            <td className='my-toys-table-td '>{d?.quantity}</td>

            <td className='my-toys-table-td '>{d?.description.slice(0,50)}see more...</td>



           {/* button start */}
            <td className='my-toys-table-td '>

            <section className=' my-toy-button-container '>

              <button onClick={()=> updateButtonHandler(d._id)} className="my-toys-update-button " >Update </button>
              
              
              <button onClick={()=>deleteButtonHandler(d._id)}  className="my-toys-delete-button  " >Delete  </button>
              
              </section>
              
            </td>
            {/* button end */}

           
          </tr>

          ))
        }
       
      </tbody>
    </Table>



  

           
        </div>
    );
};

export default MyToys;