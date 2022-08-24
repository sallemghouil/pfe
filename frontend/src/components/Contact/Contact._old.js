/*const Contact = () => {
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
          setState({ sent: false });
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
  
  )
}

export default Contact
*/