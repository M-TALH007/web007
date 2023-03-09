import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'



export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/" >{props.Titles}</Link>
        {/* <a className="navbar-brand" href="/" >{props.Titles}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
              {/* <a className="nav-Link " aria-current="page" href="/" >Home</a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-Link" href="/">{props.textAbout}</a> */}
              <Link className="nav-link" to="/About">{props.textAbout}</Link>
            </li>
            {/* {<li className="nav-item dropdown">
          <Link className="nav-Link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>} */}
        {/* <li className="nav-item">
          <Link className="nav-Link disabled">Disabled</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button type="submit" className="btn btn-outline-warning">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}>
     <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch " id="flexSwitchCheckDefault "/>
     <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
 
  )
}
// Navbar.defaultProps = {Titles : "talha is here",
//                       textAbout:"about us"}
   
// Navbar.propTypes = {Title: PropTypes.string.isRequired,
//                     textAbout:PropTypes.string.isRequired
// isRequired is used to strict the tiltle or about to only string
//}