import React, { useState } from 'react'
import axios from "axios";
import TextField from "@mui/material/TextField";







const Contact = () => {
  const [state, setState] = useState({
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  })
  const resetForm = () => {
    setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent",
    });
    setTimeout(() => {
      setState({...state, sent: false });
    }, 3000);
  }


    const handleChangeEmail= (e)=>{
      if (!e.target.value.match(/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g))
       {
        setState({
         ...state, email: e.target.value,
        });
      
      setState({ ...state,emailError: true });
  
        if (state.email === "") {
          // check if the input is empty
          setState({ ...state,emailError: false });
        }
      } else {
        setState({...state, email: e.target.value, emailError: false });
      }
    };
  
    const formSubmit = async (e) => {
      e.preventDefault();
      setState({...state,
        buttonText: "...sending",
      });
  
      let data = {
        name: state.name,
        email: state.email,
        message: state.message,
        subject: state.subject,
      };
  
      try {
        await axios.post("http://localhost:5000/contact", data);
        setState({ sent: true },resetForm());
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>  <form className="contact-form" onSubmit={(e) => formSubmit(e)}>
    <TextField
      id="standard-multiline-flexible"
      label="Message"
      placeholder="Enter Message"
      variant="outlined"
      multiline
      rowsMax={4}
      value={state.message}
      onChange={(e) => setState({ ...state,message: e.target.value })}
      required
      type="text"
    />
    <br />
    <br />
    <br />

    <TextField
      id="outlined-basic"
      placeholder="Enter your name"
      label="Name"
      variant="outlined"
      value={state.name}
      onChange={(e) => setState({ ...state,name: e.target.value })}
      required
      type="text"
    />
    <br />
    <br />
    <br />

    <TextField
      id="outlined-basic"
      label="Email"
      placeholder="Enter email address"
      variant="outlined"
      value={state.email}
      onChange={(e) => handleChangeEmail(e)}
      error={state.emailError}
      required
      type="email"
    />
    <br />
    <br />
    <br />
    <TextField
      id="outlined-basic"
      placeholder="Enter Subject"
      label="Subject"
      variant="outlined"
      value={state.subject}
      onChange={(e) => setState({ ...state,subject: e.target.value })}
      required
    />
    <br />
    <br />
    <br />
    <div className="button--container">
      <button type="submit" className="button button-primary">
        {state.buttonText}
      </button>
    </div>
  </form></div>
  )
}

export default Contact