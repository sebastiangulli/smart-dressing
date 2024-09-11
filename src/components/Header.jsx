import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { pathsThemeIcon } from "../icons/pathsThemeIcon"
import '../../public/styles/header.css'

const sections = ['Categorías', 'Más Vendidos', 'En Oferta']

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <header className={`header ${theme}-mode-border ${theme}-mode-bg`}>
            <div className='header__container section-container'>
                <div className='header__container__brand'>
                    <img className='header__container__brand__logo not-selectable'
                        src={`../../public/images/logos/${theme === 'light' ? 'black' : 'white'}-logo.webp`}
                        alt="Logo de Smart Dressing" />
                    <h1 className={`header__container__brand__name ${theme}-mode-text`}>
                        Smart <br />Dressing
                    </h1>
                </div>
                <nav className='header__container__nav'>
                    <ul className='header__container__nav__list'>
                        {
                            sections.map((section, index) =>
                                <li className={`header__container__nav__list__item not-selectable ${theme}-mode-text`} key={index}>
                                    {section}
                                </li>
                            )
                        }
                    </ul>
                </nav>
                <button className={`header__container__theme-button ${theme}-mode-border ${theme}-mode-bg`} onClick={toggleTheme}>
                    <svg className={`header__container__theme-button__icon centred-element ${theme}-mode-icon`}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        {theme === 'light' ? pathsThemeIcon.light : pathsThemeIcon.dark}
                    </svg>
                </button>
            </div>
        </header>
    )
}
