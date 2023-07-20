import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header testing", () => {
  test("renders H1 element in header, using title prop", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// test("renders H1 element in header, using title prop (get by role)", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });
//
// test("renders H1 element in header, using title prop (get by role, with name)", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });
//
// // FindBy (async, so needs await)
// test("renders H1 element in header, using title prop (async findBy)", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });
//
// // Check null using queryBy
// test("should return null as header text is incorrect)", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/no such header/i);
//   expect(headingElement).not.toBeInTheDocument();
// });
//
// // Test multiples with getAllByRole
// test("that total number of heading elements is n (1 in this case - not that useful)", async () => {
//   render(<Header title="My Header" />);
//   const headingElementsList = screen.getAllByRole("heading");
//   expect(headingElementsList.length).toBe(1);
// });

// NEXT VIDEO = PART 8
