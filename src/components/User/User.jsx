import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className='userStyle'>
           <h2>{name}</h2>
           <h2>Email: {email}</h2>
           <h2>Phone: {phone}</h2>
           <Link to={`/user/${id}`} >Show Details</Link>
           <Link to={`/user/${id}`}>
            <button>Click Me</button>
           </Link>
        </div>
    );
};

export default User;