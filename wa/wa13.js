// Problem 1: Create JSON for each employee
const employees = [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false
    }
  ];
  
  // Problem 2: Create JSON for the company
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  // Problem 3: Add a new employee
  const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  company.employees.push(newEmployee);
  
  console.log(company);
  
  // Problem 4: Calculate total salary for all company employees
  function calculateTotalSalary(company) {
    let totalSalary = 0;
    for (const employee of company.employees) {
      totalSalary += employee.salary;
    }
    return totalSalary;
  }
  
  console.log("Total salary for all employees:", calculateTotalSalary(company));
  
  // Problem 5: Give raise to eligible employees
  function giveRaise(company) {
    for (const employee of company.employees) {
      if (employee.raiseEligible) {
        employee.salary *= 1.1; // Increase salary by 10%
        employee.raiseEligible = false; // Set raise eligibility to false
      }
    }
  }
  
  giveRaise(company);
  console.log("Employees after raise:", company.employees);
  
  // Problem 6: Update employees working from home
  const workingFromHome = ['Anna', 'Sam'];
  
  for (const employee of company.employees) {
    employee.wfh = workingFromHome.includes(employee.firstName);
  }
  
  console.log("Employees with WFH status:", company.employees);
  