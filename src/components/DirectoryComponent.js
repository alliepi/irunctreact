import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            races: [
                {
                    id: 0,
                    date: "01/01/2022",
                    raceName: "Milton Resolution Road Race",
                    city: "Litchfield",
                    state: "CT",
                    register: "https://litchfieldct.myrec.com/info/activities/program_details.aspx?ProgramID=29935",
                    results: "https://runsignup.com/Race/Results/123490?customResultsPageId=45937",
                    video: "https://www.youtube.com/watch?v=sZ0aPu36c2A"
                },
                {
                    id: 1,
                    date: 'Postponed to 2023',
                    raceName:'Shamrock Shuffle',
                    city: 'Watertown',
                    state: 'CT',
                    register: '',
                    results: '',
                    video: ''
                }
            ]
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
            <div>
                {directory}
            </div>
        );
    }
}

export default Directory;