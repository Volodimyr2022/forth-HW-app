import { withFetchingData } from "../HOC/withFetchingData"
import Album from "./Album";

const AlbumsList = ({data: albums, isLoading, error}) => {
 return(
    <div>
        <h3>START OF ALBUMS LIST</h3>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {albums && albums.map(album => (
                <Album 
                id={album.id}
                title={album.title}
                key={album.id}
                />
            ))} 
        <h3>END OF ALBUMS LIST</h3>
    </div>
 )
}

export default withFetchingData(AlbumsList)