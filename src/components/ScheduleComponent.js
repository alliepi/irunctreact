import React, { Component } from 'react';
import RaceTable from './RaceTableComponent';
class Schedule extends Component{
    render(){
        return(
            <div class="container">
    {/*--Results--*/}
                <div class="row row-content mx-auto" id="results">
                    <div class="col pt-5 mx-auto">
                        <h2>Results/Schedule</h2>
                        <RaceTable />
                    </div>
                </div>
            </div>
        )
    }
}

export default Schedule;