const CollectionListing = ({artwork}) => {

  
return (
<article className="collection-item">
      <h3 className="collection-item-title">{artwork.title}</h3>
      <img
        src={`/images/${artwork.image}`}
        alt={artwork.title}
        className="img-standard"
      />
    </article>

  )
}

export default CollectionListing
