import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div className="postStyle">
            <h2> Post of id: {id} </h2>
            <h2> {title} </h2>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;