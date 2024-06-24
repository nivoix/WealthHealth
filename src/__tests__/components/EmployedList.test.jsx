import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../utils/redux";
import EmployedList from "../../components/employedList/EmployedList";

describe("Given the user is the employee list page", () => {
  test("should display the table", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EmployedList />
          </BrowserRouter>
        </Provider>
      );
    });
    await waitFor(() => expect(screen.getAllByText("Tawton")));
  });
});
