import React, { Component } from 'react';

class Services extends Component{
    render(){
        return(
            <div class="container">
{/*--Services--*/}
    <div class="row row-content" id="services">
        <div class="col pt-5">
            <h2>Services</h2>
                <p>With decades of experience timing, racing, and managing events, our professionally trained staff understands what your event needs to be successful and keep people coming back year after year.</p>
                <p>At IRUNCT there are no limits to what we can do. Let us know your race dreams, and we will bring them to life!</p>
               
{/*--Tabs--*/}
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#chip" role="tab" data-toggle="tab">Automatic Chip Timing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#kiosk" role="tab" data-toggle="tab">Live Results Kiosk</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#paSystem" role="tab" data-toggle="tab">PA System</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#plusMore" role="tab" data-toggle="tab">Plus More!</a>
                    </li>
                </ul>
{/*--Tab Content--*/}
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade show active" id="chip">
                    <h4>Automatic Chip Timing</h4>
                    <p class="d-none d-sm-block">Instant, accurate results using state-of-the-art professional timing equipment!  Participants will have their result immediately crossing the finish line.</p>
                    <p class="d-none d-sm-block">We always provide:</p>
                        <ul>
                            <li>Online Results</li>
                            <li>Overall Printed Results</li>
                            <li>Age Group Printed Results</li>
                        </ul>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="kiosk">
                    <h4>Live Results Kiosk</h4>
                    <div class="row">
                        <div class="col">
                            <img src="img/kiosk.jpeg" width="297" height="424" />
                        </div>
                        <div class="col">
                            <p class="d-none d-sm-block">With our Results Kiosk participants quickly and easily type in their bib number, and instantly receive a finish receipt with their race statistics.</p>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="paSystem">
                    <h4>PA System</h4>
                    <p class="d-none d-sm-block">Get your race participants going with a PA system to play music, make announcements, and get the "party" started!</p>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="plusMore">
                    <h4>More than timing!</h4>
                    <p class="d-none d-sm-block">Rent these extra features to set your event apart from the rest...</p>
                    <ul>
                        <li>Finish Line Truss or Blowup Arch</li>
                        <li>Television Displayed Results</li>
                        <li>Result Kiosk</li>
                        <li>Split Clocks</li>
                        <li>Announcer Station</li>
                        <li>And more!</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default Services;