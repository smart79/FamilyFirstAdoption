import React, { Component } from 'react';
import './toolbar/toolbar.css';
import NavMenu from './toolbar/navMenu';
import cTable from './toolbar/cTable'

class Results extends Component {
    render() {
        return (
            <div className="Results">
                <NavMenu />
                <cTable />
            </div>

        )
    }
}

export default Results;