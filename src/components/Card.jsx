import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { CartContext } from "../contexts/CartContext"
import '../../public/styles/card.css'

export const Card = ({ name, id, category, price, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
    const { theme } = useContext(ThemeContext)
    const isAdded = productId => cartItems.includes(productId)
    const handleCart = productId => {
        isAdded(productId)
            ? removeFromCart(productId)
            : addToCart(productId)
        console.log(cartItems)
    }
    return (
        <div className={`products__container__grid__card product-card ${theme}-mode-bg ${theme}-mode-border`} >
            <div className={`products__container__grid__card__box product-box ${theme}-mode-border`}>
                <img className="products__container__grid__card__box__image product-image not-selectable" src={image} alt={`Imagen de ${name}`} />
                <span className={`products__container__grid__card__box__category product-category ${theme}-mode-text not-selectable`}>
                    {category}
                </span>
                <button onClick={() => handleCart(id)} className="products__container__grid__card__box__cart product-cart-button">
                    {isAdded(id) ? '-' : '+'}
                </button>
            </div>
            <span className={`products__container__grid__card__name product-name ${theme}-mode-text`}>
                {name}
            </span>
            <span className={`products__container__grid__card__price product-price ${theme}-mode-text`}>
                {price}
            </span>
        </div>
    )
}
