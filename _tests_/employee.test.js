const Employee = require("../lib/Employee");

test("create a new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("testing name input", () => {
  const name = "Richmond";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("testing id input", () => {
  const id = 23;
  const employeeInstance = new Employee("Richmond", id);
  expect(employeeInstance.id).toBe(id);
});

test("testing email input", () => {
  const email = "richmonddominguez@gmail.com";
  const employeeInstance = new Employee("Richmond", 23, email);
  expect(employeeInstance.email).toBe(email);
});

test("gets name by getName", () => {
  const testName = "Richmond";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test(" get ID through getID", () => {
  const testID = 2;
  const employeeInstance = new Employee("Richmond", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("get email through getEmail", () => {
  const testEmail = "richmonddominguez@gmail.com";
  const employeeInstance = new Employee("Richmond", 23, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee(
    "Richmond",
    23,
    "richmonddominguez@gmail.com"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
