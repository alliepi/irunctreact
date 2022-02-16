import React, { Component } from 'react';
import {Table} from 'reactstrap';
import { RACES_2022 } from '../shared/races2022';
class RaceTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            races: RACES_2022
        };
    }

    render() {
        const directory=this.state.races.map(race=>{
            return(
               <tr key={race.id}>
                   <td>{race.date}</td>
                   <td>{race.raceName}</td>
                   <td>{race.city}</td>
                   <td>{race.state}</td>
                   <td><a href={race.register}>Register</a></td>
                   <td><a href={race.results}>Results</a></td>
                   <td><a href={race.video}>Video</a></td>
               </tr> 
            )
        })
        return (
            //<div role="tabpanel" className="tab-pane fade" id="twenty-one">
                <div className="table-responsive table-wrapper">
                    <Table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Race Name</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Register</th>
                                <th>Results</th>
                                <th>Video</th>
                            </tr>
                        </thead>
                        <tbody>
                            {directory}
                        </tbody>
                    </Table>
                </div>
            //</div>
        );
    }
}

export default RaceTable;