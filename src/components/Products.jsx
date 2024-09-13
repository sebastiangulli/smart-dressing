import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Card } from "./Card"
import '../../public/styles/products.css'
import { productList } from "../helpers/productsList"

export const Products = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <section className={`products ${theme}-mode-bg`}>
            <div className="products__container section-container">
                <div className="products__container__grid products-grid">
                    {
                        productList.map((product, index) =>
                            <Card key={index} name={product.name} price={`$${product.price}`}
                                category={product.category} image={product.image} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}
