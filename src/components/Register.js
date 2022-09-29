import React, { Component } from 'react'

export default class Register extends Component {
 

 
  constructor(props) {
    super(props)
  
    this.state = {
       firstname:"",
       lastname :"",
       email:""

    }
    this.handleusernameA=this.handleusernameA.bind(this)
    this.handleusernameB=this.handleusernameB.bind(this)

    this.handleusernameC=this.handleusernameC.bind(this)

    

  }
  handleusernameA(e){
    this.setState({
      firstname:e.target.value,
    
    
    })
    console.log(this.state.firstname)
  }
  handleusernameB(e){
    this.setState({
  lastname:e.target.value
    })
    console.log(this.state.lastname)
  }

  handleusernameC(e){
    this.setState({
     email:e.target.value
    })
    console.log(this.state.email)
  }
  handlesubmit(){
    
      alert("Thanks! Your form Submitted successfully ")

  }
 
  render() {
    return (
      <div>
      <div className='form-container'>
        <h1 className='heading'>Registratiom Form</h1>
        <form className='registor-form' onSubmit={this.handlesubmit}>
         <label>Firstname:</label>
          <input type="text" placeholder='Enter Your First Nmae' value={this.state.firstname} onChange={this.handleusernameA} required  className="form-field" />
   

          <label>Lastname:</label>
          <input type="text" placeholder='Enter Your Last Name' value={this.state.lastname} onChange={this.handleusernameB}  required className="form-field"  />
   


          <label> Email-id:</label>
          <input type="email" placeholder='Enter Your Email' value={this.state.email} onChange={this.handleusernameC}  className="form-field"  />
         

          <br></br>
          <br></br>
        
          <button>Submit</button>
        </form>
      </div>
      </div>
    )
  }
}