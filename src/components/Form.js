import React, { useState, useEffect } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylwia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  useEffect(() => {
   let interval = setInterval(()=>setErrors([])
  ,2000); return () => clearInterval(interval)},[errors])

 

function handleSubmit(event) {
  event.preventDefault();
    if (firstName.length > 0 && lastName.length > 0) {
    const formData = { firstName: firstName, lastName: lastName };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
  } else if(firstName.length > 0 && lastName.length === 0 ) {
    setErrors(["Also last name is required as you coming from an origin, baby!"]);
  } else {setErrors(["First name is required!"]);}
}
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
  
  
}

export default Form;