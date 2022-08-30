// CSS Import:
import './Item.css'

export const Item = ( {id, title, price, pictureUrl}) => {
    return (
        <div id={id} className="ItemCard">
            <img className='carPicture' src={pictureUrl} alt={title}/>
            <p className='carTitle'>{title}</p>
            <p className='carPrice'>${price.toLocaleString("en-US")}</p>
            {/* Buttons for Booking and Detail options */}
            <button className='moreInfoButton'>Información</button>
            <button className='bookingButton'>Reserva</button>
        </div>
    )
}