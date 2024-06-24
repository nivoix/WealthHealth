import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../components/Header";
import { describe, it, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";

describe("<Header />", () => {
  it("should render properly", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });
    expect(component).toBeTruthy();
  });

  it("should render the title correctly", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });
    const title = component.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("HRnet");
  });

  it("should have a img logo", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    const logo = component.container.querySelector("img");
    expect(logo).toBeTruthy();
  });

  it("should have 3 links with the expected class names", () => {
    const component = render(<Header />, { wrapper: MemoryRouter });

    const linkElements = component.getAllByRole("link");
    expect(linkElements).toHaveLength(3);

    const homeLink = linkElements[0];
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass("logo");

    const employeeLink = linkElements[1];
    expect(employeeLink).toBeInTheDocument();
    expect(employeeLink).toHaveClass("nav__link");
    expect(employeeLink.textContent).toBe("Create Employee");

    const employeeListLink = linkElements[2];
    expect(employeeListLink).toBeInTheDocument();
    expect(employeeListLink).toHaveClass("nav__link");
    expect(employeeListLink.textContent).toBe("View Employees");
  });

  it("should have an EmployeeList NavLink rendered with the correct class when it is active", async () => {
    const component = render(<Header />, { wrapper: MemoryRouter });
    const user = userEvent.setup();

    const linkElements = component.getAllByRole("link");
    const employeeLink = linkElements[1];
    const employeeListLink = linkElements[2];

    await user.click(employeeListLink);

    expect(employeeListLink).toHaveClass("active");
    expect(employeeLink).not.toHaveClass("active");
  });
});
