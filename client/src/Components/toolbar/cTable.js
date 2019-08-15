import React, { Component } from 'react';
import { Table } from 'reactstrap';
// import Table from 'react-bootstrap/Table';

class cTable extends Component {
    render() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Child ID</th>
                        <th>First Name</th>
                        <th>Image</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Special Needs</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
export default cTable;