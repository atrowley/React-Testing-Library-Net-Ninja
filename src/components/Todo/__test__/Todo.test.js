import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Todo testing", () => {
  test("should render div element for todo item", async () => {
    render(MockTodo());
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go shopping" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach((task) => {
      fireEvent.change(inputElement, { target: { value: task } });
      fireEvent.click(buttonElement);
    });
  };

  test("should render multiple div elements for todo items", async () => {
    render(MockTodo());
    addTask(["Go shopping", "Eat food", "Go toilet"]);
    // See data-testid="task-container" in TodoList.js
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  test("should not have completed class when initially rendered", async () => {
    render(MockTodo());
    addTask(["Go shopping"]);
    const divElement = screen.getByText(/Go shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("should have completed class when clicked", async () => {
    render(MockTodo());
    addTask(["Go shopping"]);
    const divElement = screen.getByText(/Go shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
