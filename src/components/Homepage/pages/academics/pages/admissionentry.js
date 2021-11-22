import React, { useState, Fragment, Component } from 'react'
import AddAdmissionForm from '../forms/admission_form'
import AdmissionTable from '../Tables/admissiontable'
import { Table } from '../Tables/table'

import './home.css'
import '../forms/admission_form.css'
import SubmitForm from '../forms/admission_form'

const AdmissionDetails= () =>  {
    const columns = [
            { accessor: 'studentname', label: 'Student-Name' },
            { accessor: 'fathername', label: 'Father-Name' },
            { accessor: 'mothername', label: 'Mother-Name', },
            { accessor: 'dob', label: 'Date-of Birth', },
            { accessor: 'age', label: 'Age' },
            { accessor: 'contactdetails', label: 'Contact details' },
            { accessor: 'address', label: 'Address' },
            { accessor: 'classinfo', label: 'Class Information' },
        ]
    
        const itemData = [
            { id: 1, studentname: 'Ganesh', fathername: 'shiva', mothername: 'devi',
             dob: '23/03/1994', age: '26', contactdetails: '975632190', 
             address: '851 Greenrose DriveHarvey, IL 60426', classinfo: 'VIII' },
             { id: 2, studentname: 'Henry', fathername: 'jim', mothername: 'alexa',
             dob: '26/11/1993', age: '29', contactdetails: '875242190', 
             address: '851 Greenrose DriveHarvey, IL 60426', classinfo: 'XII' },
    
        ]
    
        const initialFormState = { id: '', studentname: '', fathername: '', mothername: '', dob: '', 
        age: '', contactdetails: '', address: '', classinfo: '' }
    
        // Setting state
        const [items, setItems] = useState(itemData)
        const [currentItem, setCurrentItem] = useState(initialFormState)
        const [editing, setEditing] = useState(false)
       
        
        
        return (
            <div>
                <h1 className="gg">Admission Form</h1>
              <div ><AddAdmissionForm /></div>  
                <div >
                    
                    
                        
                        
                        
                    
                </div>
            </div>
        )
    }
    

	export default AdmissionDetails;

