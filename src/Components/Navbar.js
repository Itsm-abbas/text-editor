import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav style= {{backgroundColor:'blue'}} className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">
               Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
          <div className="bg-primary rounded mx-2" style={{height:'1.5rem',width:'1.5rem'}} onClick={()=>props.toggleColor('primary')}></div>
          <div className="bg-success rounded mx-2" style={{height:'1.5rem',width:'1.5rem'}} onClick={()=>props.toggleColor('success')}></div>
          <div className="bg-danger rounded mx-2" style={{height:'1.5rem',width:'1.5rem'}} onClick={()=>props.toggleColor('danger')}></div>
          <div className="bg-info rounded mx-2" style={{height:'1.5rem',width:'1.5rem'}} onClick={()=>props.toggleColor('info')}></div>
          </div>
          <div className={`form-check form-switch text-${props.bluishmode === 'dark' ? 'light' : 'dark'} mx-4`} >
            <input
              onClick={props.bluishToggle}
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="switchBlue"
            />
            <label className="form-check-label" htmlFor="switchBlue">
              Switch to Bluish
            </label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchDark"
            />
            <label className="form-check-label" htmlFor="switchDark">
              Switch to Dark
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
