import React from "react";
import web from "../src/images/ph-1.png"
import Sdata from "./Sdata";
import Card from "./Card";
var Service = () => {
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">  
                      {/* <Card /> */}
                      {
                          Sdata.map((val,index) => {
                              return <Card 
                                key = {index}
                                imgsrc = {val.imgsrc}
                                title = {val.title} 
                              />
                          })
                      }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Service;