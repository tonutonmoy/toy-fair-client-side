import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

const ViewDetails = () => {

    const {id}= useParams();

    const [data,setData]=useState([]);

    useEffect(()=>{


        fetch(`http://localhost:5000/viewDetails/${id}`)
        .then(res=>res.json())
        .then(res=> {
         
            setData(res)
            
        })
        .catch(error=> console.log(error))


    },[])


    console.log(data)

    return (
        <div style={{display:'flex',justifyContent:"center"}}>
           


           <Card   className='tab-card px-3 ' style={{width:'50%',marginBottom:"150px",marginTop:"150px",}} >
           <Card.Img  style={{width:"100%",height:"500px" }} variant="top" src={data?.toyPhotoUrl}/>
           <Card.Body>
           <Card.Title>Name: {data?.toyName}</Card.Title>


        
          
           <Card.Text className='my-3 tab-card-span'>
           <span style={{fontWeight:'700'}}>Price: </span> ${data?.price}
           </Card.Text>
           
           <Card.Text className='my-3 tab-card-span'>
           <span style={{fontWeight:'700'}} >SellerName: </span> {data?.sellerName}
           </Card.Text>

           <Card.Text className='my-3 tab-card-span'>
           <span style={{fontWeight:'700'}} >SellerEmail: </span> {data?.sellerEmail}
           </Card.Text>
           
           <Card.Text className='my-3 tab-card-span'>
          <span style={{fontWeight:'700'}}>Quantity:</span>  {data?.quantity}
           </Card.Text>
           
            <div className='tab-card-span d-flex gap-1 my-3  '> <span style={{fontWeight:'700'}}>Rating:</span> <Rating  style={{ maxWidth: 100 }}  
            value={ parseFloat(data?.rating)}  readonly />
           
           </div>

           <Card.Text className='my-3 tab-card-span'>
           <span style={{fontWeight:'700'}} >Description: </span>{data?.description}
           </Card.Text>
       
           </Card.Body>
           </Card>

        </div>
    );
};

export default ViewDetails;