import React, { useEffect, useState } from "react"
import Posts from "./Posts"


const DataMaker = ({url, renderDataUrl}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setPosts(json))
    }, [url])

    return (
        <div>
            {renderDataUrl(posts)}
        </div>
    )
}

export default DataMaker