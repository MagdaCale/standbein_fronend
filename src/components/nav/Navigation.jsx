import Home from "../home/Home"
import Order from "../order/Order"
import Products from "../product/Products"
import AllUsersWindow from "../user/AllUsersWindow"


const Navigation = (props) => {
    // const [renderContent, setRenderContent] = useState('customer')

    const navigateTo = (e) => {

        switch (e.target.innerText) {
            case "Dashboard": props.setcomponent(<Home/>)
                break
            case "Products": props.setcomponent(<Products />)
                break
            case "Orders": props.setcomponent(<Order/>)
                break
            case "Users": props.setcomponent(<AllUsersWindow/>)
        }

    }
    
    return (
        <nav className="DashNav" onClick={navigateTo}>
            <div className="kermitDashContainer">
                <img className="kermit" src="https://bilder.fernsehserien.de/gfx/pics/1200/Kermit-In-Die-Muppets.jpg.jpg" alt="kermit the frog" />
            </div>
            <p className="navButton">Dashboard</p>
            <p className="navButton">Products</p>
            <p className="navButton">Orders</p>
            <p className="navButton">Users</p>
        </nav>
    )
}

export default Navigation