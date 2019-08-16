import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumboT">
                <div className="jumbotron">
                    <h1 className="display-4">Meet the Children</h1>

                    <hr className="my-4"></hr>
                    <p> The children who wait are the survivors of abuse and neglect.</p>
                    <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
                </div>
            </div>

        );
    }
}

export default Jumbotron;
