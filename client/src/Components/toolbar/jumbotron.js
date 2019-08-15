import React from 'react';

class Jumbotron extends React.Component{
    render(){
        return(
            <div className="jumboT">
            <div className="jumbotron">
            <h1 className="display-4 font-weight-bolder">Welcome to <br/>Family First Adoption</h1>
                <br/>
                <hr className="my-4"></hr>
                <br/>
                <h2 className="display-5 font-weight-bold">Find out about adoption and foster care.</h2>
                <br/><br/><br/>
                <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
            </div>
            </div>

        );
    }
}

export default Jumbotron;
