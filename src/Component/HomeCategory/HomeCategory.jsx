import './HomeCategory.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomeCategory = () => {
    return (

      <div>
         <h2 className='Shop-by-category'>Shop by category</h2>
     


        <div className='tab-main-container'>

    
            
            <Tabs>
    <TabList>
      <Tab ><span className='tab-title'>Bike</span></Tab>
      <Tab ><span className='tab-title'>Car</span></Tab>
      <Tab ><span className='tab-title'>Truck</span></Tab>
    </TabList>

    <TabPanel >
      
      <div className='row row-cols-2'>

     
      <section>
      <h2 className='tab-sub-category'>Electric bike</h2>

        <div className='row cols-2' >
        <Card className='tab-card' style={{ width: '18rem' }}>
      <Card.Img className='tap-card-img' variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name:</Card.Title>
        <Card.Text>
        <span className='tab-card-span'>Price:</span>
        </Card.Text>
        <Card.Text>
          <span className='tab-card-span'>Rating:</span>
        </Card.Text>
        <Button className='tab-card-button' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
      </section>

      <section>
       
      <h2 className='tab-sub-category'>Remote bike</h2>

      <div className='row cols-2' >
        <Card className='tab-card' style={{ width: '18rem' }}>
      <Card.Img className='tap-card-img' variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name:</Card.Title>
        <Card.Text>
        <span className='tab-card-span'>Price:</span>
        </Card.Text>
        <Card.Text>
          <span className='tab-card-span'>Rating:</span>
        </Card.Text>
        <Button className='tab-card-button' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>

      </section>


      </div>
    </TabPanel>


    <TabPanel>
 
    <div className='row row-cols-2'>

     
<section>
<h2 className='tab-sub-category'>Electric car</h2>

  <div className='row cols-2' >
  <Card className='tab-card' style={{ width: '18rem' }}>
<Card.Img className='tap-card-img' variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Name:</Card.Title>
  <Card.Text>
  <span className='tab-card-span'>Price:</span>
  </Card.Text>
  <Card.Text>
    <span className='tab-card-span'>Rating:</span>
  </Card.Text>
  <Button className='tab-card-button' variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
  </div>
</section>

<section>
 
<h2 className='tab-sub-category'>Remote car</h2>

<div className='row cols-2' >
  <Card className='tab-card' style={{ width: '18rem' }}>
<Card.Img className='tap-card-img' variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Name:</Card.Title>
  <Card.Text>
  <span className='tab-card-span'>Price:</span>
  </Card.Text>
  <Card.Text>
    <span className='tab-card-span'>Rating:</span>
  </Card.Text>
  <Button className='tab-card-button' variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
  </div>

</section>


</div>
    </TabPanel>


    <TabPanel>
    
    <div className='row row-cols-2'>

     
<section>
<h2 className='tab-sub-category'>Electric track</h2>

  <div className='row cols-2' >
  <Card className='tab-card' style={{ width: '18rem' }}>
<Card.Img className='tap-card-img' variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Name:</Card.Title>
  <Card.Text>
  <span className='tab-card-span'>Price:</span>
  </Card.Text>
  <Card.Text>
    <span className='tab-card-span'>Rating:</span>
  </Card.Text>
  <Button className='tab-card-button' variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
  </div>
</section>

<section>
 
<h2 className='tab-sub-category'>Remote track</h2>

<div className='row cols-2' >
  <Card className='tab-card' style={{ width: '18rem' }}>
<Card.Img className='tap-card-img' variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Name:</Card.Title>
  <Card.Text>
  <span className='tab-card-span'>Price:</span>
  </Card.Text>
  <Card.Text>
    <span className='tab-card-span'>Rating:</span>
  </Card.Text>
  <Button className='tab-card-button' variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
  </div>

</section>


</div>
    </TabPanel>


  </Tabs>

        </div>


        </div>     
    );
};

export default HomeCategory;