import '../public/styles/main.css'
import '../public/styles/fonts.css'
import '../public/styles/classes.css'
import { ThemeProvider } from "./contexts/ThemeContext"
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export const App = () => {
    return (
        <ThemeProvider>
            <Header />
            <Hero />
        </ThemeProvider>
    )
}