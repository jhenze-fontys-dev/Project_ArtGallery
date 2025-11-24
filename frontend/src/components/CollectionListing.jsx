const CollectionListing = ({artwork}) => {
  
return (
    <div>
      {artwork.title}
      <img src={artwork.image} alt={artwork.title} className="img-standard"/>
    </div>

  )
}

export default CollectionListing
