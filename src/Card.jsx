import React from "react";
import web from "../src/images/ph-1.png"
import { NavLink } from "react-router-dom";
var Card = (props) => {
    return(
        <>
        {/* <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                         */}

                        {/* Card start */}
                        <div className="col-md-4 mx-auto">
                        <div className ="card">
                            <img src={props.imgsrc} className ="card-img-top" alt="img" />
                            <div class="card-body">
                                <h5 className ="card-title font-weight-bold">{props.title}</h5>
                                <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a NavLink to="" className ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                        {/* Card end */}

                    {/* </div>
                </div>
            </div>
        </div>
        */}
        </> 
    );
};
export default Card;