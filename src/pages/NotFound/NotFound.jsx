import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <Link className="" to="/">
                <img
                    className="img-fluid"
                    src={require('.//not-found.jpg')}
                    alt="not found page"
                />
            </Link>
        </div>
    );
};

export default NotFound;
