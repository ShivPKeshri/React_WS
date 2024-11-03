import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import World from "./World";

describe("World Component", () => {
  test('should render "Some Paragraph" if the button is not clicked', () => {
    render(<World />);
    const outputElement = screen.getByText("Some Paragraph", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('should render "Changed" if the button is clicked', () => {
    render(<World />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    //userEvent.click(buttonElement)

    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
