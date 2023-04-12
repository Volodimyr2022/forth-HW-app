import React from "react";
import DataMaker from "./DataMaker";
import Posts from "./Posts";
import Post from "./Post";

const POST_BASE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10"

const TaskThree = () => {
    return (
        <div>
            <DataMaker 
                url={POST_BASE_URL}
                renderDataUrl={(data) => <Posts posts={data} />}
            />
        </div>
    )
}

export default TaskThree