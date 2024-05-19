import { React, useContext } from 'react';
import { MyContext } from './MyContext';
import { FeedbackContext } from './MyContext';

function Temporary() {

    const { userId, setUserId } = useContext(MyContext);



   // call the db and check if the credentials are valid
    fetch('http://127.0.0.1:5000/getuserpoints', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({ userId })
    }
    )
    .then((res) => res.json()
    .then((data) => {
        console.log(data);
    })
    );

    return (
        <p>Current ID: {userId}</p>
    )
}

export default Temporary;
