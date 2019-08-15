import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumboT">
                <div className="jumbotron">
                    <h1 className="display-4">Meet the Children</h1>
                    <p className="lead">Who are the children who wait? The children who wait are the survivors of abuse and neglect. They are school aged children, siblings, children of color and children with disabilities. Each of them waits for adoption and there are more than 114,000 of them across the country. These children live in a series of foster and group homes for an average of three years. There they wait while they hope for the stability of an adoptive family.</p>
                    <hr className="my-4"></hr>
                    <p>When you are considering adopting a child with special needs we recommend that you take advantage of any specialized training available to equip you with the understanding and knowledge necessary to manage those challenges.</p>
                    <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
                </div>

            </div>

        );
    }
}

export default Jumbotron;
