const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
  const officeNum = 23;
  const employeeInstance = new Manager(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    officeNum
  );
  expect(employeeInstance.officeNum).toBe(officeNum);
});

test("Testing officeNumber will return office number.", () => {
  const officeNum = 23;
  const employeeInstance = new Manager(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    officeNum
  );
  expect(employeeInstance.getOfficeNum()).toBe(officeNum);
});

test("Testing role.", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    23
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
