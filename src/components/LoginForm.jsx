const LoginForm = (props) => {
    return (
        <div className="form">
            <div className="kermitContainer">
                <img className="kermit" src="https://bilder.fernsehserien.de/gfx/pics/1200/Kermit-In-Die-Muppets.jpg.jpg" alt="kermit the frog" />
            </div>

            <label for="username">Username</label>
            <input onChange={(e) => { props.setusername(e.target.value) }} type="text" placeholder="Deine Username" />

            <label for="password">Password</label>
            <input onChange={(e) => { props.setpassword(e.target.value) }} type="password" placeholder="Dein Passwort" />

            <button className="loginBtn" onClick={props.login}>Login</button>

        </div>
    )

}
export default LoginForm