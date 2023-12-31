import React from 'react'
import {
    Link, useNavigate
  } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  
  let location = useLocation();
  let navigate=useNavigate();
  React.useEffect(() => {
    // Google Analytics
    console.log(location.pathname);
  }, [location]);

  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/login")
  }
  return (
    // bg-body-tertiary

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">    
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link active" to="/about">About</Link> */}

          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
      {!localStorage.getItem('token') ? <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-primary mx-1" type="submit">Login</button>
        <button className="btn btn-primary mx-1" type="submit">SignUp</button> */}
        <Link className="btn btn-primary mx-1" to='/login' role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to='/signup' role="button">SignUp</Link>
      </form>: <button className='btn btn-primary mx-1' onClick={handleLogout}>LogOut</button>}
    </div>
  </div>
</nav>    
  )
}

export default Navbar