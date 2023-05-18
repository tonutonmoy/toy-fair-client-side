
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
             <NavLink style={{textDecoration:"none",color:"white"}}
                    to={to}
                    className={({ isActive, isPending }) =>

                      isActive ? "active" : ""  }>

                        {children}
                   
                  </NavLink>

        </div>
    );
};

export default ActiveLink;