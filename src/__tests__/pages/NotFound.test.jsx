import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import { describe, it, expect } from "vitest";

describe("<NotFound />", () => {
  it("should render properly", () => {
    const component = render(<NotFound />, { wrapper: MemoryRouter });
    expect(component).toBeTruthy();
  });

  it("should render the error title correctly", () => {
    const component = render(<NotFound />, { wrapper: MemoryRouter });
    const errorTitle = component.getByRole("heading", { level: 1 });
    expect(errorTitle).toBeInTheDocument();
    expect(errorTitle.textContent).toBe("Page not found");
  });

  it("should render the back to homepage link correctly", () => {
    const component = render(<NotFound />, { wrapper: MemoryRouter });
    const homepageLink = component.getByRole("link");

    expect(homepageLink).toBeInTheDocument();
    expect(homepageLink).toHaveAttribute("href", "/");
  });
});
