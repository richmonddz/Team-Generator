const Engineer = require("../lib/Engineer");

test("test for github user", () => {
  const testGithub = "Richmonddz";
  const employeeInstance = new Engineer(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    testGithub
  );
  expect(employeeInstance.gitHub).toBe(testGithub);
});

test("testing getGithub will show github", () => {
  const testGithub = "Richmonddz";
  const employeeInstance = new Engineer(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Richmond",
    23,
    "richmonddominguez@gmail.com",
    "Richmonddz"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
