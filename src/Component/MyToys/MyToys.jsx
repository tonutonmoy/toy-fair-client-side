import './MyToys.css'
import { RxUpdate} from 'react-icons/rx';
import {RiDeleteBin6Line } from 'react-icons/ri';
import { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useNavigate } from 'react-router-dom';

const MyToys = () => {

        const {user}=useContext(AuthProvider);

        const [myToysData,setMyToysData]=useState([]);

       
        const navigate=useNavigate();
    

       
        const url= `http://localhost:5000/myToys?email=${user?.email}`;

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


    return (


        <div style={{marginBottom:"150px",marginTop:'150px'}}>
            
           {
            myToysData?.map((data)=>(

                <div key={data._id} className="row my-toys-card-container ">
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
                 <button className="my-toys-delate-button" >Delete <RiDeleteBin6Line className='ms-2'/></button>
                 
                 </section>
                 </div>
            ))
           }



               

           
        </div>
    );
};

export default MyToys;