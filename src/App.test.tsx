import { render, screen } from "@testing-library/react";
// @ts-expect-error TS(2307): Cannot find module './components/App' or its corre... Remove this comment to see the full error message
import App from "./components/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
