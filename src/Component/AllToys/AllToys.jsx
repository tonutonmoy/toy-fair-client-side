import './AllToys.css'
import Table from 'react-bootstrap/Table';


const AllToys = () => {
    return (
        <div>


              <div className='d-flex w-25 mx-auto my-5 pt-5'>
              <input className="form-control me-2" type="search" placeholder="Toy Name" aria-label="Search"/>
               <button className="btn btn-outline-dark" type="submit">Search</button>
              </div>
            

                <Table className='w-75 mx-auto' striped bordered hover>
      <thead>
        <tr>
          
          <th>Seller Name</th>
          <th>Toy Name</th>
          <th>Sub-category</th>
          <th>price</th>
          <th>Available Quantity</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
         
        </tr>
      </tbody>
    </Table>
        </div>
    );
};

export default AllToys;