
function Card({image,label, name, price, description}){
    return <div className="cardContainer">
        <img src={image} alt="" height={300} width={320} />
        <p className="label">{label}</p>
       <div className="contentWrapper">
       <p className="price">${price}</p>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
       </div>
    </div>
}

export default Card; 