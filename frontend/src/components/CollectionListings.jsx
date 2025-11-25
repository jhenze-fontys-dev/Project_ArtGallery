import CollectionListing from "./CollectionListing"
import artworks from "../artworks.json"
import { useParams } from "react-router-dom";


const CollectionListings = () => {
 const { id } = useParams();
 const specificId = Number(id);

 const filteredArtworks = artworks.filter(
    (artwork) => artwork.collection_id === specificId
  );
  return (
    <div>
        {filteredArtworks
        .map((artwork)=>(
        
        <CollectionListing key={artwork.id} artwork={artwork} />
        
        ))}
    </div>
  )
}

export default CollectionListings
