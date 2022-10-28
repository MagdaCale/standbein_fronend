import AddOrder from "./AddOrder"
import AllOrderWindow from "./AllOrderWindow"


const Order = () => {
    return(
        <section>
            <h1>Add Order</h1>
            <article>
                <AllOrderWindow/>
                <AddOrder/>
            </article>
        </section>
    )
}

export default Order