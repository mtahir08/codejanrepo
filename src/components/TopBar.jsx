import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { loginContext } from "../context/context";

const TopBar = () => {
    const { login, setLogin, setUser } = useContext(loginContext);

    return (

        <header className="header" >
            <div className="container h-100per">
                <div className="d-flex j-content-between align-items-center">
                    <div className="d-flex align-items-center h-7">
                        <NavLink to="/" className="white t-bold f-30">
                            Jam Pizza
                        </NavLink>
                    </div>
                    <div className="d-flex  align-items-center" >


                        <NavLink className="p-0-015  f-017 white t-decoration-none nav-link f-family-monospace" activeClassName="active-menu" exact to='/'>HOME</NavLink>
                        {!login ? <>
                            <NavLink className="p-0-015 t-capitalize f-017 white t-decoration-none nav-link f-family-monospace" exact activeClassName="active-menu" to='/login'>LOGIN</NavLink>
                            <NavLink className="p-0-015 t-capitalize f-017 white t-decoration-none nav-link f-family-monospace" exact activeClassName="active-menu"  to='/signUp'>SIGNUP</NavLink>
                        </> :
                            <>

                                <NavLink
                                    onClick={() => { setLogin(localStorage.removeItem("Islogin"), setUser(localStorage.removeItem("__USER__"))) }}
                                    className="p-0-015 f-017 t-capitalize white t-decoration-none nav-link  f-family-monospace" exact activeClassName="active-menu" to='/login'>LOGOUT
                                </NavLink>

                            </>}
                    </div>
                </div>
            </div>
        </header>
    );
}




export default TopBar;