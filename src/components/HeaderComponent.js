import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

/*I just took the same code from the Bootstrap site and changed the Navbar and NavbarBrand. 
We will need to go back and change it to make it more React friendly, and also add all the images in 
an image file. 
*/
class Header extends Component{
    render(){
        return(
            <Navbar className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
                <NavbarBrand href="#">
                    <img src="img/cropped-i-Run-CT-Final-Logo-Gradient-1.jpeg" width="77" height="52" />
                </NavbarBrand>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#services">Services</a>
                        <a className="nav-item nav-link" href="#contact">Contact</a>
                        <a className="nav-item nav-link" href="#results">Results/Schedule</a>
                        <a className="nav-item nav-link" href="#about">About</a>
                    </div>
                </div>
            </Navbar>
        )
    }
}

export default Header;

