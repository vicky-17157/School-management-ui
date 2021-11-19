import React, { Component } from "react";
import { render } from "react-dom";
import StudentApp from "../components/app";
import './home.css'

import { Table } from "../Tables/table";
import StudentDetails from "./studententry";
import axios from 'axios';
export default class StudentDetail extends Component {
    state = {
        students: []
      }
    
    componentDidMount() {
        axios.get(`http://localhost:4000/student`)
          .then(res => {
            const students = res.data;
            this.setState({ students });
            console.log("=============>data==========>",students);
          })
      }

   

render() {
    const columns = [
        { accessor: 'name', label: 'Student Name' },
            { accessor: 'address', label: 'Address' },
            { accessor: 'class', label: 'Class', },
            { accessor: 'section', label: 'Section', },
            { accessor: 'gender', label: 'Gender' },
            { accessor: 'bloodGroup', label: 'Blood group' },
           { accessor: 'yearOfAdmission', label: 'Year of Admission' },
           { accessor: 'dob', label: 'Date of Birth' },
           { accessor: 'admissionNumber', label: 'Admission Number' },
           { accessor: 'guardianName', label: 'Guardian Name' },
           { accessor: 'contactNumber', label: 'Contact' },
        
           
       ]
        return(
            <div >
                <header >
                    
                </header>
                
                <div >
				
				<div className="ytg">
					<h2 className="gg">Student List</h2>
                    {console.log('api response',this.state.students)}
					<div ><Table rows={this.state.students} columns={columns} /></div>
                    
				</div>
			</div>
            </div>
        )
}    
};

