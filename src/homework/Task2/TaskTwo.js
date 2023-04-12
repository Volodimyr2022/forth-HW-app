import React from "react";
import User from "./User";
import { userData } from "../data/userData";
import Album from "./Album";
import { albumsData } from "../data/albumsData";
import albumImg from "../../Img/92c952.png";
import buttonImg from "../../Img/9484251.png"
import UsersList from "./UsersList";
import AlbumsList from "./AlbumsList";
const USERS_BASE_URL = "https://jsonplaceholder.typicode.com/users?_limit=10"
const ALBUMS_BASE_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10"

const TaskTwo = () => {
    return(
        <div>
            <User
                username={userData.username}
                email={userData.email}
                city={userData.address.city}
                street={userData.address.street}
                suite={userData.address.suite}
                phone= {userData.phone}
                company={userData.company.name}
            />
            <UsersList url={USERS_BASE_URL}/>
            <Album
                title={albumsData.title}
                albumImg={albumImg}
                buttonImg={buttonImg}
            />
            <AlbumsList url={ALBUMS_BASE_URL} />
        </div>
    )
}

export default TaskTwo