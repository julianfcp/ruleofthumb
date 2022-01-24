import { render, screen } from "@testing-library/react";
import Navigation from "../src/Components/Navigation";

it("shows the nav", () => {
  const { findByText } = render(<Navigation />);
  expect(findByText("Rule of thumb.")).toBeTruthy(); //passes
});
