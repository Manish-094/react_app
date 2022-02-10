import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        FullName:"",
        Phone:"",
        Email:"",
        msg:"",
    });
    const InputEvent = (event) => {
        const {name,value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.FullName} , My mobile number is ${data.Phone} and email is ${data.Email} , Here is what I want to say ${data.msg}`
            );
    };
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 lg-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className ="mb-3">
                    <label for="exampleFormControlInput1" className ="form-label">Full Name:</label>
                    <input type="text" 
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="FullName"
                    value={data.FullName}
                    onChange={InputEvent} 
                    placeholder="Enter Your Name" 
                    required />
                    </div>

                    <div className ="mb-3">
                    <label for="exampleFormControlInput1" className ="form-label" >Phone:</label>
                    <input type="number" 
                    class="form-control" 
                    id="exampleFormControlInput1"
                    name="Phone"
                    value={data.Phone}
                    onChange={InputEvent}  
                    placeholder="Phone Number" required />
                    </div>

                    <div className ="mb-3">
                    <label for="exampleFormControlInput1" className ="form-label">Email address:</label>
                    <input type="email" 
                    class="form-control" 
                    id="exampleFormControlInput1"
                    name="Email"
                    value={data.Email}
                    onChange={InputEvent} 
                     placeholder="name@example" required />
                    </div>
                     
                     
                    <div className ="mb-3">
                    <label for="exampleFormControlTextarea1" className ="form-label" >Message:</label>
                    <textarea 
                    className ="form-control" id="exampleFormControlTextarea1"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}  
                    rows="3" required></textarea>
                     </div>

                     <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                    </form>
                 </div>
            </div>
        </div>
        </>
    );
};
export default Contact;