import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const Card = ({ name, category, price, image }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="products__container__grid__card">
            <div className="products__container__grid__card__box">
                <img className="products__container__grid__card__box__image" src={image} alt={`Imagen de ${name}`} />
                <span className={`products__container__grid__card__box__category ${theme}-mode-text`}>
                    {category}
                </span>
            </div>
            <span className={`products__container__grid__card__name ${theme}-mode-text`}>
                {name}
            </span>
            <span className={`products__container__grid__card__price ${theme}-mode-text`}>
                {price}
            </span>
        </div>
    )
}
