import './HomeCategory.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const HomeCategory = () => {

  const [electricCar ,setElectricCar]=useState([])
  const [remoteCar,setRemoteCar]=useState([])
  const [manualCar,setManualCar]=useState([])

  useEffect(()=>{


     fetch('toy.json')
     .then(res=>res.json())
     .then(res=> {

       if(res){

        const electricCarFilter=  res.filter(f=> f.subCategory === 'electric car')
        const remoteCarFilter=  res.filter(f=> f.subCategory === 'remote car')
        const manualCarFilter=  res.filter(f=> f.subCategory === 'manual car')

        
       setElectricCar(electricCarFilter);

       setRemoteCar(remoteCarFilter);

       setManualCar(manualCarFilter);
       }

     })
     .catch(error=> console.log(error))


  },[]);



 

  console.log(electricCar)

    return (

      <div>
         <h2 className='Shop-by-category'>Shop by category</h2>
     
        

        <div className='tab-main-container'>




        <Tabs>
    <TabList>
      <Tab ><span className='tab-sub-category'>Electric  Car</span></Tab>

      <Tab ><span className='tab-sub-category'>Remote Car</span></Tab>

      <Tab ><span className='tab-sub-category'>Manual Car</span></Tab>

    </TabList>



  {/* Manual Car start */}
    <TabPanel>
     
        <div className=' row row-cols-md-3 p-md-5 p-0 my-5  '>

        
     
        
        
        
       {
        electricCar?.map((car,i)=> (

    
        <div className='my-5' key={i}>



      <Card   className='tab-card  ' style={{width:'18rem'}} >
          <Card.Img className='tap-card-img' variant="top" src={car?.toyPhotoUrl}/>
          <Card.Body>
          <Card.Title>Name: {car?.toyName}</Card.Title>
          <Card.Text className='my-3'>
          <span className='tab-card-span'>Price: ${car?.price}</span>
          </Card.Text>
          
           <div className='tab-card-span d-flex gap-1 my-3  '>Rating: <Rating  style={{ maxWidth: 100 }}  value={ 5}  readonly />
          
          </div>
          <Button className='tab-card-button' variant="primary">View Details</Button>
          </Card.Body>
          </Card>
          
        </div>
        )
        
       )}
      



         </div> 
    </TabPanel>
    {/* Manual Car end */}






  {/* Remote Car start */}
    <TabPanel>
      
    <div className=' row row-cols-md-3 p-md-5 p-0 my-5  '>

        
     
        
        
        
        {
         remoteCar?.map((car,i)=> (
        
        
         <div className='my-5' key={i}>
        
        
        
        <Card   className='tab-card  ' style={{width:'18rem'}} >
           <Card.Img className='tap-card-img' variant="top" src={car?.toyPhotoUrl}/>
           <Card.Body>
           <Card.Title>Name: {car?.toyName}</Card.Title>
           <Card.Text className='my-3'>
           <span className='tab-card-span'>Price: ${car?.price}</span>
           </Card.Text>
           
            <div className='tab-card-span d-flex gap-1 my-3  '>Rating: <Rating  style={{ maxWidth: 100 }}  value={ 5}  readonly />
           
           </div>
           <Button className='tab-card-button' variant="primary">View Details</Button>
           </Card.Body>
           </Card>
           
         </div>
      )
 
     )}




      </div> 
        </TabPanel>
         {/*Remote Car end  */}
    
    
    
    
    
    
    
        {/* Manual Car start */}
        <TabPanel>
          
        <div className=' row row-cols-md-3 p-md-5 p-0 my-5  '>

        
     
        
        
        
        {
         manualCar?.map((car,i)=> (
        
        
         <div className='my-5' key={i}>
        
        
        
        <Card   className='tab-card  '  >
           <Card.Img className='tap-card-img' variant="top" src={car?.toyPhotoUrl}/>
           <Card.Body>
           <Card.Title>Name: {car?.toyName}</Card.Title>
           <Card.Text className='my-3'>
           <span className='tab-card-span'>Price: ${car?.price}</span>
           </Card.Text>
           
            <div className='tab-card-span d-flex gap-1 my-3  '>Rating: <Rating  style={{ maxWidth: 100 }}  value={ 5}  readonly />
           
           </div>
           <Button className='tab-card-button' variant="primary">View Details</Button>
           </Card.Body>
           </Card>
           
         </div>
         )
         
        )}




      </div> 
    </TabPanel>
    {/* Manual Car end */}





     </Tabs>

    
        </div>



        </div>     
    );
};

export default HomeCategory;


