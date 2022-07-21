import React from "react";
import { useState } from "react/cjs/react.development";
import SignIn from "./SignIn";
import Table from "./Table";
function Main() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
    age: "",
    department: "",
    emailAddress: "",
    salary: ""
  });
console.log(formInputData)
  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = {
        fullName: "",
        emailAddress: "",
        age: "",
        department: "",
        salary: ""
      };
      setformInputData(emptyInput);
    }
  };

  return (
    <React.Fragment>
      <div>
        <div>
          <div>
            <SignIn
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
            <Table tableData={tableData} />
          </div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Main;