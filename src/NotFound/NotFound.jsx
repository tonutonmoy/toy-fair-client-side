import './NotFound.css'

import notFound from '../assets/notFound/wp2414735.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='not-found-img' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;