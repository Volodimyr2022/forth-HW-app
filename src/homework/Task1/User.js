import React from "react";
import { withToggler } from "../HOC/withToggler"; 

const User = ({username, email, city, street, suite, phone, company, toggled, changeToggle}) => {
    return (
        <div>
            <p> Name - {username} </p>
            <p> Email -{email} </p>
            {toggled && <div>
                <p>City - {city}</p>
                <p>Street - {street}</p>
                <p>Suite - {suite}</p>
                <p>Phone -  {phone}</p>
                <p>Company - {company}</p>
                </div>}
            <button onClick={changeToggle}>
                {toggled ? "Hide details" : "See details"}
            </button>
        </div>
    )
}

export default withToggler(User) 