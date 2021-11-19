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
    
      
        <form onSubmit = { this.handleSubmit }>
          <label> Person Name:
            <input type = "text" name = "studentName"  onChange= {this.handleChange}/>
            </label>
            <label> fee:
            <input type = "text" name = "fee"   onChange= {this.handleChangeFee}/>
            </label>
            <label> guardianName:
            <input type = "text" name = "guardianName"   onChange= {this.handleChangeGuardianName}/>
            </label>
             <label> class:
            <input type = "text" name = "class"   onChange= {this.handleChangeClass}/>
            </label>
            <label>admissionDate:
            <input type = "text" name = "admissionDate"   onChange= {this.handleChangeAdmissionDate}/>
            </label>
            <label> dob:
            <input type = "text" name = "dob"   onChange= {this.handleChangeDob}/>
            </label>
            <label>type:
            <input type = "text" name = "type"   onChange= {this.handleChangeType}/>
            </label>
            <label> previousSchool:
            <input type = "text" name = "previousSchool"   onChange= {this.handleChangePreviousSchool}/>
            </label>
            <label> bloodGroup:
            <input type = "text" name = "bloodGroup"  onChange= {this.handleChangeBloodGroup}/>
            </label>
            <label> idProof:
            <input type = "text" name = "idProof"   onChange= {this.handleChangeIdProof}/>
            </label>
            <label> contactNumber:
            <input type = "text" name = "contactNumber"   onChange= {this.handleChangeContactNumber}/>
            </label>
            <label> gender:
            <input type = "text" name = "gender"   onChange= {this.handleChangeGender}/>
            </label>
            <label>address:
            <input type = "text" name = "address"   onChange= {this.handleChangeAddress}/>
            </label>
          
          
          <button type = "submit"> Add </button>
        </form>
  
 


    );
  }
}
export default SubmitForm;