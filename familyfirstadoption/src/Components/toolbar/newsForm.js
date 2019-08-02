import React from 'react';

class NewsForm extends React.Component{
    render(){
        return(

            <div className="NewsForm">
                <div class="section-subscribe bg-light">
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-12 my-3">
                            <h2 class="text-uppercase heading">Get News &amp; Updates</h2>
                            </div>
                            <div class="col-md-12">
                                <form method="post" action="">
                                    <div class="row">
                                        <div class="col-md-4 mb-3">
                                            <input type="text" class="form-control btn-block" placeholder="Your Name"/>    
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <input type="email" class="form-control btn-block" placeholder="Your Email"/>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <input type="submit" class="btn btn-primary btn-block" value="Subscribe"/>
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