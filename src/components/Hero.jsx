import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import '../../public/styles/hero.css'

const categories = ['Zapatos', 'Trajes', 'Camisas', 'Corbatas y Moños', 'Chalecos', 'Abrigos', 'Accesorios y Joyería']

export const Hero = () => {
    const { theme } = useContext(ThemeContext)
    const [photo, setPhoto] = useState(1)
    useEffect(() => {
        const photoInterval = setInterval(() => setPhoto(prevPhoto => (prevPhoto % 3) + 1), 2000);
        return () => clearInterval(photoInterval);
    }, [])
    return (
        <main className={`hero ${theme}-mode-bg`}>
            <div className="hero__container section-container">
                <div className="hero__container__left-box hero-box">
                    <span className={`hero__container__left-box__callout hero-callout ${theme}-mode-text`}>
                        Todo lo que necesitas para verte bien
                    </span>
                    <span className={`hero__container__left-box__quote hero-qoute ${theme}-mode-text`}>
                        <span className="hero__container__left-box__quote__text hero-quote-text">
                            "El mejor modo de vestir, una inversión para tu imagen"
                        </span>
                        <span className="hero__container__left-box__quote__author hero-quote-author">
                            (Sebastián Gulli, CEO de SD)
                        </span>
                    </span>
                    <div className="hero__container__left-box__categories hero-categories">
                        {
                            categories.map((category, index) =>
                                <button className={`hero__container__left-box__categories__button category-button ${theme}-mode-border ${theme}-mode-text ${theme}-mode-bg`}
                                    key={index}>
                                    {category}
                                </button>
                            )
                        }
                    </div>
                </div>
                <div className="hero__container__right-box hero-box">
                    <img className="hero__container__right-box__image hero-image not-selectable"
                        src={`../../public/images/hero/smart-man-${photo}.webp`} alt="Foto de hombre elegante" />
                </div>
            </div>
        </main>
    )
}
