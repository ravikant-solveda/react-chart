import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    
  return (
    <div>
        <nav className="navbar navbar-expand-md bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-danger-emphasis" href="/" >ChartApp</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                    {/* <li className="nav-item">
                    <NavLink className="nav-link " to="/" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })} >Home</NavLink>
                    </li> */}

                    
                    <li className="nav-item">
                         <NavLink className="nav-link " to="/barChart" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })} >BarChart</NavLink>
                    </li>

                      {/* <a className="nav-link" href="/about" activeClassName="active">About</a> */}


                    {/* <li className="nav-item">
                    <NavLink className="nav-link " to="/about" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>About</NavLink>
                    </li> */}

                    <li className="nav-item">
                    <NavLink className="nav-link " to="/pieChart" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>PieChart</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link " to="/areaChart" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>AreaChart</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link " to="/lineChart" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>LineChart</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link " to="/donut" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>Donut</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className="nav-link " to="/stackBarChart" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>StackBarChart</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link " to="/postionProperty" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>PositionProperty</NavLink>
                    </li>

                    {/* <li className="nav-item">
                    <NavLink className="nav-link " to="/login" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })} >Login</NavLink>
                    </li> */}

                    <li className="nav-item">
                    <NavLink className="nav-link " to="/progressBar" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>ProgressBar</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link " to="/specialCss" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>SpecialCss</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link " to="/samosaTooltip" style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#000',
                    })}>SamosaToolTip</NavLink>
                    </li>
                </ul>

                
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success bg-white text-secondary-emphasis" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header