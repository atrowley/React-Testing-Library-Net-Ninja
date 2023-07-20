import {fireEvent, render, screen} from "@testing-library/react";
import AddInput from "../AddInput";
import userEvent from "@testing-library/user-event";

// Mock function (empty) for setTodos prop
const mockSetToDo = jest.fn();

describe("AddInput testing", () => {
  test("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);

    // Replicates typing in a value to the target element
    fireEvent.change(inputElement, { target: { value: "Go shopping" } });
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input field (uses .type)", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    await userEvent.setup().type(inputElement, "Shipping World!");
    expect(inputElement.value).toBe("Shipping World!");
  });

  test("should have empty input when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go shopping" } });

    // button "name" refers to the text displayed on the button
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
