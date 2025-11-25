import CollectionListing from "./CollectionListing"
import artworks from "../artworks.json"


const CollectionListings = () => {

  return (
    <div>
        {artworks
        .map((artwork)=>(
        
        <CollectionListing key={artwork.id} artwork={artwork} />
        
        ))}
    </div>
  )
}

export default CollectionListings
