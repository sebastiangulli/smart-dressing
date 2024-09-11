import '../public/styles/main.css'
import '../public/styles/fonts.css'
import '../public/styles/classes.css'
import { ThemeProvider } from "./contexts/ThemeContext"
import { Header } from './components/Header'

export const App = () => {
    return (
        <ThemeProvider>
            <Header />
        </ThemeProvider>
    )
}