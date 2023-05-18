import './MyToys.css'
import { RxUpdate} from 'react-icons/rx';
import {RiDeleteBin6Line } from 'react-icons/ri';

const MyToys = () => {
    return (
        <div style={{marginBottom:"150px",marginTop:'150px'}}>
            
            <div className="row my-toys-card-container ">
                <section className="col-md-3">
                    <img className='my-toys-img' src="" alt="" />
                </section>


                <section className="col-md-6">

                 
                   

                     <p className="my-toys-p"> <span className="my-toys-span">Name:  </span>    </p>

                      <p className="my-toys-p"> <span className="my-toys-span">Sub-category:  </span>    </p>
                      
                      <p className="my-toys-p"> <span className="my-toys-span">Seller name:  </span>    </p>
                      
                      <p className="my-toys-p"> <span className="my-toys-span">Seller email:  </span>    </p>
                      
                      <p className="my-toys-p"> <span className="my-toys-span">price:  </span>    </p>
                      
                      <p className="my-toys-p"> <span className="my-toys-span">Rating:  </span>    </p>
                      
                      <p className="my-toys-p"> <span className="my-toys-span">Available quantity:  </span>    </p>
                      
                      <p className="my-toys-p"> <span className="my-toys-span">Details:  </span>    </p>

                     
                      


                     
                </section>


                <section className='col-md-3  my-toy-button-container '>

                 <button className="my-toys-update-button" >Update <RxUpdate className='ms-2'/></button>
                 <button className="my-toys-delate-button" >Delete <RiDeleteBin6Line className='ms-2'/></button>
                 
                 </section>



               

            </div>
        </div>
    );
};

export default MyToys;