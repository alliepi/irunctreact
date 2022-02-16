import React, { Component } from 'react';
import ContactModal from './ContactModalComponent';
class Main extends Component{
    render(){
        return(
            <div class="px-4 py-5 my-5 text-center row-content">
                <div class="col vertical-center">
                    <h1 class="display-5 fw-bold  pt-5 align-self-center">IRUNCT</h1>
                    <p class="lead mb-4">Meeting all of your race timing needs!</p>
                </div>
                <div class="col-lg-6 mx-auto">
                    <div class="d-grid gap-5 d-sm-flex justify-content-sm-center">
                        <ContactModal />
                        <a class="btn btn-outline-secondary btn-lg px-4 m-4" href="#results">See your results</a>
                    </div>
                </div>
            </div>
            
        )
    }
}



export default Main;