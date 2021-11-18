import React from 'react';

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class AddAdmissionForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;

      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);
      }
    }
    
    fetch('http://localhost:4000/admission', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
		  <div>
		  <label>Fee</label>
        <input
          name="fee"
          type="number"
          data-parse="number"
        />
		  </div>
		  

        <div class>
		<label>Student-Name</label>
        <input
          name="studentName"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		<div>
		<label>Guardian-Name</label>
		<input
          name="guardianName"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		<div>
		<label>Class</label>
		<input
          name="class"
          type="text"
          data-parse="uppercase"
        />
		</div>

		<div>
		<label>Admission-Date</label>
		<input
          name="admissionDate"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		<div>
		<label>Date-of-birth</label>
		<input
          name="dob"
          type="text"
          data-parse="uppercase"
        />
		</div>

		<div>
		<label>Type</label>
		<input
          name="type"
          type="text"
          data-parse="uppercase"
        />	
		</div>
		
		<div>
		<label>Previos school</label>
		<input
          name="previousSchool"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		<div>
		<label>Blood-Group</label>
		<input
          name="bloodGroup"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		
		<div>
		<label>Id-Proof</label>
		<input
          name="idProof"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		<div>
		<label>Contact Number</label>
		<input
          name="contactNumber"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		<div>
		<label>Gender</label>
		<input
          name="gender"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		<div>
		<label>Address</label>
		<input
          name="address"
          type="text"
          data-parse="uppercase"
        />
		</div>
		
		

        <button>Submit</button>
      </form>
    );
  }
}

export default AddAdmissionForm;