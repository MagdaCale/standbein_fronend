import AllOrderWindow from "../order/AllOrderWindow"
import AllProductsWindow from "../product/AllProductsWindow"

const Home = () => {
    return (
        <section className="homeSection">
            <AllProductsWindow />
            <AllOrderWindow/>
        </section>
    )
}

export default Home