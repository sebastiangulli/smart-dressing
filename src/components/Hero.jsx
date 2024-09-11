import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const categories = ['Zapatos', 'Trajes', 'Camisas', 'Corbatas y Moños', 'Chalecos', 'Abrigos', 'Accesorios']

export const Hero = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <main className={`hero ${theme}-mode-bg`}>
            <div className="hero__container section-container">
                <div className="hero__container__left-box">
                    <span className="hero__container__left-box__callout">
                        Todo lo que necesitas para verte bien
                    </span>
                    <div className="hero__container__left-box__categories">
                        {
                            categories.map((category, index) =>
                                <button className="hero__container__left-box__categories__button"
                                    key={index}>
                                    {category}
                                </button>
                            )
                        }
                    </div>
                </div>
                <div className="hero__container__right-box">
                    <img className="hero__container__right-box__product" src="" alt="" />
                </div>
            </div>
        </main>
    )
}
