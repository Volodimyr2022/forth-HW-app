import React from "react";


const User = ({id, username, email, city, street, suite, phone, company}) => {
    return (
        <div>
            <hr></hr>
            <p> User - {id}</p>
            <p> Name - {username} </p>
            <p> Email -{email} </p>
            <p>City - {city}</p>
            <p>Street - {street}</p>
            <p>Suite - {suite}</p>
            <p>Phone -  {phone}</p>
            <p>Company - {company}</p>
        </div>
    )
}

export default User 