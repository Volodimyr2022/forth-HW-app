import React from "react";
import User from "./User";
import { userData } from "../data/userData";
import Album from "./Album";
import { albumsData } from "../data/albumsData";
import albumImg from "../../Img/92c952.png";
import buttonImg from "../../Img/9484251.png"

const TaskOne = () => {
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
            <Album
                title={albumsData.title}
                albumImg={albumImg}
                buttonImg={buttonImg}
            />
        </div>
    )
}

export default TaskOne