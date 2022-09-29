import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Forms extends Component {
 

 
  constructor(props) {
    super(props)
  
    this.state = {
       email:"",
       password:""

    }
    this.handleusernameC=this.handleusernameC.bind(this)
    this.handleusernameB=this.handleusernameB.bind(this)
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleusernameC(e){
    const em =e.target.value
    this.setState({
     email:e.target.value
     
    })
    console.log(this.state.email)
  }
  handleusernameB(e){
    this.setState({
  password:e.target.value
    })
    console.log(this.state.password)
  }

  handlesubmit(e){
    e.preventDefault();
    const { email, password } = this.state;
    if (email == "admin@gmail.com" && password == "admin@123") {
      alert("Thanks! Your form Submitted successfully ");
      return;//break
    }
    alert("Invalid credentials");
  }
 
  render() {
    return (
      <div>
      <div className='form-container'>
        <h1 className='heading'>Login Form</h1>
        <form className='registor-form' onSubmit={this.handlesubmit}>
          
        <input type="email" placeholder='Enter Your Email' value={this.state.email} onChange={this.handleusernameC}  className="form-field"  />

        <input type="password" placeholder='Enter Your Password' value={this.state.lastname} onChange={this.handleusernameB}  required className="form-field"  />
          <br></br>
          <br></br>
        
  <button>Signin</button>
  <p className='first'>Not a member?  <Link to="/Form">Sign up</Link> </p>
  
        </form>
      </div>
    


      </div>
    )
  }
}
