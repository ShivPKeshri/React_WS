// Arrange = setup the test data or test envirnment

// Act = run the logic that should be tested (eg execute function)

// Assert = compare executed result with expected result

import Hello from "./Hello";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Hello Component", () => {
  test('should render "Hello world" as a test result', () => {
    // Arrange
    render(<Hello />);

    // Act
    const outputElement = screen.getByText("Hello World", { exact: false });

    // Assert
    expect(outputElement).toBeInTheDocument();
  });
});
