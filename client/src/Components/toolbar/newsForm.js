import React from 'react';

class NewsForm extends React.Component{
    render(){
        return(

            <div className="NewsForm">
                <div className="section-subscribe bg-light">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-12 my-3">
                            <h2 className="text-uppercase heading">Get News &amp; Updates</h2>
                            </div>
                            <div className="col-md-12">
                                <form method="post" action="">
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <input type="text" className="form-control btn-block" placeholder="Your Name"/>    
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input type="email" className="form-control btn-block" placeholder="Your Email"/>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input type="submit" className="btn btn-primary btn-block" value="Subscribe"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NewsForm;