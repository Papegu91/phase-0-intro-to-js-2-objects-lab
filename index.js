const employee = {
  name: "Anne Mit",
  streetAddress: "10 Gas",
};

function updateEmployeeWithKeyAndValue(employee, ObjKey, ObjValue) {
  for (const key in employee) {
    delete employee[key];
  }

  employee.name = "Michael";
  

  let newEmployee = {
    ...employee , 
    streetAddress:"10 Gas",
  };
  return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue() {
    for (const key in employee) {
        delete employee[key];
      }
    
      employee.name = "Michael";
  employee.streetAddress = "10 Gas";
  return employee;    
}

function deleteFromEmployeeByKey() {
    for (const key in employee) {
        delete employee[key];
      }
    
      employee.name = "Micael";
      let newEmployee = {
        ...employee
      }
     delete newEmployee.name  
      return newEmployee

  
}
// console.log(deleteFromEmployeeByKey() )

function destructivelyDeleteFromEmployeeByKey() {
    for (const key in employee) {
        delete employee[key];
      }
    
      employee.name = "Michael";
      let newEmployee = delete employee.name;
      return employee
}
console.log(destructivelyDeleteFromEmployeeByKey())
