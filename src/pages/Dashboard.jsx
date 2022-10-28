import AllOrderWindow from "../components/order/AllOrderWindow"
import AllProductsWindow from "../components/product/AllProductsWindow"
import Navigation from "../components/nav/Navigation"
import { useState } from "react"
import Home from "../components/home/Home"

const Dashboard = () => {

    const [component, setComponent] = useState (<Home/>)

    return (
        <main className="dashboard">
            <Navigation setcomponent={setComponent} />
            <h3>Welome</h3>
            
            {component}
        
        </main>
    )
}

export default Dashboard