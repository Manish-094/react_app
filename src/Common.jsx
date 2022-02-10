import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/stack.png";
var Common = (props) => {
    return(
        <>
            <section id="header" className=" mt-5">
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1 className="pt-5">
                                {props.name}<br/> <strong className="brand-name text-primary"> Manish Patel</strong>
                            </h1>
                            <h2 className="my-3">
                                We are the team of talented <br/>
                                developer making website
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-outline-primary" >{props.btname}
                                </NavLink>
                         </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} id="img1" className="img-fluid" alt="home img" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};
export default Common;