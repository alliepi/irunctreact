import React, { Component } from 'react';
import {Table} from 'reactstrap';
import Directory from './DirectoryComponent';

function RaceTable(){
        return(
            <React.Fragment>
                <Table>
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
                        <Directory />
                    </tbody>
                </Table>
        </React.Fragment>
        )
};

export default RaceTable;