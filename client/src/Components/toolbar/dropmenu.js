import React from 'react';

class DropMenu extends React.Component {
    render() {
        return (
            <div className="drop-menu">
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mb-4">
                                <div class="card">
                                    {/* <div class="card-header">
                                       Thinking about Adoption?
                                   </div> */}
                                    <div class="card-body">
                                        <h5 class="card-title">Thinking about Adoption?</h5>
                                        <p class="card-text">You don’t need to own your own home, have children already, or be young, wealthy,
                                        or a stay-at-home parent to adopt or foster. Although eligibility requirements vary between states and territories,
                                        in most instances marital status, age, income, and sexual orientation will not automatically disqualify someone from being a
                                        foster parent or adopting a child from foster care.
                                       <br />
                                            Characteristics needed to be a good adoptive parent include:
                                       <br />
                                            Being stable, mature, dependable, and flexible Having the ability to advocate for children.
                                            Being a team player with your family or child welfare worker While most adults qualify to foster and adopt, eligibility requirements
                                            vary between states. Our state foster care and adoption information can help individuals and families
                                            determine whether they are eligible to adopt where they live. Child Welfare Information Gateway also has a summary
                                            of state laws about who may adopt, be adopted, or who may place a child for adoption
                                       </p>
                                        <p><a href="/About" className="btn btn-primary">Adopt a child now</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                                <h2 className="mb-5">Steps to adopt &amp; foster a child</h2>
                                <div id="accordion">
                                    <div className="card mb-2">
                                        <h5 className="mb-0">
                                            <a href="/home" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                1. Getting Started
                            <span className="icon ion-chevron-down"></span>
                                            </a>
                                        </h5>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <h5 className="mb-0">
                                            <a href="/home" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                2. Envisioning your family
                            <span className="icon ion-chevron-down"></span>
                                            </a>
                                        </h5>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quibusdam possimus dolor odio dicta ipsam deleniti enim suscipit. Sed aperiam hic recusandae, perspiciatis quibusdam numquam nisi dolorum nostrum porro explicabo.
                        </div>
                                        </div>
                                    </div>
                                    <div className="card mb-2">
                                        <h5 className="mb-0">
                                            <a href="/home" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                3. Getting approved
                            <span className="icon ion-chevron-down"></span>
                                            </a>
                                        </h5>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quibusdam architecto vitae provident saepe omnis dignissimos corporis ratione nihil. Laboriosam nesciunt fugiat modi quis, odio tempora enim ipsa consequuntur temporibus.
                        </div>
                                        </div>
                                    </div>

                                    <div className="card mb-2">
                                        <h5 className="mb-0">
                                            <a href="/home" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                4. Being matched with a child
                            <span className="icon ion-chevron-down"></span>
                                            </a>
                                        </h5>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fugiat autem, explicabo dolorum libero totam doloribus ex ducimus repellendus qui nam distinctio cupiditate deleniti ipsam quibusdam neque quaerat tenetur ipsa.
                        </div>
                                        </div>
                                    </div>

                                    <div className="card mb-2">
                                        <h5 className="mb-0">
                                            <a href="/home" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                5. Receiving a placement
                            <span className="icon ion-chevron-down"></span>
                                            </a>
                                        </h5>
                                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit culpa accusamus repellat ut officia nesciunt aliquid qui nulla, provident ratione doloremque porro atque repellendus perspiciatis est. Accusamus earum, animi quod?
                        </div>
                                        </div>
                                    </div>

                                    <div className="card mb-2">
                                        <h5 className="mb-0">
                                            <a href="/home" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                6. Finalizing an adoption
                            <span className="icon ion-chevron-down"></span>
                                            </a>
                                        </h5>
                                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                            <div className="card-body">

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card mb-2">
                                        <h5 className="mb-0">
                                            <a href="/home" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                7. State information
                            <span className="icon ion-chevron-down"></span>
                                            </a>
                                        </h5>
                                        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sequi nobis beatae nesciunt fugit quisquam culpa rerum ipsum quibusdam impedit, sed soluta, quos neque reiciendis, earum magni laudantium iure, deleniti?
                        </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default DropMenu;