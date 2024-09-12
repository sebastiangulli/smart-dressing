import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import '../../public/styles/card.css'

export const Card = ({ name, category, price, image }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`products__container__grid__card product-card ${theme}-mode-bg ${theme}-mode-border`} >
            <div className={`products__container__grid__card__box product-box ${theme}-mode-border`}>
                <img className="products__container__grid__card__box__image product-image not-selectable" src={image} alt={`Imagen de ${name}`} />
                <span className={`products__container__grid__card__box__category product-category ${theme}-mode-text not-selectable`}>
                    {category}
                </span>
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
