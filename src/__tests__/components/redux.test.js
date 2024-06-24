import { addEmployee, initialState, persistedReducer } from "../../utils/redux";
import { describe, test, it, expect } from "vitest";

const employee_test = [
  {
    id: 1,
    firstName: "Amanda",
    lastName: "Linasta",
    dateOfBirth: "02/04/1980",
    street: "43 8th Adison",
    city: "Addison",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCode: "35083",
    startDate: "02/05/2023",
    department: "Sales",
  },
];
describe("Redux action test", () => {
  test("should create an add employee action", () => {
    expect(addEmployee(employee_test)).toEqual({
      type: "employees/addEmployee",
      payload: employee_test,
    });
  });
});

describe("Redux reducer test", () => {
  it("should add a new employee in the state", async () => {
    persistedReducer(initialState, addEmployee(employee_test));
    expect(
      persistedReducer(initialState, addEmployee(employee_test))
        .employeeList[56]
    ).toEqual(employee_test);
  });
});
