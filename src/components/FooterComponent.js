import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="bg-light" id="contact">
                <div className="container">
                    <div className="row align-items-center mx-auto">             
                        <div className="col-6 justify-content-center">
                            <h5>Follow us!</h5>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/irunctllc"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/iRunConnecticut/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCwNzzqCIBSUidlwkHx0Ph-w/featured"><i className="fa fa-youtube"></i></a>
                        </div>
                        <div className="col-6 text-center">
                            <a role="button" className="btn btn-link" href="tel:+18606128388"><i className="fa fa-phone fa-lg text-primary"></i>1-860-612-8388</a><br />
                            <a role="button" className="btn btn-link" href="mailto:timing@irunct.com"><i className="fa fa-envelope fa-lg text-primary"></i>timing@irunct.com</a>
                        </div>                
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;