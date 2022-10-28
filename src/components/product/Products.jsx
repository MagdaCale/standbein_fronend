import AddProduct from "./AddProduct"
import AllProductsWindow from "./AllProductsWindow"

const Products = () => {
    return(
        <section className="productsSectionFlex">
            <article className="addProductWindow" >
                <AllProductsWindow/>
                <AddProduct/>
            </article>
        </section>
    )
}

export default Products