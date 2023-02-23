import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NEWS MONKEY</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/business ">Business  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
                {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
              </ul>
              {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
        
        <div className="col-md-3">

<select id="inputState" className="form-select bg-primary" style={{color:'whitesmoke'}} onChange={(event)=>{

const selectedCountry = event.target.value;
console.log(selectedCountry);
console.log(this.props.setCountry);
if(selectedCountry === "NEWZELAND"){this.props.setCountry({country: "nz"})}
else if(selectedCountry === "CHINA"){this.props.setCountry({country: "ch"})}
else if(selectedCountry === "INDIA"){this.props.setCountry({country: "in"})}
else if(selectedCountry=== "BELGIUM"){this.props.setCountry({country: "bg"})}
else{this.props.setCountry({country: "us"})}
}}>
<option >Chose Country</option>
<option>NEWZELAND </option>
<option>CHINA           </option>
<option>INDIA           </option>
<option>BELGIUM        </option>
<option>UNITED STATE    </option>
</select>
</div>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default NavBar
