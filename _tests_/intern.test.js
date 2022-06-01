const Intern = require("../lib/Intern");

test("test for shool name input", () => {
  const school = "UCSD";
  const employeeInstance = new Intern(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    school
  );
  expect(employeeInstance.school).toBe(school);
});

test("testing officeNumber will show the office#", () => {
  const school = "UCSD";
  const employeeInstance = new Intern(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    school
  );
  expect(employeeInstance.getSchool()).toBe(school);
});

test("testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    "UCSD"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
