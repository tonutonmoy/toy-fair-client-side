import useTitle from '../../hooks/useTitle';
import './Blog.css'


const Blog = () => {

    useTitle('Blog')
    return (
        <div className='blog-main-container'>

            <div className='blog-container'>
                
                <h3 className='blog-h2'>1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                 
                 <p className='blog-p'>Refresh tokens allow you to balance  users access needs with user organization's security practices. Access tokens help users get the resources they need to complete their tasks.it can be stored in localStorage and cookies</p>
            </div>





            <div className='blog-container'>

                <h3 className='blog-h2'>2: Compare SQL and NoSQL databases?</h3>
                 
                 <p className='blog-p'>
                    1: SQL databases are relational, and NoSQL databases are non-relational. <br />

                    2: SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have  
                    
                       dynamic schemas for unstructured data. <br />

                    3: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.

                 </p>
            </div>






            <div className='blog-container'>

                <h3 className='blog-h2'>3: What is express js? What is Nest JS (google it)?</h3>
                 
                 <p className='blog-p'>What is Nest JavaScript?
                    What Is Nest.JS? Why Should You Use It? | Turing
                    Nest. JS is a framework that helps build Node. JS server-side applications</p>
            </div>







            <div className='blog-container'>

                <h3 className='blog-h2'>4: What is MongoDB aggregate and how does it work (google it)?</h3>
                 
                 <p className='blog-p'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>





        </div>
    );
};

export default Blog;