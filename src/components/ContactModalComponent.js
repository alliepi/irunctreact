import React, {Component} from 'react';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";

function ContactModal(){
 const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);
  
    return (
        <div>
            <Button
                color="primary" onClick={toggle} className="btn btn-primary btn-lg px-4 gap-3 m-4">Contact IRUNCT today!
            </Button>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Get in touch!</ModalHeader>
                <ModalBody>
                    <div class="container-fluid">
                        <form>
                            <div class="form-group row">
                                <label for="firstName" class="col-md-2 col-form-label">Name</label>
                                <div class="col-4">
                                    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" />
                                </div>
                                <div class="col-4">
                                    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-md-2 col-form-label">Email Address</label>
                                <div class="col-md-8">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="raceName" class="col-md-2 col-form-label">Race Name</label>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" id="raceName" name="raceName" placeholder="Race Name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="raceDate" class="col-md-2 col-form-label">Race Date</label>
                                <div class="col-md-8">
                                    <input type="date" class="form-control" id="raceDate" name="raceDate" />
                                </div>
                            </div>  
                            <div class="form-group row">
                                <label for="raceLocation" class="col-md-2 col-form-label">Race Location</label>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" id="raceLocation" name="raceLocation" placeholder="Race Location" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="numRunners" class="col-md-2 col-form-label">Estimated Number of Runners</label>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" id="numRunners" name="numRunners" placeholder="Estimated number of runners" />
                                </div>
                            </div> 
                            <div class="form-group row"> 
                                <label for="extraInfo" class="col-md-2 col-form-label">What else should we know about your race? (special needs/wants)</label>
                                <div class="col-md-8">
                                    <textarea id="extraInfo" class="form-control" name="extraInfo" rows="8"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Submit Request</Button>
                </ModalFooter>
            </Modal>
        </div >
    )
}

export default ContactModal;