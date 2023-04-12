import User from "./User"
import { withFetchingData } from "../HOC/withFetchingData"


const UsersList = ({data: users, isLoading, error}) => {
 return(
    <div>
        <h3>START OF USERS LIST</h3>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {users && users.map(user => (
           <User 
            id={user.id}
            username={user.username}
            email={user.email}
            city={user.address.city}
            street={user.address.street}
            suite={user.address.suite}
            phone= {user.phone}
            company={user.company.name}
            key={user.id}
           /> 
        ))} 
        <hr></hr>
        <h3>END OF USERS LIST</h3> 
    </div>
 )
}

export default withFetchingData(UsersList)