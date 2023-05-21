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
            
           {
            myToysData?.map((data)=>(

                <div key={data._id} className="row my-toys-card-container p-5">
                <section className="col-md-3">
                    <img className='my-toys-img' src={data.toyPhotoUrl} alt="" />
                </section>


                <section className="col-md-6 px-5">

                 
                   

                     <p className="my-toys-p"> <span className="my-toys-span">Name:  </span> {data.toyName}   </p>



                      <p className="my-toys-p"> <span className="my-toys-span">Sub-category:   </span> {data.subCategory} 

                      </p>
                      


                      <p className="my-toys-p"> <span className="my-toys-span">Seller name:  </span> {data.sellerName}   

                     </p>
                      



                      <p className="my-toys-p"> <span className="my-toys-span">Seller email: </span> {data.sellerEmail}  

                      </p>
                      
                      <p className="my-toys-p"> <span className="my-toys-span">price:  </span>  ${data.price}  </p>


                      
                      <div className="my-toys-p d-flex gap-1"> <span className="my-toys-span">Rating:  </span>  <Rating  style={{ maxWidth: 100 }}  value={ parseFloat(data?.rating)}  readonly />  </div>
                      
                      <p className="my-toys-p"> <span className="my-toys-span">Available quantity:  </span> 

                      {data?.quantity}    </p>



                      
                      <p className="my-toys-p"> <span className="my-toys-span">Details:  </span> {data?.description}   </p>

                     
                      


                     
                </section>


                <section className='col-md-3  my-toy-button-container '>

                 <button onClick={()=> updateButtonHandler(data._id)} className="my-toys-update-button" >Update <RxUpdate className='ms-2'/></button>


                 <button onClick={()=>deleteButtonHandler(data._id)}  className="my-toys-delate-button" >Delete <RiDeleteBin6Line className='ms-2'/></button>
                 
                 </section>
                 </div>
            ))
           }



               

           
        </div>
    );
};

export default MyToys;