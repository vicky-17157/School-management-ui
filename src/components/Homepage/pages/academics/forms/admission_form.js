import React, { Component } from 'react';

import axios from "axios"; 


class SubmitForm extends Component {
    constructor() {
        super();
  this.state = {
    studentName: 'Santhosh',
    fee:'',
    guardianName:'',
    class:'',
    admissionDate:'',
    dob:'',
    type:'',
    previousSchool:'',
    bloodGroup:'',
    idProof:'',
    contactNumber:'',
    gender:'',
    address:''
  }};
  
/* This is where the magic happens 
*/
handleSubmit = event => {
    event.preventDefault();
    const user = {
      studentName: this.state.studentName,
      fee:this.state.fee,
      guardianName:this.state.guardianName,
      class:this.state.class,
      admissionDate:this.state.admissionDate,
      dob:this.state.dob,
      type:this.state.type,
      previousSchool:this.state.previousSchool,
      bloodGroup:this.state.bloodGroup,
      idProof:this.state.idProof,
      contactNumber:this.state.contactNumber,
      gender:this.state.gender,
      address:this.state.address
    } 
    
    axios.post('http://localhost:4000/admission', { user })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.alert("Successfully added")
        window.location = "/student" //This line of code will redirect you once the submission is succeed
      })
  }
  handleChange = event =>{
    this.setState({ studentName: event.target.value});
  }
  handleChangeGuardianName = event =>{
    this.setState({ guardianName: event.target.value});
  }

  handleChangeFee = event =>{
      this.setState({fee:event.target.value})
  }
  handleChangeGuardianName = event =>{
    this.setState({guardianName:event.target.value})
}
handleChangeClass = event =>{
    this.setState({class:event.target.value})
}
handleChangeAdmissionDate = event =>{
    this.setState({admissionDate:event.target.value})
}
handleChangeDob = event =>{
    this.setState({dob:event.target.value})
}
handleChangeType = event =>{
    this.setState({type:event.target.value})
}
handleChangePreviousSchool = event =>{
    this.setState({previousSchool:event.target.value})
}
handleChangeBloodGroup = event =>{
    this.setState({bloodGroup:event.target.value})
}
handleChangeIdProof = event =>{
    this.setState({idProof:event.target.value})
}
handleChangeContactNumber = event =>{
    this.setState({contactNumber:event.target.value})
}
handleChangeGender = event =>{
    this.setState({gender:event.target.value})
}
handleChangeAddress = event =>{
    this.setState({address:event.target.value})
}
render() {
  
    return (
      <div className="body22">
      <div classname="form1">
        <form onSubmit = { this.handleSubmit }>
          <label className="col-25"> 
            <input placeholder="Person Name:" className="col-75 formEntry"type = "text" name = "studentName"  onChange= {this.handleChange}/>
            </label>
            <label className="col-25">
            <input placeholder="Fee:" className="col-75 formEntry"type = "text" name = "fee"   onChange= {this.handleChangeFee}/>
            </label>
            <label className="col-25"> 
            <input  placeholder="guardianName:" className="col-75 formEntry"type = "text" name = "guardianName"   onChange= {this.handleChangeGuardianName}/>
            </label>
             <label className="col-25"> 
            <input placeholder="class:" className="col-75 formEntry"type = "text" name = "class"   onChange= {this.handleChangeClass}/>
            </label>
            <label className="col-25">
            <input placeholder="admissionDate:"  className="col-75 formEntry" type = "text" name = "admissionDate"   onChange= {this.handleChangeAdmissionDate}/>
            </label>
            <label className="col-25"> 
            <input placeholder="dob:" className="col-75 formEntry"type = "text" name = "dob"   onChange= {this.handleChangeDob}/>
            </label>
            <label className="col-25">
            <input placeholder="type:" className="col-75 formEntry"type = "text" name = "type"   onChange= {this.handleChangeType}/>
            </label>
            <label className="col-25"> 
            <input placeholder="previousSchool:" className="col-75 formEntry"type = "text" name = "previousSchool"   onChange= {this.handleChangePreviousSchool}/>
            </label>
            <label className="col-25"> 
            <input placeholder="bloodGroup:" className="col-75 formEntry"type = "text" name = "bloodGroup"  onChange= {this.handleChangeBloodGroup}/>
            </label>
            <label className="col-25"> 
            <input placeholder="idProof:" className="col-75 formEntry"type = "text" name = "idProof"   onChange= {this.handleChangeIdProof}/>
            </label>
            <label className="col-25"> 
            <input placeholder="contactNumber:" className="col-75 formEntry"type = "text" name = "contactNumber"   onChange= {this.handleChangeContactNumber}/>
            </label>
            <label className="col-25"> 
            <input placeholder="gender:" className="col-75 formEntry"type = "text" name = "gender"   onChange= {this.handleChangeGender}/>
            </label>
            <label className="col-25">
            <input placeholder="address:" className="col-75 formEntry" type = "text" name = "address"   onChange= {this.handleChangeAddress}/>
            </label>
            
          
          
          <button  className="submit formEntry" type = "submit"> Add </button>
        </form>
  
        </div>
        </div>


    );
  }
}
export default SubmitForm;