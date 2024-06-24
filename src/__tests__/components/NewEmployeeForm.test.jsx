import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../utils/redux";
import NewEmployeeForm from "../../components/NewEmployeeForm";
import { ModalComponent } from "modal-react-validation";
import DatePicker from "react-datepicker";
import Select from "react-select";

import { MemoryRouter } from "react-router-dom";

describe("user create employee and submit the form", () => {
  test("Then a modal is displayed", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NewEmployeeForm />
        </Provider>
      </BrowserRouter>
    );
    const buttonSave = screen.getByText("Save");

    fireEvent.click(buttonSave);

    const component = render(<ModalComponent />, { wrapper: MemoryRouter });
    expect(component).toBeTruthy();
  });
});

describe("user select input birth date", () => {
  test("then the datepicker is displayed", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NewEmployeeForm />
        </Provider>
      </BrowserRouter>
    );
    const inputBirthDate = screen.getByLabelText("Date of Birth");
    fireEvent.click(inputBirthDate);

    const component = render(<DatePicker />, { wrapper: MemoryRouter });
    expect(component).toBeTruthy();
  });
});

describe("user select the state", () => {
  test("then the selector is displayed", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NewEmployeeForm />
        </Provider>
      </BrowserRouter>
    );
    const selectState = screen.getByLabelText("State");
    fireEvent.click(selectState);

    const component = render(<Select />, { wrapper: MemoryRouter });
    expect(component).toBeTruthy();
  });
});
