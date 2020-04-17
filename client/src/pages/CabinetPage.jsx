import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Cabinet = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const thisUser = JSON.parse(localStorage.getItem('user'));
        setUser(thisUser);
    }, []);

    return (
        <div className="container pt-5 pb-5">
            <div className="border-bottom mb-3">
                <h2>Здравствуйте, {user.name}</h2>
            </div>
            <div className="">
                <Link to="/create" className="btn btn-success">Добавить статью</Link>
            </div>
        </div>
    )
}

export default Cabinet;